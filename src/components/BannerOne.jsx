import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <>
      <section className="hero section-bg z-index-1">
        <img
          src="assets/images/gradients/banner-gradient.png"
          alt=""
          className="bg--gradient white-version"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon2.png"
          alt=""
          className="element two"
        />
        <div className="container container-two">
          <div className="row align-items-center gy-sm-5 gy-4">
            <div className="col-lg-6">
              <div className="hero-inner position-relative pe-lg-5">
                <div>
                  <h2 className="hero-inner__title">
                    Reportes de mercado en México, listos para accionar
                  </h2>
                  <p className="hero-inner__desc font-18">
                    Compra segura con Stripe y descarga inmediata en PDF. Respaldado por Teseo Data Lab.
                  </p>

                  
                  <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>PDF</span>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>Actualizado 2025</span>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>Datos accionables</span>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>Teseo Data Lab</span>
                  </div>
                  

                   {/*
                  <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>Pago protegido</span>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>Entrega inmediata5</span>
                    <span style={{
                      background: "#f1f3f4",
                      color: "#333",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid #e0e0e0"
                    }}>PDF con licencia de uso</span>
                  </div>
                  */}

                  <div style={{ display: "flex", gap: "15px" }}>
                    <div className="text-center mt-64">
                      <Link
                        to="/all-product"
                        className="btn btn-main btn-lg pill fw-300"
                      >
                        Explorar reportes
                      </Link>
                    </div>
                    <div className="text-center mt-64">
                      <button
                        type="button"
                        className="follow-btn btn btn-outline-light btn-lg pill"
                        onClick={() => window.location.href = "/all-product"}
                      >
                        Comprar ahora
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <small style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                      <span style={{ fontWeight: 500 }}>Pago protegido · Entrega inmediata · PDF con licencia de uso </span>
                    </small>
                  </div>
                  
                  {/* Tech List Start */}
                  {/*
                  <div className="product-category-list">
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="WordPress"
                    >
                      <img
                        src="assets/images/thumbs/tech-icon1.png"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/thumbs/tech-icon-white1.png"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Laravel"
                    >
                      <img src="assets/images/thumbs/tech-icon2.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="PHP"
                    >
                      <img
                        src="assets/images/thumbs/tech-icon3.png"
                        alt=""
                        className="white-version"
                      />
                      <img
                        src="assets/images/thumbs/tech-icon-white3.png"
                        alt=""
                        className="dark-version"
                      />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="HTML"
                    >
                      <img src="assets/images/thumbs/tech-icon4.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Sketch"
                    >
                      <img src="assets/images/thumbs/tech-icon5.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Figma"
                    >
                      <img src="assets/images/thumbs/tech-icon6.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Bootstrap"
                    >
                      <img src="assets/images/thumbs/tech-icon7.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Tailwind"
                    >
                      <img src="assets/images/thumbs/tech-icon8.png" alt="" />
                    </Link>
                    <Link to="/all-product"
                      className="product-category-list__item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="React"
                    >
                      <img src="assets/images/thumbs/tech-icon9.png" alt="" />
                    </Link>
                  </div>
                  */}
                  {/* Tech List End */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-thumb">
                <img src="assets/images/thumbs/hero-section-mockup.png" alt="" />
                <img
                  src="assets/images/shapes/dots.png"
                  alt=""
                  className="dotted-img white-version"
                />
                <img
                  src="assets/images/shapes/dots-white.png"
                  alt=""
                  className="dotted-img dark-version"
                />
                <img
                  src="assets/images/shapes/element2.png"
                  alt=""
                  className="element two end-0"
                />

              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default BannerOne;
