import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import pageurl from '../../../router/url/pageurl'
import logo from "../../../assets/images/logo.svg";
import '../../../assets/bootstrap.css';
import './dashboardNavigation.scss';



const DashboardNavbar = (props) => {
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
                        >LEND <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link" 
                        to="#"
                        >BORROW <span className="sr-only">(current)</span></Link>
                </li>


                <li className="nav-item ">
                    <Link className="nav-link" to="#">ABOUT <span className="sr-only">(current)</span></Link>
                </li>
            </ul>
         
            </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(DashboardNavbar);