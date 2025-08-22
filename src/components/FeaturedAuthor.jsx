
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const FeaturedAuthor = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 11.5}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);
  return (
    <section className="top-author padding-y-120 section-bg position-relative z-index-1">
      <img
        src="assets/images/gradients/featured-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
      <img
        src="assets/images/shapes/spider-net.png"
        alt=""
        className="spider-net position-absolute top-0 start-0 z-index--1 white-version"
      />
      <img
        src="assets/images/shapes/spider-net-white2.png"
        alt=""
        className="spider-net position-absolute top-0 start-0 z-index--1 dark-version"
      />
      <img
        src="assets/images/shapes/pattern-curve-three.png"
        alt=""
        className="position-absolute top-0 end-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="row gy-4 align-items-center">
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Confianza respaldada por líderes del sector</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Empresas e instituciones en México confían en Teseo para tomar decisiones con datos reales. Nuestros reportes ya impulsan estrategias en construcción, concreto y acero.
                </p>
              </div>
              <div className="author-info d-flex align-items-center gap-3" style={{ width: "100%" }}>
                {/*
                <div className="author-info__thumb flex-grow-1 d-flex justify-content-center" style={{ maxWidth: "50%" }}>
                  <img
                    src="assets/images/thumbs/author-img.png"
                    alt=""
                    style={{ width: "100%", height: "auto", objectFit: "cover", maxWidth: "180px", minWidth: "120px" }}
                  />
                </div>
                */}
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/amci.png"
                      alt="Logo de AMCI"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                <div className="author-info__content flex-grow-1" style={{ maxWidth: "50%" }}>
                  <h6 className="author-info__name mb-1" style={{ fontSize: "1.1rem", textAlign: "justify" }}>
                    Presidente de la Asociación Mexicana de Profesionales Inmobiliarios (AMCI)
                  </h6>
                  <span className="author-info__text" style={{ fontSize: "0.95rem", textAlign: "justify"}}>
                    El reporte de Perspectivas del Mercado del Concreto 2025 nos permitió anticipar la demanda y preparar a nuestros asociados con información clave.
                  </span>
                </div>
              </div>
              <div className="flx-align gap-2 mt-48">
                <Link
                  to="/profile"
                  className="btn btn-main btn-lg pill fw-300"
                >
                  Ver sitio oficial
                </Link>
                <button
                  type="button"
                  className="follow-btn btn btn-outline-light btn-lg pill"
                >
                  Ver preguntas frecuentes
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="circle-content position-relative">
              <div
                className="row gy-4 justify-content-center align-items-center"
                style={{ minHeight: 340 }}
              >
                {/* Grid de logos de aliados/partners */}
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/ap-safety.png"
                      alt="Logo de AP Safety"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/ampi-riviera-nayarit.png"
                      alt="Logo de AMPI Riviera Nayarit"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/sherwin-williams.png"
                      alt="Logo de Sherwin-Williams"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/le-curve.png"
                      alt="Logo de Le Curve"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                {/* Puedes agregar más logos aquí si es necesario */}
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/inmobiliaria-valdepenas.png"
                      alt="Logo de Inmobiliaria Valdepeñas"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-center align-items-center">
                  <div className="partner-logo-wrapper">
                    <img
                      src="assets/images/clients/cayco-concretos.png"
                      alt="Logo de Cayco Concretos"
                      className="partner-logo"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Estilos en línea para los logos */}
            <style>
              {`
                .partner-logo-wrapper {
                  width: 160px;
                  height: 160px;
                  border-radius: 50%;
                  background: #f5f5f7;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: box-shadow 0.2s, background 0.2s;
                  box-shadow: 0 2px 8px rgba(80,80,80,0.04);
                  margin: 0 auto;
                }
                .partner-logo {
                  width: 120px;
                  height: 120px;
                  object-fit: contain;
                  border-radius: 50%;
                  filter: grayscale(1) brightness(0.95);
                  transition: filter 0.2s;
                  background: #fff;
                  padding: 12px;
                  text-align: center;
                  align-content: center;
                }
                .partner-logo-wrapper:hover,
                .partner-logo-wrapper:focus {
                  background: linear-gradient(90deg, #7c3aed 0%, #f20587 100%);
                  box-shadow: 0 4px 16px rgba(124,58,237,0.15);
                }
                .partner-logo-wrapper:hover .partner-logo,
                .partner-logo-wrapper:focus .partner-logo {
                  filter: none;
                  background: #fff;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuthor;
