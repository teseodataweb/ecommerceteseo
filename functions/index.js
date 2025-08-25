// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");

admin.initializeApp();

// Lee config desde env o desde functions:config()
const CFG = functions.config ? functions.config() : {};
const STRIPE_SECRET = process.env.STRIPE_SECRET || (CFG.stripe && CFG.stripe.secret);

let stripe;
if (!STRIPE_SECRET) {
  console.warn("⚠️ Stripe secret missing. Set with: firebase functions:config:set stripe.secret=sk_test_...");
} else {
  stripe = Stripe(STRIPE_SECRET);
}

// Orígenes permitidos para CORS
const ALLOW_ORIGINS = new Set(
  [
    "http://localhost:3000",
    CFG?.app?.base_url_dev,
    CFG?.app?.base_url_prod,
  ].filter(Boolean)
);

/**
 * POST /createCheckoutSession
 * body: { priceId: "price_...", email?: string }
 * resp: { url }
 */
exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  try {
    // CORS simple
    const origin = req.headers.origin;
    if (origin && ALLOW_ORIGINS.has(origin)) {
      res.set("Access-Control-Allow-Origin", origin);
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type");
    }
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).send("Method not allowed");

    // Si no hay clave, no intentes llamar a Stripe (evita crash)
    if (!stripe) {
      return res.status(500).json({ error: "stripe_not_configured" });
    }

    const { priceId, email } = req.body || {};
    if (!priceId || !String(priceId).startsWith("price_")) {
      return res.status(400).json({ error: "missing_or_invalid_priceId" });
    }

    const isEmulator = !!process.env.FUNCTIONS_EMULATOR;
    const baseUrl = isEmulator
      ? (CFG?.app?.base_url_dev || "http://localhost:3000")
      : (CFG?.app?.base_url_prod || "https://store.teseodata.com");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      success_url: `${baseUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error("createCheckoutSession error:", err);
    return res.status(500).json({ error: "server_error" });
  }
});
