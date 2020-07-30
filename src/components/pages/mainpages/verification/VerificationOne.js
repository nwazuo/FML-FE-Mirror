import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import VerificationCss from './verificationone.module.css';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import Dropzone from '../../../utilities/Dropzone/Dropzone';
// Redux Stuff
import { connect } from 'react-redux';

const VerificationOne = (props) => {
  const [images, setImages] = useState([]);
  const onDrop = () => {};
  const onPreviewDrop = (files) => {
    setImages(images.concat(files));
  };
  const previewStyle = {
    display: 'inline',
    width: 100,
    height: 100,
  };
  return (
    <ScrollIntoView>
      <Navbar />
      <div className="container col-md-6 mx-auto">
        <div
          className={`${VerificationCss.verificationProgresscontainer} col-12 col-md-8 mx-auto mt-5 text-center`}
        >
          <h4 className="font-weight-bold">Verification</h4>
          <div
            className={`${VerificationCss.verificationProgress} mt-4 mt-md-5`}
          >
            <div
              className={`${VerificationCss.verifyItem} ${VerificationCss.active_Ify}`}
            >
              <span
                className={`${VerificationCss.verifyCircle} ${VerificationCss.active_Ify}`}
              >
                <span className={VerificationCss.progressNumber}>1</span>
              </span>
              <span className={VerificationCss.text_Ify}>
                Residential Address
              </span>
            </div>
            <div className={VerificationCss.verifyItem}>
              <span className={VerificationCss.verifyCircle}> </span>
            </div>
            <div className={VerificationCss.verifyItem}>
              <span className={VerificationCss.verifyCircle}></span>
            </div>
            <div className={VerificationCss.verifyItem}>
              <span className={VerificationCss.verifyCircle}></span>
            </div>
          </div>
        </div>

        <form
          className={`${VerificationCss.needsValidation} ${VerificationCss.verifyFormAddress}`}
          novalidate
        >
          <div id="address-area">
            <h3 className="mt-5">
              <i
                className="fa fa-map-marker"
                style={{ fontSize: '90%' }}
                aria-hidden="true"
              ></i>{' '}
              Address
            </h3>
            <p className="verify-intro-text text-left mb-4 col-sm-10 px-0">
              Don't worry your information is private and will not be shared
              with anyone except{' '}
              <a
                className="text-fml-secondary"
                href="https://fundmylaptop.com/"
              >
                FundMyLaptop
              </a>
            </p>
            <div className="form-row">
              <div className="col-md-6 mb-4 pr-md-3">
                <label for="address">
                  Address{' '}
                  <span className={VerificationCss.required_Ify}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Type your address"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your address
                </div>
              </div>
              <div className="col-md-6 mb-4 pl-md-3">
                <label for="city">
                  City <span className={VerificationCss.required_Ify}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Your city"
                  required
                />
                <div className="invalid-feedback">Please provide your city</div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-4 pr-md-3">
                <label for="state">
                  State <span className={VerificationCss.required_Ify}>*</span>
                </label>
                <select
                  className="custom-select form-control"
                  id="state"
                  required
                >
                  <option selected disabled value="">
                    Select your state
                  </option>
                  <option value="abia">Abia</option>
                  <option value="adamawa">Adamawa</option>
                  <option value="akwa-ibom">Akwa Ibom</option>
                  <option value="anambra">Anambra</option>
                  <option value="bauchi">Bauchi</option>
                  <option value="bayelsa">Bayelsa</option>
                  <option value="benue">Benue</option>
                  <option value="borno">Borno</option>
                  <option value="cross-river">Cross River</option>
                  <option value="delta">Delta</option>
                  <option value="ebonyi">Ebonyi</option>
                  <option value="edo">Edo</option>
                  <option value="ekiti">Ekiti</option>
                  <option value="enugu">Enugu</option>
                  <option value="gombe">Gombe</option>
                  <option value="imo">Imo</option>
                  <option value="jigawa">Jigawa</option>
                  <option value="kaduna">Kaduna</option>
                  <option value="kano">Kano</option>
                  <option value="katsina">Katsina</option>
                </select>
              </div>
              <div className="col-md-6 mb-4 pl-md-3">
                <label for="bank">
                  Country{' '}
                  <span className={VerificationCss.required_Ify}>*</span>
                </label>
                <select
                  className="custom-select form-control"
                  id="country"
                  required
                >
                  <option selected disabled value="">
                    Select your country
                  </option>
                  <option value="afghanistan">Afghanistan</option>
                  <option value="albania">Albania</option>
                  <option value="algeria">Algeria</option>
                  <option value="andorra">Andorra</option>
                </select>
              </div>
            </div>
          </div>
          <div className="apartment-section">
            <h3 className="mt-5">
              <i
                className="fa fa-home"
                style={{ fontSize: '90%' }}
                aria-hidden="true"
              ></i>{' '}
              Apartment
            </h3>
            <p className="verify-intro-text text-left mb-4 col-sm-10 px-0">
              Tell us something more to easily identify your house. Click
              applicable box
            </p>
            <div className="row">
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-outline-fml-secondary mr-2 my-1"
                >
                  Duplex
                </button>
                <button
                  type="button"
                  className="btn btn-outline-fml-secondary mr-2 my-1"
                >
                  Bungalow
                </button>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-outline-fml-secondary mr-2 my-2"
                >
                  Single
                </button>
                <button
                  type="button"
                  className="btn btn-outline-fml-secondary mr-2 my-2"
                >
                  2 bedrooms
                </button>
                <button
                  type="button"
                  className="btn btn-outline-fml-secondary my-2"
                >
                  3 bedrooms
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label for="apartment-number">
                  Apartment Number{' '}
                  <span className={VerificationCss.required_Ify}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apartment-number"
                  required
                />
                <div className="invalid-feedback">
                  Please provide your apartment number
                </div>
              </div>
            </div>
          </div>
          <div className="image-upload-section">
            <h3 className="mt-5">
              <i
                className="fa fa-picture-o"
                style={{ fontSize: '90%' }}
                aria-hidden="true"
              ></i>{' '}
              Upload Image
            </h3>
            <p className="verify-intro-text text-left mb-4 col-sm-10 px-0">
              Your are required to provide atleast three pictures of your house
            </p>
            <div className="row">
              <div className="col-6 col-sm-4 col-md-3 my-2">
                <Dropzone />
              </div>
              <div className="col-6 col-sm-4 col-md-3 my-2">
                <Dropzone />
              </div>
              <div className="col-6 col-sm-4 col-md-3 my-2">
                <Dropzone />
              </div>
              <div className="col-6 col-sm-4 col-md-3 my-2">
                <Dropzone />
              </div>
            </div>

            <p className="px-0 py-2">Maximum of 4mb for each</p>
          </div>

          {/* <div className="form-buttons d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
            <button
              className="submit btn btn-fml-secondary align-self-center ml-md-3 mb-3 mb-md-0"
              type="submit"
            >
              Next{' '}
            </button>
                  </div> */}
          {/* <div className="d-flex justify-content-end">
            <button
              className="submit btn btn-fml-secondary align-self-center ml-md-3 mb-3 mb-md-0"
              type="submit"
            >
              Next{' '}
            </button>
          </div> */}
          <div className="form-buttons d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
            <button
              className="btn btn-fml-secondary align-self-center ml-md-3 mb-3 mb-md-5"
              type="submit"
            >
              Next{' '}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui,
});

export default connect(mapStateToProps)(withRouter(VerificationOne));
