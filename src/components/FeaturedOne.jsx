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
              <div className="col-sm-6">
                <div className="product-item box-shadow">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/product-img9.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>
                    <button type="button" className="product-item__wishlist">
                      <i className="fas fa-heart" />
                    </button>
                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className="product-item__info flx-between gap-2">
                      <span className="product-item__author">
                        by
                        <Link
                          to="profile"
                          className="link hover-text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                      <div className="flx-align gap-2">
                        <h6 className="product-item__price mb-0">$120</h6>
                        <span className="product-item__prevPrice text-decoration-line-through">
                          $259
                        </span>
                      </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-2">
                          1200 Sales
                        </span>
                        <div className="d-flex align-items-center gap-1">
                          <ul className="star-rating">
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <span className="star-rating__text text-heading fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/product-details"
                        className="btn btn-outline-light btn-sm pill"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-item box-shadow">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/product-img10.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>
                    <button type="button" className="product-item__wishlist">
                      <i className="fas fa-heart" />
                    </button>
                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className="product-item__info flx-between gap-2">
                      <span className="product-item__author">
                        by
                        <Link
                          to="profile"
                          className="link hover-text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                      <div className="flx-align gap-2">
                        <h6 className="product-item__price mb-0">$129</h6>
                        <span className="product-item__prevPrice text-decoration-line-through">
                          $236
                        </span>
                      </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-2">
                          100 Sales
                        </span>
                        <div className="d-flex align-items-center gap-1">
                          <ul className="star-rating">
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <span className="star-rating__text text-heading fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/product-details"
                        className="btn btn-outline-light btn-sm pill"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-item box-shadow">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/product-img11.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>
                    <button type="button" className="product-item__wishlist">
                      <i className="fas fa-heart" />
                    </button>
                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className="product-item__info flx-between gap-2">
                      <span className="product-item__author">
                        by
                        <Link
                          to="profile"
                          className="link hover-text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                      <div className="flx-align gap-2">
                        <h6 className="product-item__price mb-0">$79</h6>
                        <span className="product-item__prevPrice text-decoration-line-through">
                          $99
                        </span>
                      </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-2">
                          900 Sales
                        </span>
                        <div className="d-flex align-items-center gap-1">
                          <ul className="star-rating">
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <span className="star-rating__text text-heading fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/product-details"
                        className="btn btn-outline-light btn-sm pill"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="product-item box-shadow">
                  <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                      <img
                        src="assets/images/thumbs/product-img4.png"
                        alt=""
                        className="cover-img"
                      />
                    </Link>
                    <button type="button" className="product-item__wishlist">
                      <i className="fas fa-heart" />
                    </button>
                  </div>
                  <div className="product-item__content">
                    <h6 className="product-item__title">
                      <Link to="/product-details" className="link">
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className="product-item__info flx-between gap-2">
                      <span className="product-item__author">
                        by
                        <Link
                          to="profile"
                          className="link hover-text-decoration-underline"
                        >
                          themepix
                        </Link>
                      </span>
                      <div className="flx-align gap-2">
                        <h6 className="product-item__price mb-0">$59</h6>
                        <span className="product-item__prevPrice text-decoration-line-through">
                          $129
                        </span>
                      </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                      <div>
                        <span className="product-item__sales font-14 mb-2">
                          1225 Sales
                        </span>
                        <div className="d-flex align-items-center gap-1">
                          <ul className="star-rating">
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                            <li className="star-rating__item font-11">
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <span className="star-rating__text text-heading fw-500 font-14">
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/product-details"
                        className="btn btn-outline-light btn-sm pill"
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-1 d-xl-block d-none" />
          <div className="col-xl-5">
            <div className="section-content">
              <div className="section-heading style-left">
                <h3 className="section-heading__title">Featured Products</h3>
                <p className="section-heading__desc font-18 w-sm">
                  Every month we pick some best products for you. This month's
                  best web themes &amp; templates have arrived, chosen by our
                  content specialists.
                </p>
              </div>
              <Link
                to="all-product"
                className="btn btn-main btn-lg pill fw-300"
              >
                View All Items
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOne;
