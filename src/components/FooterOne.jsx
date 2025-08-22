import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <img
          src="assets/images/shapes/pattern.png"
          alt=""
          className="bg-pattern"
        />
        <img
          src="assets/images/shapes/element1.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element2.png"
          alt=""
          className="element two"
        />
        <img
          src="assets/images/gradients/footer-gradient.png"
          alt=""
          className="bg--gradient"
        />
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <Link to="/">
                    <img src="assets/images/logo/white-logo.png" alt="" />
                  </Link>
                </div>
                <p className="footer-widget__desc">
                Soluciones de IA, analítica y automatización para potenciar tu negocio. Un producto de Teseo Data Lab.
                </p>
                <div className="footer-widget__social">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.facebook.com/teseodata"
                        className="social-icon-list__link flx-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.instagram.com/teseo_data/"
                        className="social-icon-list__link flx-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://www.linkedin.com/company/teseo-data-center/"
                        className="social-icon-list__link flx-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://wa.me/5217713649201?"
                        className="social-icon-list__link flx-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                    <li className="social-icon-list__item">
                      <a
                        href="https://teseodata.com/"
                        className="social-icon-list__link flx-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-globe" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Enlaces Rápidos</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <Link to="https://teseodata.com/" className="footer-lists__link">
                    Sitio oficial Teseo
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link
                      to="https://teseodata.com/blog"
                      className="footer-lists__link"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://teseodata.com/pages/portafolio.php" className="footer-lists__link">
                      Portafolio
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://teseodata.com/pages/contacto.php" className="footer-lists__link">
                    Contacto
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://teseodata.com/pages/contacto.php" className="footer-lists__link">
                      Soporte
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Productos</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item">
                    <Link to="/dashboard" className="footer-lists__link">
                    DatAlpine
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://datalpine.mx/exploradores" className="footer-lists__link">
                    Explorador
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://teseodata.com/pages/servicio.php" className="footer-lists__link">
                    Servicios Teseo
                    </Link>
                  </li>
                  <li className="footer-lists__item">
                    <Link to="https://wa.me/5217713649201?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20reporte" className="footer-lists__link">
                    Demo / Asesoría
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Subscribete</h5>
                <p className="footer-widget__desc">
                Recibe actualizaciones, promociones y contenido exclusivo.
                </p>
                <form
                  action="#"
                  className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2"
                >
                  <input
                    type="text"
                    className="form-control common-input pill text-white"
                    placeholder="Escribe tu correo electrónico"
                  />
                  <button
                    type="submit"
                    className="btn btn-main btn-lg w-100 pill"
                  >
                    Subscríbete Ahora
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom Footer */}
      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text font-14">
              Copyright © {new Date().getFullYear()} Teseo DataLab, Todos los Derechos Reservados.
            </p>
            <div className="footer-links">
              <Link to="#" className="footer-link font-14">
                Terminos de  Uso
              </Link>
              <Link to="#" className="footer-link font-14">
                Políticas de Privacidad
              </Link>
              <Link to="/contact" className="footer-link font-14">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
