import React, { Component } from 'react';
import '../../../assets/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../navigation/navigation';
import styles from './user-profile.module.css';
import Breadcrumb from './breadcrumb/breadcrumb';
import ProfileInfo from './profile-info/profile-info';
import ProfileStat from './profile-stat/profile-stat';
import RecommendBox from './recommend-box/recommend-box';
import FundeeCampaign from './fundee-campaign/fundee-campaign';
// import FundeeInvestment from './fundee-investment/fundee-investment';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import pageurl from '../../../router/url/pageurl';
import noRecommendation from './nohistory.svg';
//Redux stuff
import { connect } from 'react-redux';
import axios from 'axios';


const breadcrumbLinks = [
  { link: pageurl.DEFAULT_DASHBOARD_PAGE_URL, label: 'Dashboard' },
  { link: pageurl.USER_PROFILE_PAGE_URL, label: 'Profile' },
];

class UserProfile extends Component {

  state = {
    fullUserData: {},
    recommendations: [],
    errorMessage: '',
    campaigns: [],
    investments: []

  }

  componentDidMount () {
    const token = localStorage.getItem('FMLToken');
    axios.defaults.headers.common['Authorization'] = token;

    axios.get(`https://api.fundmylaptop.com/api/users/${this.props.user.credentials.data._id}`).then(res => {
      this.setState({
        fullUserData: {...res.data.data},
        recommendations: [...res.data.data.recommendations]
      })
    }).catch(err => {
      console.log(err);
    })

    axios.get(`https://api.fundmylaptop.com/api/campaigns/listRequests`, {
      headers: {
        'Authorization': localStorage.getItem('FMLToken')
        }
    })
    .then (res=>{
      this.setState({campaigns: res.data.data})
    }
    ).catch (err=>{
      console.log(err);
    })

    axios.get(`https://api.fundmylaptop.com/api/campaigns/listCampaigns`)
    .then (res=>{
      this.setState({investments: res.data.data})
    }
    ).catch (err=>{
      console.log(err);
    })

  } 


