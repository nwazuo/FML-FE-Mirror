import React, { useReducer, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './login.css';
import googleImg from '../../../assets/images/googleicon.svg';
import loginBg from '../../../assets/images/login-bg.png';
import pageurl from '../../../router/url/pageurl';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
// Redux Stuff
import { connect } from 'react-redux';
import { loginUser } from '../../../../actions/actions';

const initialState = {
  email: '',
  password: '',
  errors: null,
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (props.user.errors) {
      dispatch({ field: 'errors', value: props.user.errors });
    }
  }, [props.user.errors]);

  const onChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };
  const { email, password, errors } = state;

  const onSubmit = (event) => {
    const { history } = props;
    // eslint-disable-next-line
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

    const formData = {
      email,
      password,
    };
    props.loginUser(formData, history);
  };

  return (
    <ScrollIntoView>
      <Navbar />
      <div className="main-content d-sm-flex">
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
          <div>
            {/* eslint-disable-next-line */}
            <Link className="text-center py-3 btnGoogle d-flex justify-content-center align-items-center">
              <img className="pr-3" src={googleImg} alt="" />
              Login with Google
            </Link>
          </div>

          <div className="my-4 text-center or d-flex align-items-center or-box">
            <hr />
            <span className="or-text">or</span>
            <hr />
          </div>

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
          <div>
            <input
              type="submit"
              className="form-control login-btn btn-fml-secondary"
              value="Log in"
            />
          </div>
          {errors && (
<<<<<<< HEAD
            <p className="text-center py-1" style={{ color: 'red' }}>
              {errors.message}
            </p>
          )}
          <p className="account-info-text text-center py-4">
=======
            <p className="text-center textWidth py-1" style={{ color: 'red' }}>
              {errors.message}
            </p>
          )}
          <p className="account-info-text text-center textWidth my-2">
            <Link to="/forgot-password" className="sign-up-link">
              Forgot Password?
            </Link>
          </p>
          <p className="account-info-text text-center textWidth pt-1 mt-1 pb-4">
>>>>>>> 41309358790ac473894ba1373de42ab2ec41693a
            Don't have an account?
            <Link to={pageurl.REGISTER_PAGE_URL} className="sign-up-link">
              {' '}
              Sign up
            </Link>
          </p>
        </form>

        <div className="login-img-box d-none d-md-block">
          <img src={loginBg} className="login-img" alt="login FundMyLaptop" />
        </div>
      </div>
      <Footer />
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login));
