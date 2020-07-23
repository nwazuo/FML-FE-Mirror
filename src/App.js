import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'
import {Login,SignUp,Terms,PrivacyPage,FAQ,ContactUs,UserProfile,Recommendations,
        LandingPage,AboutUs,Page404,ComingSoon,investordashboard} from './components/pages/mainpages'
import {FundeeDashboard} from './components/pages/dashboards'

function App() {

  return (

    <Router basename={process.env.PUBLIC_URL}>

          <Switch>

                <Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

                <Route exact path={pageurl.COMING_SOON_URL} component={ComingSoon} />

                <Route exact path={pageurl.LOGIN_PAGE_URL} component={Login} />

                <Route exact path={pageurl.REGISTER_PAGE_URL} component={SignUp} />

                <Route exact path={pageurl.TC_PAGE_URL} component={Terms} />

                <Route exact path={pageurl.ABOUT_US_PAGE_URL} component={AboutUs} />

                <Route exact path={pageurl.USER_PROFILE_PAGE_URL} component={UserProfile} />

                <Route exact path={pageurl.USER_RECOMMENDATIONS} component={Recommendations} />

                <Route exact path={pageurl.PRIVACY_POLICY_PAGE_URL} component={PrivacyPage} />

                <Route exact path={pageurl.FAQ_PAGE_URL} component={FAQ} />

                <Route exact path={pageurl.CONTACT_US_PAGE_URL} component={ContactUs} />

                <Route exact path={pageurl.INVESTOR_DASHBOARD} component={investordashboard} />
                
                <Route exact path={pageurl.FUNDEE_DASHBOARD_PAGE_URL} component={FundeeDashboard} />

                {/* <ProtectedRoute exact path={pageurl.LANDING_PAGE_URL} component={Login}/> */}

                {/* <Route exact path={pageurl.PAGE_404} component={Page404}/> */}

                <Route component={Page404}/>

          </Switch>

   </Router>

  );
}

export default App;
