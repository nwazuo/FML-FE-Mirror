import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/bootstrap.css';
import './signup.css';
import googleImg from '../../assets/images/googleicon.svg';
import signupBg from '../../assets/images/signup-bg.png';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const initialState = {
  email: '',
  password: '',
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password } = state;
  const onChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const onSubmit = (event) => {
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');
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
  };

  return (
    <>
      <Navbar />
      <main className="main-content d-sm-flex">
        <form
          className="login-box p-md-5 p-2"
          onSubmit={onSubmit}
          method="POST"
        >
          <h2 className="p-sm-3 p-1 welcome-text">
            Welcome to <br />
            <strong>Fund my Laptop</strong>
          </h2>

          <p className="p-1 p-md-3 login-text mt-md-n4">
            Help Achieve Your dreams with funding for your laptops at little to
            no cost.
          </p>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
              id="email"
              onChange={onChange}
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
              onChange={onChange}
              value={password}
            />
            <p
              id="errorPassword"
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
                <a href="" style={{ color: 'blue' }}>
                  Terms Policy Conditions
                </a>
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              className="form-control login-btn btn-fml-secondary"
              value="Sign Up"
            />
          </div>
          <div className="my-4 text-center or d-flex align-items-center or-box">
            <hr />
            <span className="or-text">OR</span>
            <hr />
          </div>
          <div>
            <a
              href="#"
              className="form-control login-btn reg-btn btn-fml-outline"
            >
              <img className="pr-3" src={googleImg} alt="" />
              Login with Google
            </a>
          </div>

          <p className="account-info-text text-center py-4 mb-md-3">
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#fb3f5c' }}>
              Sign In
            </Link>
          </p>

          {/* <div id="error" className="error p-1 "></div>
            </div> */}
        </form>

        <div className="login-img-box d-none d-md-block">
          <img src={signupBg} className="login-img" alt="login FundMyLaptop" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
