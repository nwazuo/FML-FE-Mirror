<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'


import Sample from './components/pages/sample/Sample'
import Contact from './components/pages/contact/Contact'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>

      {/* header here */}

      <Switch>

        <Route exact path={pageurl.LANDING_PAGE_URL}
          component={Sample}
        />

        <Route exact path={pageurl.LOGIN_PAGE_URL}
        // component={LoginPage} 
        />

        <Route exact path={pageurl.REGISTER_PAGE_URL}
        // component={RegisterPage} 
        />

        <Route exact path={pageurl.CONTACT_PAGE_URL}
         component={Contact} 
        />

        {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}

        {/* <Route path="*" component={Page404}/> */}

        {/* <Route component={Page404}/> */}

      </Switch>

      {/* footer here */}

    </Router>

  );
}

export default App;
=======
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl';

import Sample from './components/pages/sample/Sample';
import LoginPage from './components/pages/login/login';
import SignupPage from './components/pages/signup/signup';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* header here */}

      <Switch>
        <Route exact path={pageurl.LANDING_PAGE_URL} component={Sample} />

        <Route exact path={pageurl.LOGIN_PAGE_URL} component={LoginPage} />

        <Route exact path={pageurl.SIGNUP_PAGE_URL} component={SignupPage} />

        {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}

        {/* <Route path="*" component={Page404}/> */}

        {/* <Route component={Page404}/> */}
      </Switch>

      {/* footer here */}
    </Router>
  );
}

export default App;
>>>>>>> ab5b7b785f5d0fc6f8b003ee6dd40cb911323044
