import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ScrollIntoView from './components/router/scrollintoview/ScrollIntoView'
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'
// import {Navbar,Footer} from './components/pages/navigation'
import {Login,SignUp,Terms,PrivacyPage,FAQ,ContactUs,InvestorDashboard,
  // LandingPage
} from './components/pages/mainpages'
import Sample from './components/pages/sample/Sample';

function App() {

  return (
        
    <Router basename={process.env.PUBLIC_URL}>

      <div className="maincon">
        
        {/* <Navbar/> */}

          <Switch>

              <ScrollIntoView>
              
                <Route exact path={pageurl.LANDING_PAGE_URL} component={Sample} />
                
                <Route exact path={pageurl.LOGIN_PAGE_URL} component={Login} />

                <Route exact path={pageurl.REGISTER_PAGE_URL} component={SignUp} />

                <Route exact path={pageurl.TC_PAGE_URL} component={Terms} />

                <Route exact path={pageurl.PRIVACY_POLICY_PAGE_URL} component={PrivacyPage} />

                <Route exact path={pageurl.FAQ_PAGE_URL} component={FAQ} />

                <Route exact path={pageurl.CONTACT_US_PAGE_URL} component={ContactUs} />

                <Route exact path={pageurl.INVESTOR_DASHBOARD} component={InvestorDashboard} />

              </ScrollIntoView>

              {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}

              {/* <Route path="*" component={Page404}/> */}
                      
              {/* <Route component={Page404}/> */}

          </Switch>

        {/* <Footer/> */}
        
      </div>

   </Router>


  );
}

export default App;