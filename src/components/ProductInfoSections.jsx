// src/components/ProductInfoSections.jsx
import React from "react";

/**
 * Componente de secciones informativas del reporte.
 * Props: product (objeto con campos opcionales descritos abajo)
 *
 * Renderiza condicionalmente:
 * - Resumen (description_md)
 * - Beneficios (beneficios[])
 * - Contenido/Índice (indice[])
 * - Metodología (metodologia_md)
 * - Alcance (alcance_md)
 * - Entregables (entregables[])
 * - FAQ (faq: {q,a}[])
 * - Datos clave (pages, updated_at)
 */
export default function ProductInfoSections({ product }) {
  if (!product) return null;

  const {
    description_md,
    beneficios = [],
    indice = [],
    metodologia_md,
    alcance_md,
    entregables = [],
    faq = [],
    pages,
    updated_at,
  } = product;

  const fmtDate = (v) => {
    if (!v) return null;
    if (typeof v === "string") return v;
    const ms = v?.seconds ? v.seconds * 1000 : Number(v);
    if (!ms) return null;
    try { return new Date(ms).toLocaleDateString("es-MX"); } catch { return null; }
  };

  return (
    <section className="padding-y-120">
      <div className="container container-two">
        <div className="row gy-5">
          {/* Columna de contenido */}
          <div className="col-lg-8">
            {/* Resumen */}
            {description_md && (
              <div className="mb-5">
                <h3 className="text-white mb-3">Resumen ejecutivo</h3>
                <p className="text-slate-300">{description_md}</p>
              </div>
            )}

            {/* Beneficios */}
            {beneficios.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Beneficios clave</h4>
                <ul className="product-list">
                  {beneficios.map((b, i) => (
                    <li key={i} className="product-list__item">{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contenido / Índice */}
            {indice.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Contenido del reporte</h4>
                <ol className="product-list ps-3">
                  {indice.map((item, i) => (
                    <li key={i} className="product-list__item">{item}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Metodología */}
            {metodologia_md && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Metodología</h4>
                <p className="text-slate-300">{metodologia_md}</p>
              </div>
            )}

            {/* Alcance */}
            {alcance_md && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Alcance</h4>
                <p className="text-slate-300">{alcance_md}</p>
              </div>
            )}

            {/* Entregables */}
            {entregables.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Qué incluye tu compra</h4>
                <ul className="product-list">
                  {entregables.map((e, i) => (
                    <li key={i} className="product-list__item">{e}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ específico del producto */}
            {faq.length > 0 && (
              <div className="mb-5">
                <h4 className="text-white mb-3">Preguntas frecuentes</h4>
                <div className="accordion" id="productFaq">
                  {faq.map((f, i) => {
                    const id = `faq-${i}`;
                    return (
                      <div className="accordion-item bg-transparent border rounded-3 mb-2" key={id}>
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${id}`}
                          >
                            {f.q}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#productFaq"
                        >
                          <div className="accordion-body text-slate-300">
                            {f.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Columna lateral de datos clave */}
          <div className="col-lg-4">
            <div className="section-bg rounded-3 p-4">
              <h5 className="text-white mb-3">Datos clave</h5>
              <ul className="meta-attribute">
                {fmtDate(updated_at) && (
                  <li className="meta-attribute__item">
                    <span className="name">Actualización</span>
                    <span className="details">{fmtDate(updated_at)}</span>
                  </li>
                )}
                {pages && (
                  <li className="meta-attribute__item">
                    <span className="name">Páginas</span>
                    <span className="details">{pages}</span>
                  </li>
                )}
                <li className="meta-attribute__item">
                  <span className="name">Formato</span>
                  <span className="details">PDF descargable</span>
                </li>
                <li className="meta-attribute__item">
                  <span className="name">Licencia</span>
                  <span className="details">Uso interno de la empresa</span>
                </li>
              </ul>
              {/* Puedes añadir aquí un CTA secundario si quieres */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
