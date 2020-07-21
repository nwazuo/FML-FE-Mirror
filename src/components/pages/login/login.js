import React, { useReducer } from 'react';
import '../../assets/bootstrap.css';
import loginCss from './login.css';
import googleImg from '../../assets/images/googleicon.svg';
import loginBg from '../../assets/images/login-bg.png';
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
const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const { email, password } = state;

  return (
    <>
      <Navbar />
      <div class="main-content d-sm-flex">
        <form class="login-box p-md-5 p-2" onSubmit={onSubmit} method="POST">
          <h2 class="p-sm-3 p-1 welcome-text">
            Welcome to <br />
            <strong>Fund my Laptop</strong>
          </h2>

          <p class="p-1 p-md-3 login-text mt-md-n4">
            Help Achieve Your dreams with funding for your laptops at little to
            no cost.
          </p>
          <div>
            <a
              href="#"
              class="text-center py-3 btnGoogle d-flex justify-content-center align-items-center"
            >
              <img class="pr-3" src={googleImg} alt="" />
              Login with Google
            </a>
          </div>

          <div class="my-4 text-center or d-flex align-items-center or-box">
            <hr />
            <span class="or-text">or</span>
            <hr />
          </div>

          <div class="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              class="form-control"
              id="email"
              onChange={onChange}
              value={email}
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
              onChange={onChange}
              value={password}
            />
            <p
              id="errorPassword"
              class="error text-danger text-center text-sm-left"
            ></p>
          </div>
          <div>
            <input
              type="submit"
              class="form-control login-btn btn-fml-secondary"
              value="Log in"
            />
          </div>
          <p class="account-info-text text-center py-4">
            Don't have an account?
            <a href="signup.html" class="sign-up-link">
              Sign up
            </a>
          </p>
        </form>

        <div class="login-img-box d-none d-md-block">
          <img src={loginBg} class="login-img" alt="login FundMyLaptop" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
