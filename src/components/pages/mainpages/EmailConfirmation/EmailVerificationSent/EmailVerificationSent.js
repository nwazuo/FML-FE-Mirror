import React from 'react';
import './EmailVerificationSent.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import success from './images/success.png';
import { Link } from 'react-router-dom';

const EmailVerificationSent = () => {
  return (
    <ScrollIntoView>
      <div>
        <Navbar />
        <div className="email-success mb-5 text-center">
          <div className="email-succes-card">
            <div className="email-success-container">
              <img src={success} alt="" />
              <h5>Verification Link sent </h5>
              <p>
                {' '}
                <b>Please Check Your Email!</b>{' '}
              </p>

              <Link to="/">
                <button className="email-success-btn">
                  Continue to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};

export default EmailVerificationSent;
