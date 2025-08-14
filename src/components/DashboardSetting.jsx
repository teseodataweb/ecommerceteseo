
const DashboardSetting = () => {
  return (
    <div className="dashboard-body__content">
      <div className="card common-card">
        <div className="card-body">
          {/* ================== Setting Section Start ====================== */}
          <div className="row gy-4">
            <div className="col-lg-4 pe-xl-5">
              <div className="setting-sidebar top-24">
                <h6 className="setting-sidebar__title">Your Details</h6>
                <ul className="setting-sidebar-list">
                  <li className="setting-sidebar-list__item">
                    <a
                      href="#personalInfo"
                      className="setting-sidebar-list__link active"
                    >
                      Personal Information
                    </a>
                  </li>
                  <li className="setting-sidebar-list__item">
                    <a href="#profile" className="setting-sidebar-list__link">
                      Profile
                    </a>
                  </li>
                  <li className="setting-sidebar-list__item">
                    <a href="#paymentSystem" className="setting-sidebar-list__link">
                      Setup Payment System
                    </a>
                  </li>
                  <li className="setting-sidebar-list__item">
                    <a href="#emailSetting" className="setting-sidebar-list__link">
                      Email Setting
                    </a>
                  </li>
                  <li className="setting-sidebar-list__item">
                    <a href="#socialNetwork" className="setting-sidebar-list__link">
                      Social Networks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              {/* <form action="#"> */}
              <div
                className="setting-content"
                data-bs-spy="scroll"
                data-bs-target="#sidebar-scroll-spy"
              >
                <div
                  className="card common-card border border-gray-five overflow-hidden mb-24"
                  id="personalInfo"
                >
                  <div className="card-header">
                    <h6 className="title">Personal Information</h6>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="fName"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="lName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="lName"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="country"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="address"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="city"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="zipCode" className="form-label">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="zipCode"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card common-card border border-gray-five overflow-hidden mb-24"
                  id="profile"
                >
                  <div className="card-header">
                    <h6 className="title">Personal Information</h6>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fileUpload" className="form-label">
                          Upload a New Avatar
                        </label>
                        <input
                          type="file"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="fileUpload"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="fileUploadTwo" className="form-label">
                          Upload a New Avatar
                        </label>
                        <input
                          type="file"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="fileUploadTwo"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="ProfileHeading" className="form-label">
                          Profile Heading
                        </label>
                        <input
                          type="text"
                          className="common-input common-input--md border--color-dark bg--white"
                          id="ProfileHeading"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label className="form-label">Show Country on Your</label>
                        <div className="flx-align gap-3 mt-2">
                          <div className="common-check common-radio mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="showCountry"
                              id="yes"
                            />
                            <label className="form-check-label ps-2" htmlFor="yes">
                              Yes
                            </label>
                          </div>
                          <div className="common-check common-radio mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="showCountry"
                              id="no"
                            />
                            <label className="form-check-label ps-2" htmlFor="no">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="aboutProfile" className="form-label">
                          Write Something About Your Profile
                        </label>
                        <textarea
                          className="common-input common-input--md border--color-dark bg--white"
                          id="aboutProfile"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card common-card border border-gray-five overflow-hidden mb-24"
                  id="paymentSystem"
                >
                  <div className="card-header">
                    <h6 className="title">Payment Method</h6>
                  </div>
                  <div className="card-body">
                    <div className="payment-method mb-0">
                      <div className="payment-method__wrapper arrow-sm">
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment1"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment1">
                            <img
                              src="assets/images/thumbs/payment-method1.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment2"
                            hidden
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="payment2">
                            <img
                              src="assets/images/thumbs/payment-method2.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment3"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment3">
                            <img
                              src="assets/images/thumbs/payment-method3.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment4"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment4">
                            <img
                              src="assets/images/thumbs/payment-method4.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment5"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment5">
                            <img
                              src="assets/images/thumbs/payment-method5.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment6"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment6">
                            <img
                              src="assets/images/thumbs/payment-method6.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment7"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment7">
                            <img
                              src="assets/images/thumbs/payment-method7.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment8"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment8">
                            <img
                              src="assets/images/thumbs/payment-method8.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment9"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment9">
                            <img
                              src="assets/images/thumbs/payment-method9.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment10"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment10">
                            <img
                              src="assets/images/thumbs/payment-method10.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment11"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment11">
                            <img
                              src="assets/images/thumbs/payment-method11.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment12"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment12">
                            <img
                              src="assets/images/thumbs/payment-method12.png"
                              alt=""
                            />
                          </label>
                        </div>
                        <div className="payment-method__item">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment"
                            id="payment13"
                            hidden
                          />
                          <label className="form-check-label" htmlFor="payment13">
                            <img
                              src="assets/images/thumbs/payment-method13.png"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card common-card border border-gray-five overflow-hidden mb-24"
                  id="emailSetting"
                >
                  <div className="card-header">
                    <h6 className="title">Email Settings</h6>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="ratingReminder"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="ratingReminder"
                          >
                            {" "}
                            Rating reminder send an email for client rating{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="reviewNotification"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="reviewNotification"
                          >
                            Item review notification
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="updateNotification"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="updateNotification"
                          >
                            Item update notification
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="dailyNootification"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="dailyNootification"
                          >
                            Daily update notification
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="itemNotification"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="itemNotification"
                          >
                            {" "}
                            Item Notification
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="common-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="commentNotification"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="commentNotification"
                          >
                            Item comment notification
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card common-card border border-gray-five overflow-hidden mb-24"
                  id="socialNetwork"
                >
                  <div className="card-header">
                    <h6 className="title">Social Network Settings</h6>
                  </div>
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="facebookUrl" className="form-label">
                          Facebook Profile Url
                        </label>
                        <div className="position-relative">
                          <input
                            type="url"
                            className="common-input common-input--md common-input--withLeftIcon"
                            id="facebookUrl"
                            placeholder="Facebook Profile Url"
                          />
                          <span className="input-icon input-icon--left text-main">
                            <i className="fab fa-facebook-f" />{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="linkedinUrl" className="form-label">
                          Linkedin Profile Url
                        </label>
                        <div className="position-relative">
                          <input
                            type="url"
                            className="common-input common-input--md common-input--withLeftIcon"
                            id="linkedinUrl"
                            placeholder="Linkedin Profile Url"
                          />
                          <span className="input-icon input-icon--left text-main">
                            <i className="fab fa-linkedin-in" />
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="behanceUrl" className="form-label">
                          Behance Profile Url
                        </label>
                        <div className="position-relative">
                          <input
                            type="url"
                            className="common-input common-input--md common-input--withLeftIcon"
                            id="behanceUrl"
                            placeholder="Behance Profile Url"
                          />
                          <span className="input-icon input-icon--left text-main">
                            <i className="fab fa-behance" />{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="dribbleUrl" className="form-label">
                          Dribble Profile Url
                        </label>
                        <div className="position-relative">
                          <input
                            type="url"
                            className="common-input common-input--md common-input--withLeftIcon"
                            id="dribbleUrl"
                            placeholder="Dribble Profile Url"
                          />
                          <span className="input-icon input-icon--left text-main">
                            <i className="fab fa-dribbble" />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn w-100 btn-main btn-md">
                  Save Information
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
          {/* ================== Setting Section End ====================== */}
        </div>
      </div>
    </div>

  );
}

export default DashboardSetting;