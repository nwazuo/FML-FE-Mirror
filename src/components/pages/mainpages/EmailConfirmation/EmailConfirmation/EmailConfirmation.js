import React from 'react';
import './EmailConfirmation.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import emailConfirmation from './images/email-confirmation.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const baseUrl =
  'https://api.fundmylaptop.com/api/users/resend-verification-mail';

const EmailConfirmation = (props) => {
  const { message } = props.ui;
  console.log(props);
  console.log(message);
  console.log(message.data.resend_url_live);

  const resendResetLink = message.data.resend_url_live;

  const handleResend = () => {
    axios
      .get(`${resendResetLink}`)
      .then((response) => {
        if (response.data.message === 'Verification mail sent') {
          console.log(response.data);
          alert('verification email sent, please check your email.');
          props.history.push('/email-verification-sent');
        }
      })
      .catch((error) => {
        if (
          error.response.data.message === 'Email already verified. Please login'
        ) {
          alert('Email already verified. Please login');
        } else if (
          error.response.data.message === 'User not found. Please sign up'
        )
          alert('User not found. Please sign up');
        console.log(error.response);
      });
  };

  return (
    <ScrollIntoView>
      <div>
        <Navbar />
        <div className="email-confirmation mb-5 text-center">
          <div className="email-confirmation-card">
            <div className="email-confirmation-container">
              <div className="email-confirmation-header">
                <img src={emailConfirmation} alt="" />
              </div>
              <h5>Verify your mail address</h5>
              <p className="email-confirmation-p1">
                Please check your email to activate your account
              </p>

              <button className="email-confirmation-btn" onClick={handleResend}>
                Resend verification Link
              </button>

              <p className="email-confirmation-p2">
                If you recieved this error, simply ignore this email and do
                <br /> not click the button
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(EmailConfirmation));
