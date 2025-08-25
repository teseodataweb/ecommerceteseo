const ENDPOINT_LOCAL =
  "http://127.0.0.1:5001/teseo-store/us-central1/createCheckoutSession";

export async function goCheckoutWithPriceId(priceId, email) {
  const res = await fetch(ENDPOINT_LOCAL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.url) {
    throw new Error(data?.error || "No pudimos iniciar el pago");
  }
  window.location.href = data.url;
}
