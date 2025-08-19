const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: (origin, cb) => {
    const allow = [
      "http://localhost:3000",
      functions.config().app.base_url_dev,
      functions.config().app.base_url_prod
    ].filter(Boolean);
    // permitir peticiones sin origin (Postman/curl)
    if (!origin || allow.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  },
  methods: ["POST", "OPTIONS"],
  credentials: true,
});
const Stripe = require("stripe");

admin.initializeApp();
const db = admin.firestore();
const stripe = Stripe(functions.config().stripe.secret);

/**
 * POST /createCheckoutSession
 * body: { slug: string, tier?: "public"|"amci", email?: string }
 *
 * Busca el documento en `products` con ese slug (agrega -amci si tier=amci),
 * toma el price_id desde el ID del documento y crea la sesión de Stripe.
 */
exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method === "OPTIONS") return res.status(204).send("");
      if (req.method !== "POST") return res.status(405).send("Method not allowed");

      const { slug, tier = "public", email } = req.body || {};
      if (!slug) return res.status(400).json({ error: "missing_slug" });
      if (!["public", "amci"].includes(tier)) return res.status(400).json({ error: "invalid_tier" });

      // slug esperado en Firestore (amci usa slug con -amci)
      const targetSlug = tier === "amci" ? `${slug}-amci` : slug;

      // buscamos el doc por slug y tier; recuerda que el ID del doc es el price_id
      const snap = await db.collection("products")
        .where("slug", "==", targetSlug)
        .where("tier", "==", tier)
        .limit(1)
        .get();

      if (snap.empty) return res.status(404).json({ error: "product_not_found_for_slug_tier" });

      const doc = snap.docs[0];
      const priceId = doc.id; // ID = price_xxx
      if (!priceId || !priceId.startsWith("price_")) {
        return res.status(500).json({ error: "invalid_price_id" });
      }

      const baseUrl = process.env.FUNCTIONS_EMULATOR
        ? (functions.config().app.base_url_dev || "http://localhost:3000")
        : (functions.config().app.base_url_prod || "https://store.teseodata.com");

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: priceId, quantity: 1 }],
        customer_email: email || undefined,
        success_url: `${baseUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/product/${slug}`,
        // Si luego usas cupones:
        // allow_promotion_codes: true
      });

      return res.json({ url: session.url });
    } catch (err) {
      console.error("createCheckoutSession error:", err);
      // Si la query requiere índice, reenvía un código claro
      if (String(err?.message || "").includes("FAILED_PRECONDITION")) {
        return res.status(500).json({ error: "missing_index" });
      }
      return res.status(500).json({ error: "server_error" });
    }
  });
});
