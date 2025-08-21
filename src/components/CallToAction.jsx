import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="seller padding-y-120">
      <div className="container container-two">
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="support position-relative z-index-1">
              <img
                src="assets/images/shapes/spider-net-sm.png"
                alt=""
                className="spider-net position-absolute top-0 end-0 z-index--1"
              />
              <img
                src="assets/images/shapes/arrow-shape.png"
                alt=""
                className="arrow-shape"
              />
              <div className="row align-items-center">
                <div className="col-lg-1 d-lg-block d-none" />
                <div className="col-lg-3 col-md-4 d-md-block d-none">
                  <div className="support-thumb text-center">
                    <img src="assets/images/thumbs/support-img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 d-lg-block d-none" />
                <div className="col-lg-5 col-md-8">
                  <div className="support-content">
                    <h3 className="support-content__title mb-3">
                      Accede a los reportes estratégicos de tu industria
                    </h3>
                    <p className="support-content__desc">
                      Compra segura, descarga inmediata en PDF.
                    </p>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <div className="text-center">
                        <Link
                          to="/all-product"
                          className="btn btn-main btn-lg pill fw-300"
                        >
                          Ver todos los reportes
                        </Link>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="follow-btn btn btn-outline-light btn-lg pill"
                          onClick={() => window.location.href = "/all-product"}
                        >
                          Hablar con un asesor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;