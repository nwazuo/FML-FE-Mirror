import React from 'react';
import '../../assets/bootstrap.css';
import signupCss from './signup.css';
import googleImg from '../../assets/images/googleicon.svg';
import signupBg from '../../assets/images/signup-bg.png';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Signup = () => {
  return (
    <>
      <Navbar />
      <main class="main-content d-sm-flex">
        <form class="login-box p-md-5 p-2">
          <h2 class="p-sm-3 p-1 welcome-text">
            Welcome to <br />
            <strong>Fund my Laptop</strong>
          </h2>

          <p class="p-1 p-md-3 login-text mt-md-n4">
            Help Achieve Your dreams with funding for your laptops at little to
            no cost.
          </p>

          <div class="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              class="form-control"
              id="email"
            />
            <p
              id="errorEmail"
              class="error text-danger text-center text-sm-left"
            ></p>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              class="form-control"
              id="password"
            />
            <p
              id="errorPassword"
              class="error text-danger text-center text-sm-left"
            ></p>
          </div>
          <div class="form-group">
            <div class="form-check form-control check-area">
              <input
                class="form-check-input check"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label ml-1 p-auto" for="invalidCheck">
                I agree to the{' '}
                <a href="" style={{ color: 'blue' }}>
                  Terms Policy Conditions
                </a>
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              class="form-control login-btn btn-fml-secondary"
              value="Sign Up"
            />
          </div>
          <div class="my-4 text-center or d-flex align-items-center or-box">
            <hr />
            <span class="or-text">OR</span>
            <hr />
          </div>
          <div>
            <a href="#" class="form-control login-btn reg-btn btn-fml-outline">
              <img class="pr-3" src={googleImg} alt="" />
              Login with Google
            </a>
          </div>

          <p class="account-info-text text-center py-4 mb-md-3">
            Already have an account?{' '}
            <a href="login.html" style={{ color: '#fb3f5c' }}>
              Sign In
            </a>
          </p>

          {/* <div id="error" class="error p-1 "></div>
            </div> */}
        </form>

        <div class="login-img-box d-none d-md-block">
          <img src={signupBg} class="login-img" alt="login FundMyLaptop" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
