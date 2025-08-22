import { Link } from "react-router-dom";

const FeaturedOne = () => {
  return (
    <section className="featured-product padding-y-120 position-relative z-index-1">
      <img
        src="assets/images/gradients/featured-gradient.png"
        alt=""
        className="bg--gradient white-version"
      />
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
        src="assets/images/shapes/element1.png"
        alt=""
        className="element two"
      />
      <div className="container container-two">
        <div className="row gy-4 flex-wrap-reverse align-items-center">
          <div className="col-xl-6">
            <div className="row gy-4 card-wrapper">


              <div className="col-sm-6 d-flex justify-content-center align-items-center">
                <div className="product-item" style={{ background: "none", boxShadow: "none" }}>
                  <Link to="/product-details" className="link w-100 d-flex justify-content-center align-items-center">
                    <img
                      src="assets/images/thumbs/about-mockup.png"
                      alt=""
                      className="cover-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-center align-items-center">
                <div className="product-item" style={{ background: "none", boxShadow: "none" }}>
                  <Link to="/product-details" className="link w-100 d-flex justify-content-center align-items-center">
                    <img
                      src="assets/images/thumbs/about-mockup.png"
                      alt=""
                      className="cover-img"
                    />
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="col-xl-1 d-xl-block d-none" />
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Acerca de Teseo Store</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Teseo Store es la plataforma oficial de Teseo Data Lab para adquirir reportes de mercado en México. Cada estudio está diseñado para ofrecerte datos verificables, proyecciones estratégicas y tendencias sectoriales que impulsan decisiones de negocio. Compra segura, descarga inmediata y respaldo de expertos en analítica.
                </p>
              </div>
              <Link
                to="all-product"
                className="btn btn-main btn-lg pill fw-300"
              >
                Ver todos los reportes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOne;
