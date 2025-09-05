import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <section className="service padding-y-120 position-relative z-index-1 overflow-hidden">
      <img
        src="/assets/images/shapes/curve-pattern3.png"
        alt=""
        className="position-absolute end-0 top-0 z-index--1"
      />
      <img
        src="/assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
          <div className="section-heading__inner w-lg">
            <h3 className="section-heading__title">Beneficios de este reporte</h3>
            <p className="section-heading__desc">
              Descubre lo que obtendrás al descargar este análisis: datos prácticos, proyecciones y estrategias listas para accionar.
            </p>
          </div>
          <Link to="#" className="btn btn-main btn-lg pill">
            See All Services
          </Link>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="/assets/images/icons/service-icon1.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Segmentación de Mercado
              </h5>
              <p className="service-item__desc">
                Infraestructura, vivienda y turismo analizados con detalle regional y nacional para decisiones más precisas.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="/assets/images/icons/service-icon2.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Precios Regionales Comparativos
              </h5>
              <p className="service-item__desc">
                Benchmarks de costos por zona (norte, centro y sur) para ajustar tu estrategia comercial y de distribución.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon" style={{overflow: "hidden", maxWidth: "50%", alignItems: "center", justifyContent: "center"}}>
                <img
                  src="/assets/images/icons/service-icon3.png"
                  alt=""
                  style={{maxWidth: "50%", height: "auto", display: "block"}}
                />
              </span>
              <h5 className="service-item__title my-3">
                Actores y Participación
              </h5>
              <p className="service-item__desc">
                Cementeras, concreteros independientes y grandes jugadores: conoce su participación real en el mercado.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="/assets/images/icons/service-icon4.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Pipeline de Proyectos Estratégicos
              </h5>
              <p className="service-item__desc">
                Identifica obras clave en desarrollo que impulsarán la demanda en los próximos años.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="/assets/images/icons/service-icon5.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Proyecciones y Consumo
              </h5>
              <p className="service-item__desc">
                Cifras de valor de mercado y consumo proyectado con horizonte 2025, listas para planear tu ROI.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-6">
            <div className="service-item hover-bg-main">
              <img
                src="/assets/images/gradients/service-hover-bg.png"
                alt=""
                className="hover-bg white-version"
              />
              <img
                src="/assets/images/gradients/service-hover-bg-dark.png"
                alt=""
                className="hover-bg dark-version"
              />
              <span className="service-item__icon">
                <img src="/assets/images/icons/service-icon6.svg" alt="" />
              </span>
              <h5 className="service-item__title my-3">
                Recomendaciones Estratégicas
              </h5>
              <p className="service-item__desc">
                Insights prácticos para maximizar tu rentabilidad y fortalecer tu posición competitiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
