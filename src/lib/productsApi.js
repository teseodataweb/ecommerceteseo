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
    // Si falta índice compuesto, hacemos un fallback temporal
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
