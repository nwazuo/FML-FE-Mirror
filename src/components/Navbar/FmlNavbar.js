import React from 'react';
import './style.css';
import '../assets/bootstrap.css';

import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg"


const FmlNavbar = (props) => {

  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
            <Link className="navbar-brand" href="#">
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
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Fundraise for
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">Action</Link>
                        <Link className="dropdown-item" href="#">Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Something else here</Link>
                    </div>
                </li>
              
                <li className="nav-item ">
                    <Link className="nav-link" href="#">Invest <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link" href="#">About Us <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <Link className="btn btn-outline-fml-secondary" href="#">Sign in <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item ">
                    <button className="btn btn-fml-secondary" href="#">Start a campaign <span className="sr-only">(current)</span></button>
                </li>
             
            </ul>
         
            </div>
        </div>
      </nav>
    
    </>
  );
}

export default FmlNavbar;