  render() {
    const credentials = this.props.user.credentials;

    const {
      // _id,
      firstName,
      lastName,
      photoURL,
      email,
      phone,
      address,
      occupation,
      gender,
      // isVerified,
      // isAdmin,
      // isAuth,
      // role,
      // isActive
    } = credentials.data;

    const { fullUserData } = this.state;
    const recommendations = [...this.state.recommendations];

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
                <Link to="/user-profile" className={styles.Edit}>
                  <svg
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 16 16"
                    className="bi bi-pencil-square pr-2"
                    fill="#FB3F5C"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  </svg>
                  Edit Profile
                </Link>
              </div>
              <div className="col-md-8 offset-md-1">
                <h2 className="font-weight-bold mt-md-0 mt-5">
                  Basic Information
                </h2>
                <div className="row">
                  <div className="col-md-5">
                    <ProfileInfo title="Full Name">{`${firstName} ${lastName}`}</ProfileInfo>
                    <ProfileInfo title="Contact Information">{phone}</ProfileInfo>
                    <ProfileInfo title="Gender">{gender ? {gender} : null}</ProfileInfo>
                  </div>
                  <div className="col-md-7">
                    <ProfileInfo title="Address">
                      {address}
                    </ProfileInfo>
                    <ProfileInfo title="Email address">{email}</ProfileInfo>
                    <ProfileInfo title="Occupation">
                      {occupation ? {occupation} : null }
                    </ProfileInfo>
                  </div>
                </div>
              </div>
            </div>
  
            <div className={styles.Stats}>
              <h2 className="font-weight-bold">Stats</h2>
              <div className="row">
                <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                  <ProfileStat statsTitle="Blacklist Status" statsValue={fullUserData ? (fullUserData.isBlackListed ? 'Yes' : 'No' ) : 'No'} />
                </div>
                <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                  <ProfileStat statsTitle="Total Debt" statsValue={fullUserData ? fullUserData.totalLoanAmountReceived : 'nil'} />
                </div>
                <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                  <ProfileStat statsTitle="Loans Received" statsValue={fullUserData ? fullUserData.numberOfLoansReceived : 'nil'} />
                </div>
                <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                  <ProfileStat statsTitle="Total Outstanding" statsValue={fullUserData ? fullUserData.outstandingLoanAmount : 'nil'} />
                </div>
              </div>
            </div>

            <div className={styles.Recommendations}>
            <div
              className={[
                'd-flex',
                'align-items-center',
                'justify-content-between',
                styles.RecommendHeader,
              ].join(' ')}
            >
              <h2 className="font-weight-bold pl-5">Fundee Campaign</h2>
              <Link className={styles.RecommendLink} to="#">
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
            <div className="row ">
            {this.state.campaigns.length > 0 ? this.state.campaigns.map(campaign => {
                  return (
                        <div  className={`col-md-4 col-sm-12 px-2 mb-3 ${styles.RecommendContainer}`}>
                          <ul className="list-unstyled ml-5 ">
                            <li key={campaign._id}>
                              <FundeeCampaign
                                title= {campaign.title}
                                description={campaign.description}
                                amount={campaign.amount}
                                location={campaign.location}
                                fundeepic={campaign.photoURL}
                                currency= {campaign.currency}/>
                                
                            </li>
                          </ul>
                      </div>
                  );
                }):<div className={["py-5", "d-flex", "flex-column", "align-items-center", 
                styles.NoData].join(' ')}>
                <img className="img-fluid" src={noRecommendation} alt="no data" />
                <h3 className={['mb-3', 'text-center'].join(' ')}>
                  You Have No<br/> campaigns Yet.
                </h3>
              </div>}
            </div>
          </div>

          <div className={styles.Recommendations}>
            <div
              className={[
                'd-flex',
                'align-items-center',
                'justify-content-between',
                styles.RecommendHeader,
              ].join(' ')}
            >
              <h2 className="font-weight-bold pl-5">Fundee investments</h2>
              <Link className={styles.RecommendLink} to="#">
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
            {this.state.investments.length > 0 ? this.state.investments.map(investment => {
                  return (
                        <div  className="col-md-4 col-sm-12 px-2 mb-3">
                          <ul className="list-unstyled ml-5 ">
                            <li key={investment._id}>
                              <FundeeCampaign
                                title= {investment.campaign.title}
                                description={investment.campaign.description}
                                amount={investment.campaign.amount}
                                location={investment.campaign.location}
                                fundeepic={investment.campaign.photoURL}
                                currency= {investment.campaign.currency}/>
                                
                            </li>
                          </ul>
                      </div>
                  );
                }):<div className={["py-5", "d-flex", "flex-column", "align-items-center", 
                styles.NoData].join(' ')}>
                <img className="img-fluid" src={noRecommendation} alt="no data" />
                <h3 className={['mb-3', 'text-center'].join(' ')}>
                  You Have No<br/> investments Yet.
                </h3>
              </div>}
            </div>
          </div>
  
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
                {recommendations.length > 0 ? <Link className={styles.RecommendLink} to="/recommendations">
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
                </Link> : null }
              </div>
              <div className="row">
                { recommendations.length > 0 ? recommendations.map((recommendation, idx) => {
                  const fName = {...{...recommendation}.user}.firstName;
                  const lName = {...{...recommendation}.user}.lastName;
                  const photo = {...{...recommendation}.user}.photoURL;
                  const text = {...recommendation}.text;
                  return (
                    <div
                      className="col-md-4 col-6 px-2 mb-3"
                      key={`recommendation_${idx}`}
                    >
                       <RecommendBox
                        trusteeName={`${fName} ${lName}`}
                        trusteePic={photo}
                      >
                        {text}
                      </RecommendBox>
                    </div>
                  );
                }) : 
                <div className={["py-5", "d-flex", "flex-column", "align-items-center", 
                  styles.NoData].join(' ')}>
                  <img className="img-fluid" src={noRecommendation} alt="no data" />
                  <h3 className={['mb-3', 'text-center'].join(' ')}>
                    You Have No<br/> Recommendations Yet.
                  </h3>
                </div>}
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </ScrollIntoView>
    );
  };
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(UserProfile);
