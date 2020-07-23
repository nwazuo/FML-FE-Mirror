import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import pageurl from '../url/pageurl';

const renderPage = (Component,props) =>{
    return <Route render = {() => <Component {...props} />}/>
}

const userAuthTest = {
    isAuthenticated : false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb,100);
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb,100);
    }
}

const ProtectedRoute = ({component: Component,history,...rest}) => {
    return(
        <Route {...rest} render={       
            (props) => {
                return userAuthTest.isAuthenticated ? renderPage(Component,props) : <Redirect to={{pathname: pageurl.LOGIN_PAGE_URL,state: {from: props.location}}} />
            }
        }/>
    )
}

export default withRouter(ProtectedRoute);