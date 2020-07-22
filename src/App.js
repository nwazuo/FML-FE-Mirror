import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'
import Sample from './components/pages/sample/Sample'
import PrivacyPolicy from './components/pages/privacy/Privacy';
import LoginPage from './components/pages/login/login';
import SignupPage from './components/pages/signup/signup';
import Terms from './components/pages/terms/terms';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* header here */}

      <Switch>
        <Route exact path={pageurl.LANDING_PAGE_URL} component={Sample} />

        <Route exact path={pageurl.LOGIN_PAGE_URL} component={LoginPage} />

        <Route exact path={pageurl.PRIVACY_POLICY} component={PrivacyPolicy} />

            {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}
        <Route exact path={pageurl.SIGNUP_PAGE_URL} component={SignupPage} />

        <Route exact path={pageurl.TERMS_CONDITION_URL} component={Terms} />

        {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}

        {/* <Route path="*" component={Page404}/> */}

        {/* <Route component={Page404}/> */}
      </Switch>

      {/* footer here */}
    </Router>
  );
}

export default App;
