// ProductDetails.jsx
import { Link } from "react-router-dom";

const money = (cents = 0, currency = "MXN") =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency }).format((cents || 0) / 100);

export default function ProductDetails({ product }) {
  if (!product) return null;

  const {
    nombre,
    subtitulo,
    cover_url,
    price_cents,
    currency = "MXN",
    price_id,
    beneficios = [],
    indice = [],
    description_md,
    pages,
    file_size_mb,
    updated_at,
    tags = [],
    slug,
  } = product;

  const handleCheckout = async () => {
    if (!price_id) return alert("Este producto aún no tiene price_id configurado.");
    // TODO: reemplaza por tu integración real
    // const res = await fetch('/api/checkout/session', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ price_id, product_slug: slug })});
    // const { url } = await res.json(); window.location.href = url;
    console.log("Ir a Stripe Checkout con", price_id);
  };

  return (
    <div className="product-details mt-32 padding-b-120">
      <div className="container container-two">
        <div className="row gy-4">
          {/* Columna principal */}
          <div className="col-lg-8">
            <div className="product-details">
              <div className="product-details__thumb">
                <img
                  src={cover_url || "assets/images/thumbs/product-details.png"}
                  alt={`Portada del reporte ${nombre || "Reporte de mercado"}`}
                  className="w-100 rounded-3 shadow-lg"
                />
              </div>

              <div className="product-details__buttons flx-align justify-content-center gap-3 mt-3">
                <button
                  type="button"
                  className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center"
                  onClick={handleCheckout}
                >
                  Comprar y descargar
                </button>
                <Link to="/faq" className="btn btn-white pill px-sm-5">Ver FAQ</Link>
              </div>

              <h2 className="mt-4 text-white">{nombre}</h2>
              {subtitulo && <p className="text-slate-300 mt-1">{subtitulo}</p>}
              {description_md && <p className="text-slate-300 mt-3">{description_md}</p>}

              {beneficios.length > 0 && (
                <div className="product-details__item mt-4">
                  <h5 className="product-details__title mb-3">Qué obtienes</h5>
                  <ul className="product-list">
                    {beneficios.map((b, i) => <li key={i} className="product-list__item">{b}</li>)}
                  </ul>
                </div>
              )}

              {indice.length > 0 && (
                <div className="product-details__item mt-4">
                  <h5 className="product-details__title mb-3">Contenido</h5>
                  <ol className="product-list ps-3">
                    {indice.map((it, i) => <li key={i} className="product-list__item">{it}</li>)}
                  </ol>
                </div>
              )}

              <div className="mt-4 d-flex flex-wrap gap-3">
                <button className="btn btn-main pill" onClick={handleCheckout}>Comprar ahora</button>
                <Link to="/productos" className="btn btn-outline-light pill">Ver más reportes</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="product-sidebar section-bg">
              <div className="product-sidebar__top position-relative flx-between gap-1">
                <h6 className="product-sidebar__title m-0">{money(price_cents, currency)}</h6>
              </div>

              <ul className="sidebar-list mt-3">
                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
                  <span className="text">Compra segura con Stripe</span>
                </li>
                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
                  <span className="text">Descarga inmediata (PDF)</span>
                </li>
                <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
                  <span className="icon"><img src="assets/images/icons/check-cirlce.svg" alt="" /></span>
                  <span className="text">Datos verificados 2025</span>
                </li>
              </ul>

              <button className="btn btn-main w-100 pill mt-24" onClick={handleCheckout}>
                Comprar y descargar
              </button>

              <ul className="meta-attribute mt-24">
                {updated_at && (
                  <li className="meta-attribute__item">
                    <span className="name">Actualización</span>
                    <span className="details">
                      {typeof updated_at === "string"
                        ? updated_at
                        : new Date(
                            updated_at?.seconds ? updated_at.seconds * 1000 : updated_at
                          ).toLocaleDateString("es-MX")}
                    </span>
                  </li>
                )}
                {pages && (
                  <li className="meta-attribute__item">
                    <span className="name">Páginas</span>
                    <span className="details">{pages}</span>
                  </li>
                )}
                {file_size_mb && (
                  <li className="meta-attribute__item">
                    <span className="name">Tamaño estimado</span>
                    <span className="details">{file_size_mb} MB</span>
                  </li>
                )}
                {tags.length > 0 && (
                  <li className="meta-attribute__item">
                    <span className="name">Tags</span>
                    <span className="details">
                      {tags.map((t, i) => <span key={t}>{t}{i < tags.length - 1 ? ", " : ""}</span>)}
                    </span>
                  </li>
                )}
              </ul>

              <div className="mt-3 d-flex flex-column gap-2">
                <Link to="/faq" className="link text-main fw-500">Ver preguntas frecuentes</Link>
                <Link to="/contacto" className="link text-main fw-500">Hablar con un asesor</Link>
              </div>
            </div>
          </div>
          {/* /Sidebar */}
        </div>
      </div>
    </div>
  );
}
