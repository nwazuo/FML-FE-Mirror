import React, { Component } from "react";
import "./adminDashboard.css";
import {Link} from 'react-router-dom';
import alerm from "./img/alerm.png";
import avatar from "./img/avatar.png";
import left from "./img/left-logo.png";
import Ham1 from "./img/Ham-1.png";
import Ham2 from "./img/Ham-2.png";



class AdminDashboard extends Component {
  componentDidMount() {

    let sidebar_opener = document.querySelector('#sidebar-opener')
    let sidebar_closer = document.querySelector('#sidebar-closer')
    let sidebar = document.querySelector('#sidebar')

  sidebar_opener.addEventListener('click', function(){
    sidebar.style.display = 'block';
    sidebar.classList.remove("sidebar_close");
    sidebar.classList.add("sidebar_open");
})

  sidebar_closer.addEventListener("click", function () {
    sidebar.classList.remove("sidebar_open");
    sidebar.classList.add("sidebar_close");
});
  }

  render() {
    return (
      <>
        <div className="adminDashboard py-0 my-0">
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar Section */}
              <aside
                className="col-7 col-md-3 col-lg-2 custom__bg-dark vh-100 sidebar"
                id="sidebar"
              >
                <img src={Ham2} alt="Ham2" className="text-white d-md-none xander" id="sidebar-closer" />
                <img src={left} alt="left" className="ml-2"/> 
                <ul className="navbar-nav  mt-2 mt-lg-0 anchor">
                    <li className="nav-item ">
                      <Link className="nav-link " to="/admin-dashboard">Campaign</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-dashboard">Fundings</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-dashboard">Payments</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-dashboard/add-faq">ADD FAQS</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-dashboard">Settings</Link>
                    </li>
                </ul>
              </aside>
              {/* Main Section  */}
              <main className="col-12 col-md-9 col-lg-10 bg-light px-0 vh-100 overflow">
                {/* TopNav Section */}
                <nav className="bg-white d-flex sticky-top justify-content-en align-items-center py-2 py-md-3 px-2 px-md-5">
                {/* eslint-disable-next-line */}
                <img src={Ham1} className="d-md-none" id="sidebar-opener" />
                  <h5 className="font-weight-bold d-md-none ml-3 mb-0">
                    Dashboard
                  </h5>
                  <img
                     src={alerm}
                    className="img-fluid mr-3 mr-lg-5 ml-auto"
                    alt=""
                  />
                  <img
                    src={avatar}
                    className="img-fluid avatar"
                    alt=""
                  />
                  <div className="ml-2">
                    <p className="font-weight-bold my-0 d-none d-md-block">
                      Oluwakemi Adeleke
                    </p>
                    <p className="my-0 d-none d-md-block">Administrator</p>
                  </div>
                  <div className="btn-group">
                    <div className="btn-group ml-0 mx-lg-3">
                      <button
                        type="button"
                        className="btn dropdown-toggle no-border"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button">
                          Action
                        </button>
                        <button className="dropdown-item" type="button">
                          Another action
                        </button>
                        <button className="dropdown-item" type="button">
                          Something else here
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
                
                {/** Dashboard Routing */}

                {this.props.children}
                
                  
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
