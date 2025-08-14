const BreadcrumbThree = () => {
    return (
        <section className="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <img
          src="assets/images/shapes/element-moon3.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element three"
        />
        <div className="container container-two">
          <div className="breadcrumb-three-content border-bottom border-color">
            <div className="breadcrumb-three-content__inner">
              <div className="breadcrumb-three-content__left">
                <div className="flx-between align-items-end gap-3">
                  <div className="author-profile d-flex gap-2 flex-column">
                    <div className="author-profile__thumb flex-shrink-0">
                      <img src="assets/images/thumbs/author-profile.png" alt="" />
                    </div>
                    <div className="author-profile__info">
                      <h5 className="author-profile__name mb-2">Oviousdev</h5>
                      <span className="author-profile__membership font-14">
                        Member Since January 2021
                      </span>
                    </div>
                  </div>
                  <div className="breadcrumb-three-content__right flex-shrink-0  d-flex align-items-center gap-4 gap-lg-5">
                    <div className="author-rating">
                      <span className="author-rating__text text-heading fw-500 mb-2">
                        Author Rating
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
                        <span className="star-rating__text text-body font-14">
                          {" "}
                          (116 ratings)
                        </span>
                      </div>
                    </div>
                    <div className="sales">
                      <span className="sales__text mb-1 text-heading fw-500">
                        Sales
                      </span>
                      <h5 className="sales__amount mb-0">15,830</h5>
                    </div>
                  </div>
                </div>
                <ul className="badge-list mt-32 flx-align gap-2 ms-0">
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge1.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge2.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge3.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge4.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge5.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge6.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge7.png" alt="" />
                  </li>
                  <li
                    className="badge-list__item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Badge Info"
                  >
                    <img src="assets/images/thumbs/badge8.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <ul
              className="nav tab-bordered nav-pills mt-4"
              id="pills-tabbs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-portfolio-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-portfolio"
                  type="button"
                  role="tab"
                  aria-controls="pills-portfolio"
                  aria-selected="false"
                >
                  Portfolio{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-followerss-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-followerss"
                  type="button"
                  role="tab"
                  aria-controls="pills-followerss"
                  aria-selected="false"
                >
                  Followers <span className="notification">100</span>{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Followingg-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Followingg"
                  type="button"
                  role="tab"
                  aria-controls="pills-Followingg"
                  aria-selected="false"
                >
                  Following <span className="notification">22</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Settingss-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Settingss"
                  type="button"
                  role="tab"
                  aria-controls="pills-Settingss"
                  aria-selected="false"
                >
                  Settings{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-hiddenItem-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hiddenItem"
                  type="button"
                  role="tab"
                  aria-controls="pills-hiddenItem"
                  aria-selected="false"
                >
                  Hidden Item{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-refunded-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-refunded"
                  type="button"
                  role="tab"
                  aria-controls="pills-refunded"
                  aria-selected="false"
                >
                  Refunded{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-earning-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-earning"
                  type="button"
                  role="tab"
                  aria-controls="pills-earning"
                  aria-selected="false"
                >
                  Earning{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-statement-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-statement"
                  type="button"
                  role="tab"
                  aria-controls="pills-statement"
                  aria-selected="false"
                >
                  Statement{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-review-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-review"
                  type="button"
                  role="tab"
                  aria-controls="pills-review"
                  aria-selected="false"
                >
                  Review{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-download-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-download"
                  type="button"
                  role="tab"
                  aria-controls="pills-download"
                  aria-selected="false"
                >
                  Download{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
    );
}

export default BreadcrumbThree;