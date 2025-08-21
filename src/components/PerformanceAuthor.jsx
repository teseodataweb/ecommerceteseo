
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PerformanceAuthor = () => {
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
    <section className="top-performance overflow-hidden padding-y-120 position-relative z-index-1">
      <img
        src="assets/images/shapes/spider-net.png"
        alt=""
        className="spider-net position-absolute top-0 end-0 z-index--1 white-version"
      />
      <img
        src="assets/images/shapes/spider-net-white.png"
        alt=""
        className="spider-net position-absolute top-0 end-0 z-index--1 dark-version"
      />
      <img
        src="assets/images/shapes/pattern-curve-four.png"
        alt=""
        className="position-absolute top-0 start-0 z-index--1"
      />
      <img
        src="assets/images/shapes/element2.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="row gy-4 align-items-center flex-wrap-reverse">
          <div className="col-lg-7 pe-lg-5">
            <div className="position-relative">
              <div className="circle style-two static-circle">
                <div className="circle__badge">
                  <img src="assets/images/icons/featured-badge.png" alt="" />
                </div>
                <div className="circle__desc circle__text">
                  <p ref={textRef}>Beneficios clave de Teseo Store.</p>
                </div>
              </div>
              <div className="performance-content">
                <div className="performance-content__item">
                  <h5 className="performance-content__count">
                    Compra segura con Stripe
                  </h5>
                </div>
                <div className="performance-content__item">
                  <h5 className="performance-content__count">
                    Descarga inmediata en PDF
                  </h5>
                </div>
                <div className="performance-content__item">
                  <h5 className="performance-content__count">
                    Datos accionables para tu estrategia
                  </h5>
                </div>
                <div className="performance-content__item">
                  <h5 className="performance-content__count">Reportes actualizados a 2025</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">¿Por qué elegir Teseo Data Lab?</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Cada reporte está diseñado para darte información confiable y práctica: compra protegida, entrega inmediata y datos listos para accionar en tu industria.
                </p>
              </div>
              <Link
                to="/register"
                className="btn btn-main btn-lg pill fw-300"
              >
                Explorar reportes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAuthor;
