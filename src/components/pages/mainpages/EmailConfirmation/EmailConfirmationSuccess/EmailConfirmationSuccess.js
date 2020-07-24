import React from 'react';
import './EmailConfirmationSuccess.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import success from './images/success.png';

const EmailConfirmationSuccess = () => {
  return (
    <ScrollIntoView>
      <div>
        <Navbar />
        <div className="email-success mb-5 text-center">
          <div className="email-succes-card">
            <div className="email-success-container">
              <img src={success} alt="" />
              <h5>Congratulations</h5>
              <p>
                {' '}
                <b>Email Verified!!!</b>{' '}
              </p>

              <button className="email-success-btn">
                Continue to Homepage
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};

export default EmailConfirmationSuccess;
