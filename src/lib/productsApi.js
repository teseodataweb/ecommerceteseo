// src/lib/productsApi.js
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchPublicProducts() {
  const ref = collection(db, "products");
  const q = query(
    ref,
    where("active", "==", true),
    where("tier", "==", "public"),
    orderBy("createdAt", "desc"),
    limit(50)
  );

  try {
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (err) {
    const needsIndex =
      String(err?.message || "").includes("FAILED_PRECONDITION") ||
      String(err?.code || "").includes("failed-precondition");

    if (needsIndex) {
      console.warn("Falta índice compuesto. Usando fallback sin orderBy temporalmente.");
      const snap = await getDocs(
        query(ref, where("active", "==", true), where("tier", "==", "public"))
      );
      return snap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .sort(
          (a, b) =>
            (b.createdAt?.toMillis?.() ?? 0) - (a.createdAt?.toMillis?.() ?? 0)
        );
    }
    throw err;
  }
}

/* 🔽 NUEVO: traer un producto por slug */
export async function fetchProductBySlug(slug) {
  const ref = collection(db, "products");
  const q = query(ref, where("slug", "==", slug), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;

  const doc = snap.docs[0];
  const raw = { id: doc.id, ...doc.data() };

  // Normaliza nombres para que ProductDetails no truene si cambian:
  return {
    ...raw,
    nombre: raw.nombre ?? raw.name ?? raw.productName,
    cover_url: raw.cover_url ?? raw.coverUrl,
    price_cents: raw.price_cents ?? raw.amount ?? 0,
    currency: raw.currency ?? "MXN",
    beneficios: raw.beneficios ?? [],
    indice: raw.indice ?? [],
    tags: raw.tags ?? [],
  };
}

/* (Opcional) traer por id */
export async function fetchProductById(id) {
  const ref = collection(db, "products");
  const q = query(ref, where("__name__", "==", id), limit(1));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const doc = snap.docs[0];
  const raw = { id: doc.id, ...doc.data() };
  return {
    ...raw,
    nombre: raw.nombre ?? raw.name ?? raw.productName,
    cover_url: raw.cover_url ?? raw.coverUrl,
    price_cents: raw.price_cents ?? raw.amount ?? 0,
    currency: raw.currency ?? "MXN",
    beneficios: raw.beneficios ?? [],
    indice: raw.indice ?? [],
    tags: raw.tags ?? [],
  };
}
