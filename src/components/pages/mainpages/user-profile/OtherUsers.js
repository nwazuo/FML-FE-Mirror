import React, { useEffect } from 'react';
import '../../../assets/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../navigation/navigation';
import styles from './user-profile.module.css';
import Breadcrumb from './breadcrumb/breadcrumb';
import ProfileInfo from './profile-info/profile-info';
import profileImg from '../../../assets/images/man-in-red-jacket-1681010.jpg';
import ProfileStat from './profile-stat/profile-stat';
import RecommendBox from './recommend-box/recommend-box';
import trusteeImg from '../../../assets/images/image 8.png';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import pageurl from '../../../router/url/pageurl';
//Redux stuff
import { connect } from 'react-redux';
import {
  getOtherUserData,
  clearOtherUserData,
} from '../../../../actions/userActions';

const breadcrumbLinks = [
  { link: pageurl.DEFAULT_DASHBOARD_PAGE_URL, label: 'Dashboard' },
  { link: pageurl.USER_PROFILE_PAGE_URL, label: 'Profile' },
];

const trustees = [
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Aliyah Parker',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Alicia Knowles',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
];

const OtherUsers = (props) => {
  console.log(props.user.credentials);
  const userId = props.match.params.userid;

  useEffect(() => props.getOtherUserData(userId), []);

  const {
    isBlacklisted,
    numberOfLoansReceived,
    outstandingLoanAmount,
    recommendations,
    totalLoanAmountReceived,
    user: {
      // _id,
      firstName,
      lastName,
      photoURL,
      email,
      phone,
      address,
      occupation,
      gender,
      // role
    },
  } = props.user.otherUser;

  console.log(firstName);

  return (
    <ScrollIntoView>
      <React.Fragment>
        <Navbar />
        <div className={['container', styles.UserProfile].join(' ')}>
          <Breadcrumb>{breadcrumbLinks}</Breadcrumb>
          <h1 className="font-weight-bold">User Profile</h1>
          <div className="row">
            <div className="col-md-3 text-md-center text-sm-left ">
              <div className="d-flex flex-md-column flex-sm-row align-items-center">
                <img
                  className={styles.ProfileImg}
                  src={photoURL}
                  alt="user profile"
                />
                <div className="ml-3 ml-md-0">
                  <h4
                    className={[
                      styles.Username,
                      'text-center',
                      'font-weight-bold',
                      'mt-2',
                      'mb-0',
                      'mb-md-3',
                    ].join(' ')}
                  >
                    {`${firstName} ${lastName}`}
                  </h4>
                  <p className={styles.UserType}>Fundee</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 offset-md-1">
              <h2 className="font-weight-bold mt-md-0 mt-5">
                Basic Information
              </h2>
              <div className="row">
                <div className="col-md-5">
                  <ProfileInfo title="Full Name">{`${
                    firstName ? firstName : null
                  } ${lastName ? lastName : null}`}</ProfileInfo>
                  <ProfileInfo title="Contact Information">
                    {phone ? phone : 'Nil'}
                  </ProfileInfo>
                  <ProfileInfo title="Gender">
                    {gender ? gender : 'Nil'}
                  </ProfileInfo>
                </div>
                <div className="col-md-7">
                  <ProfileInfo title="Address">
                    {address ? address : 'Nil'}
                  </ProfileInfo>
                  <ProfileInfo title="Email address">
                    {email ? email : 'Nil'}
                  </ProfileInfo>
                  <ProfileInfo title="Occupation">
                    {occupation ? occupation : 'Nil'}
                  </ProfileInfo>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.Stats} mb-3`}>
            <h2 className="font-weight-bold">Stats</h2>
            <div className="row">
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat
                  statsTitle="Blacklist Status"
                  statsValue={isBlacklisted ? 'Blacklisted' : 'None'}
                />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat
                  statsTitle="Total Debt"
                  statsValue={
                    totalLoanAmountReceived === 0
                      ? 'None'
                      : totalLoanAmountReceived
                  }
                />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat
                  statsTitle="Loans Received"
                  statsValue={
                    numberOfLoansReceived === 0 ? 'None' : numberOfLoansReceived
                  }
                />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat
                  statsTitle="Total Outstanding"
                  statsValue={
                    outstandingLoanAmount === 0 ? 'None' : outstandingLoanAmount
                  }
                />
              </div>
            </div>
          </div>

          {recommendations.length > 0 && (
            <div className={styles.Recommendations}>
              <div
                className={[
                  'd-flex',
                  'align-items-center',
                  'justify-content-between',
                  styles.RecommendHeader,
                ].join(' ')}
              >
                <h2 className="font-weight-bold">Recommendations</h2>
                <Link className={styles.RecommendLink} to="/recommendations">
                  See All
                  <svg
                    width=".7em"
                    height=".7em"
                    viewBox="0 0 16 16"
                    className="bi bi-chevron-right ml-1 mb-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      strokeWidth="10"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="row">
                {recommendations.map((trustee, idx) => {
                  return (
                    <div
                      className="col-md-4 col-6 px-2 mb-3"
                      key={`trustee_${idx}`}
                    >
                      <RecommendBox
                        key={`trustee_${idx}`}
                        trusteeName={
                          trustee.user.firstName + ' ' + trustee.user.lastName
                        }
                        trusteePic={trustee.user.photoURL}
                      >
                        {trustee.text}
                      </RecommendBox>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </React.Fragment>
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, {
  getOtherUserData,
  clearOtherUserData,
})(OtherUsers);
