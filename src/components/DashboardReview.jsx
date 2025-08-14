import { Link } from "react-router-dom";

const DashboardReview = () => {
  return (
    <div className="dashboard-body__content">
      {/* ===================== Review Section Start ========================== */}
      <div className="card common-card border border-gray-five">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table text-body mt--24">
              <thead>
                <tr>
                  <th>Product | Date</th>
                  <th>User</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected1.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            CityScape - Real Estate
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-03-13 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected2.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            FixTurbo - Car Repair
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-02-10 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected1.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            CityScape - Real Estate
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-03-13 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected2.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            FixTurbo - Car Repair
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-02-10 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected1.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            CityScape - Real Estate
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-03-13 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img src="assets/images/thumbs/rejected2.png" alt="" />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link to="/profile" className="link">
                            FixTurbo - Car Repair
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          2024-02-10 04:50 pm
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-12">
                      <strong className="fw-600 text-heading d-block">
                        WowTheme7
                      </strong>
                      <span>Lorem ipsum dolor sit.</span>
                    </div>
                  </td>
                  <td>
                    <ul className="star-rating justify-content-center">
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                      <li className="star-rating__item font-16">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <Link to="#" className="btn btn-main">
                      <i className="fa fa-reply" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flx-between gap-2">
              <div className="paginate-content flx-align flex-nowrap gap-3">
                <select className="select common-input py-2 px-3 w-auto" defaultValue={1}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <span className="paginate-content__text fs-14">
                  Showing 1 - 10 of 100
                </span>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination common-pagination mt-0">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link flx-align gap-2 flex-nowrap" to="#">
                      Next
                      <span className="icon line-height-1 font-20">
                        <i className="las la-arrow-right" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
    </div>

  );
}

export default DashboardReview;