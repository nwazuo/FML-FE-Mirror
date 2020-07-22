import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import ProtectedRoute from './components/router/protectedroute/ProtectedRoute'
import pageurl from './components/router/url/pageurl'
import {Navbar,Footer} from './components/pages/navigation'
import {Login,SignUp,Terms} from './components/pages/mainpages'
import Sample from './components/pages/sample/Sample'

function App() {

  return (

    <Router basename={process.env.PUBLIC_URL}>

      <div className="maincon">

        <Navbar/>

          <Switch>
              
                <Route exact path={pageurl.LANDING_PAGE_URL} component={Sample} />
                
                <Route exact path={pageurl.LOGIN_PAGE_URL} component={Login} />

                <Route exact path={pageurl.REGISTER_PAGE_URL} component={SignUp} />

                <Route exact path={pageurl.TC_PAGE_URL} component={Terms} />

                {/* <ProtectedRoute exact path={pageurl.LOGINURL} component={Login} history={history} /> */}

                {/* <Route path="*" component={Page404}/> */}
                      
                {/* <Route component={Page404}/> */}

          </Switch>

        <Footer/>

      </div>

   </Router>

  );
}

export default App;