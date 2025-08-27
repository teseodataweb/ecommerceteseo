import { Link } from "react-router-dom";

/**
 * BreadcrumbTwo
 * Props:
 * - title: string (obligatorio) -> nombre del reporte
 * - path: array opcional de { label, href }
 * - showTabs: boolean (default true) -> muestra las pestañas
 * - chips: string[] opcional -> etiquetas de confianza
 */
export default function BreadcrumbTwo({
  title = "Detalle de reporte",
  path = [
    { label: "Inicio", href: "/" },
    { label: "Reportes", href: "/productos" },
  ],
  showTabs = true,
  chips = ["Compra segura con Stripe", "Descarga inmediata", "PDF"],
}) {
  return (
    <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
      <div className="breadcrumb-two">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb-two-content">
                {/* Rastro */}
                <ul className="breadcrumb-list flx-align gap-2 mb-2">
                  {path.map((p, i) => (
                    <li key={p.label} className="breadcrumb-list__item font-14 text-body">
                      {p.href ? (
                        <Link
                          to={p.href}
                          className="breadcrumb-list__link text-body hover-text-main"
                        >
                          {p.label}
                        </Link>
                      ) : (
                        <span className="breadcrumb-list__text">{p.label}</span>
                      )}
                      {i < path.length - 1 && (
                        <span className="breadcrumb-list__icon font-10 mx-2" aria-hidden="true">
                          <i className="fas fa-chevron-right" />
                        </span>
                      )}
                    </li>
                  ))}
                  {/* Último item: título actual sin link */}
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__icon font-10 mx-2" aria-hidden="true">
                      <i className="fas fa-chevron-right" />
                    </span>
                    <span className="breadcrumb-list__text text-capitalize">{title}</span>
                  </li>
                </ul>

                {/* Título */}
                <h1 className="breadcrumb-two-content__title mb-3 text-capitalize">
                  {title}
                </h1>

                {/* Chips de confianza */}
                {chips?.length > 0 && (
                  <div className="breadcrumb-content flx-align gap-2 flex-wrap">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="badge text-bg-dark border border-light-subtle rounded-pill px-3 py-2"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pestañas (opcional) */}
      {showTabs && (
        <div className="container container-two">
          <div className="breadcrumb-tab flx-wrap align-items-start gap-lg-4 gap-2">
            <ul className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-product-details-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-product-details"
                  type="button"
                  role="tab"
                  aria-controls="pills-product-details"
                  aria-selected="true"
                >
                  Detalles
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-content-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-content"
                  type="button"
                  role="tab"
                  aria-controls="pills-content"
                  aria-selected="false"
                >
                  Contenido
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-faq-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-faq"
                  type="button"
                  role="tab"
                  aria-controls="pills-faq"
                  aria-selected="false"
                >
                  FAQ
                </button>
              </li>
            </ul>

            {/* Share (opcional) */}
            <div className="social-share">
              <button type="button" className="social-share__button" aria-label="Compartir">
                <img src="assets/images/icons/share-icon.svg" alt="" />
              </button>
              <div className="social-share__icons">
                <ul className="social-icon-list colorful-style">
                  <li className="social-icon-list__item">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noreferrer"
                      className="social-icon-list__link text-body flex-center"
                      aria-label="Compartir en Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="social-icon-list__item">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noreferrer"
                      className="social-icon-list__link text-body flex-center"
                      aria-label="Compartir en LinkedIn"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="social-icon-list__item">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`}
                      target="_blank" rel="noreferrer"
                      className="social-icon-list__link text-body flex-center"
                      aria-label="Compartir en X"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
