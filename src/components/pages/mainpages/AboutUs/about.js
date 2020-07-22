import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './about.css';
import pageurl from '../../../router/url/pageurl';
import Image1 from './img/Rectangle 593.png';
import Image2 from './img/Rectangle 594.png';
import Image3 from './img/Rectangle 597.png';

const AboutUs = () => {
  return (
    <div className="container">
      <ol className="f-12 mt-5 breadcrumb" style={{ background: 'none' }}>
        <li className="breadcrumb-item">
          <Link className="pcolor" to={pageurl.LANDING_PAGE_URL}>
            Home
          </Link>
        </li>
        <li className="breadcrumb-item active text-dark">
          <Link className="pcolor1" href="#">
            <b>About FundMyLaptop</b>
          </Link>
        </li>
      </ol>

      <div className="row">
        <div className="col my-2">
          <h1>
            We connect <span className="secondary-text">investors</span> and interns
          </h1>
          <p>
            FundMylaptop is a platform where people who are willing to invest in
            tech talent get connected to individuals who are in need of funds
            for a laptop purchase or repair. This platform is not just
            connecting individuals, it is also breaking barriers and constraints
            of the tech industry.
          </p>
        </div>

        <div className="col my-2">
          <img src={Image2} alt="image one" style={{ width: '80%' }} />
        </div>
      </div>

      <div className="row flex-sm-row-reverse my-2">
        <div className="col my-2">
          <h1>
            Helping <span className="secondary-text">You</span> achieve that goal
          </h1>
          <p>
            We don’t just connect investors to interns. We are trying to build a
            community where absolutley no one is left behind in the tech
            community. Whether you are unable to pursue that tech dream of
            yours,bcause of lack of funds, MyFundLaptop is the best platform for
            you to get adequate funding.
          </p>
        </div>

        <div className="col my-2">
          <img src={Image1} alt="image one" style={{ width: '80%' }} />
        </div>
      </div>

      <div className="row">
        <div className="col my-2">
          <h1>
            Setting <span className="secondary-text">Standard</span> Pace
          </h1>
          <p>
            FundMylaptop has a system in place that verifies indivuals who wish
            to get funded.Verification checks ranges from BVN, KYC checks of
            fundees, also long-time reliable fundees vouch for new incoming
            fundees.
          </p>
        </div>

        <div className="col my-2">
          <img src={Image3} alt="image three" style={{ width: '80%' }} />
        </div>
      </div>

      <div className="container text-center my-5">
        <h3 className="my-5">Join other investors on Fund My Laptop</h3>
        <div>
          <Link href="#"className="start-btn btn btn-secondary btn-lg align-self-center mb-5" style={{ backgroundColor: ' #FB3F5C' }} >
            Start funding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
