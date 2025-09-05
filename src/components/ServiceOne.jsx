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
                Proyecciones de Demanda y Precios
              </h5>
              <p className="service-item__desc">
                Anticipa el comportamiento con escenarios de consumo y variaciones de precio para planear con certidumbre.
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
                Análisis de Sectores Clave
              </h5>
              <p className="service-item__desc">
                Construcción, automotriz e infraestructura: conoce qué industrias marcarán el rumbo de la demanda de acero.
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
                Competencia y Market Share
              </h5>
              <p className="service-item__desc">
                Descubre la participación de los principales jugadores y compara tu posición en el mercado.
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
                Datos Verificados y Accionables
              </h5>
              <p className="service-item__desc">
                Datos Verificados y AccionablesInformación validada con la metodología Teseo, lista para convertir en decisiones estratégicas inmediatas.
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
                Riesgos y Volatilidad
              </h5>
              <p className="service-item__desc">
                Identifica presiones de costos, logística y riesgos globales para blindar tu estrategia de negocio.
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
                Oportunidades de Crecimiento
              </h5>
              <p className="service-item__desc">
                Detecta nichos desatendidos y nuevas tendencias que representan potencial de expansión rentable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
