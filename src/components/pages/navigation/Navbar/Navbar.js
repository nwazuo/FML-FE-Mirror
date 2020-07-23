import React from 'react';
import './style.css';
import '../../../assets/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import logo from "../../../assets/images/logo.svg"
import pageurl from '../../../router/url/pageurl'


const Navbar = (props) => {
  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
            <Link className="navbar-brand" to="#">
               <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        
            <div className="collapse navbar-collapse text-center" id="exCollapsingNavbar">
            <ul className="navbar-nav ml-auto">
                
              
                <li className="nav-item ">
                    <Link className="nav-link" 
                        to="#"
                        property>FUND <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link" 
                        to="#"
                        property>REQUEST <span className="sr-only">(current)</span></Link>
                </li>


                <li className="nav-item ">
                    <Link className="nav-link" to={pageurl.ABOUT_US_PAGE_URL}>ABOUT <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="btn btn-fml-secondary" to={pageurl.LOGIN_PAGE_URL}>LOGIN <span className="sr-only">(current)</span></Link>
                </li>

                {/* <li className="nav-item ">
                    <button className="btn btn-fml-secondary" to="#">Start a campaign <span className="sr-only">(current)</span></button>
                </li> */}
             
            </ul>
         
            </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);