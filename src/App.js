import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'


import Sample from './components/pages/sample/Sample';
import Terms from './components/pages/terms/terms'

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
            <Route exact path={pageurl.TERMS_CONDITION_URL} 
            // component={Terms and Condition} 
            component={Terms} 
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
