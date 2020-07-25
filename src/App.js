import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import pageurl from './components/router/url/pageurl'
import {ComingSoon} from './components/pages/mainpages'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <Switch>

        <Route exact path={pageurl.COMING_SOON_URL} component={ComingSoon} />

        <Route path="*" component={ComingSoon} />

      </Switch>

    </Router>
  );
}

export default App;