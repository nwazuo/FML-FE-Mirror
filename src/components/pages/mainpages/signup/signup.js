import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './signup.css';
import googleImg from '../../../assets/images/googleicon.svg';
import signupBg from '../../../assets/images/signup-bg.png';
import pageurl from '../../../router/url/pageurl';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import { connect } from 'react-redux';
import { registerUser } from '../../../../actions/userActions';


class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    errors: null,
    message: null,
    loading: false
  };
  blankstate = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    errors: null,
    message: null,
    loading: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.errors !== this.props.user.errors) {
      this.setState(
        {
          errors: this.props.user.errors,
          message: this.props.user.message,
          loading: this.props.user.loading
        },
        () => {
          console.log(this.state.errors);
        }
      );
    }
  }


  onChange = (event) => {

    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onSubmit = (event) => {
    // eslint-disable-next-line
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let validPhoneNumber = /^[0]\d{10}$/;

    const { firstName, lastName, email, password, phone, address } = this.state;

    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');
    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorPhone = document.getElementById('errorPhone');
    const errorAddress = document.getElementById('errorAddress');

    event.preventDefault();

    if (email === '' || email === null || !email.match(validMail)) {
      errorEmail.textContent = '* Please input a valid email.';
      setTimeout(() => {
        errorEmail.textContent = '';
      }, 2000);
    }

    if (password < 6) {
      errorPassword.textContent =
        '* Incorrect password, must be at least 6 characters.';
      setTimeout(() => {
        errorPassword.textContent = '';
      }, 2000);
    }

    if (firstName === '') {
      errorFirstName.textContent = '* Your first name is required';
      setTimeout(() => {
        errorFirstName.textContent = '';
      }, 2000);
    }

    if (lastName === '') {
      errorLastName.textContent = '* Your last name is required';
      setTimeout(() => {
        errorLastName.textContent = '';
      }, 2000);
    }

    if (phone === '' || !phone.match(validPhoneNumber)) {
      errorPhone.textContent = '* Please input a valid phone number.';
      setTimeout(() => {
        errorPhone.textContent = '';
      }, 2000);
    }

    if (address === '') {
      errorAddress.textContent = '* Your address is required.';
      setTimeout(() => {
        errorAddress.textContent = '';
      }, 2000);
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
    };

    this.props.registerUser(newUser, this.props.history);
    this.setState({ ...this.blankstate });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
      // message,
    } = this.state;

    return (
      <ScrollIntoView>
        <Navbar />
        <main className="main-content d-sm-flex">
          <form
            className="login-box p-md-5 p-2"
            onSubmit={this.onSubmit}
            method="POST"
          >
            <h2 className="p-sm-3 p-1 welcome-text">
              Welcome to <br />
              <strong>Fund my Laptop</strong>
            </h2>

            <p className="p-1 p-md-3 login-text mt-md-n4">
              Help Achieve Your dreams with funding for your laptops at little
              to no cost.
            </p>
            {this.state.errors ? (
              <p className="mt-4 error text-danger text-center text-sm-left">
                {this.state.errors.message}
              </p>
            ) : this.state.message ? (
              <p className="mt-4 error text-success text-center text-sm-left">
                {this.state.message}
              </p>
            ) : null}

            <div className="form-group">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                className="form-control"
                id="firstName"
                onChange={this.onChange}
                value={firstName}
              />
              <p
                id="errorFirstName"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                className="form-control"
                id="lastName"
                onChange={this.onChange}
                value={lastName}
              />
              <p
                id="errorLastName"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
                id="email"
                onChange={this.onChange}
                value={email}
              />
              <p
                id="errorEmail"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-control"
                id="password"
                onChange={this.onChange}
                value={password}
              />
              <p
                id="errorPassword"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                className="form-control"
                id="phone"
                onChange={this.onChange}
                value={phone}
              />
              <p
                id="errorPhone"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="form-control"
                id="address"
                onChange={this.onChange}
                value={address}
              />
              <p
                id="errorAddress"
                className="error text-danger text-center text-sm-left"
              ></p>
            </div>
            <div className="form-group">
              <div className="form-check form-control check-area">
                <input
                  className="form-check-input check"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label
                  className="form-check-label ml-1 p-auto"
                  for="invalidCheck"
                >
                  I agree to the{' '}
                  <Link
                    to={pageurl.TC_PAGE_URL}
                    style={{ color: 'blue' }}
                    className="atag"
                  >
                    Terms Policy Conditions
                  </Link>
                  {/* <a href="" style={{ color: 'blue' }}>
                    Terms Policy Conditions
                  </a> */}
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="form-control login-btn btn-fml-secondary"
                value="Sign Up"
              >Sign Up { this.state.loading ? <span>Loading</span> : null}
              </button>
            </div>
            <div className="my-4 text-center or d-flex align-items-center or-box">
              <hr />
              <span className="or-text">OR</span>
              <hr />
            </div>
            <div>
              <Link
                to=""
                className="form-control login-btn reg-btn btn-outline-fml-secondary"
              >
                <img className="pr-3" src={googleImg} alt="" />
                Login with Google
              </Link>

              {/* <a
                href="#"
                className="form-control login-btn reg-btn btn-outline-fml-secondary atag"
            >
                <img className="pr-3" src={googleImg} alt="" />
                Login with Google
            </a> */}
            </div>
            <p className="account-info-text text-center textWidth my-1">
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            <p className="account-info-text text-center textWidth py-2 mb-md-3">
              Already have an account?{' '}
              <Link to={pageurl.LOGIN_PAGE_URL} style={{ color: '#fb3f5c' }}>
                Sign In
              </Link>
            </p>
          </form>

          <div className="login-img-box d-none d-md-block">
            <img
              src={signupBg}
              className="login-img"
              alt="login FundMyLaptop"
            />
          </div>
        </main>
        <Footer />
      </ScrollIntoView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { registerUser })(Signup);
