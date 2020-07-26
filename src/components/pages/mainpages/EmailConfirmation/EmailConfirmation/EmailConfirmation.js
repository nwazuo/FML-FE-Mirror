import React from 'react';
import './EmailConfirmation.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import emailConfirmation from './images/email-confirmation.png';
import axios from 'axios';

let baseURLID = 'https://api.fundmylaptop.com/users/verification';
// check id of user

const baseUrl =
  'https://api.fundmylaptop.com/api/users/resend-verification-mail';

const EmailConfirmation = (props) => {
  console.log(props);

  // get the id from the url>>>>>
  // const query = new URLSearchParams(props.location.search);
  // const uid = query.get('uid');
  // console.log('uid', uid); //123

  const handleResend = () => {
    axios
      .get(`${baseUrl}/5f1ca9daef32f50011259501`)
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

export default EmailConfirmation;
