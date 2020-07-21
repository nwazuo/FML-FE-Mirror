import React, { useState } from 'react';
import Navbarcss from './Navbar.module.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg"

const FmlNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar color="white" className="container-fluid" light expand="lg">
        <div className="container">
        <Link className="navbar-brand head-link" to="/"> 
            <img className=""  src={logo} alt="logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown className={Navbarcss.navItem}  nav inNavbar>
                <DropdownToggle nav caret>
                  Fundraise for
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem  className={Navbarcss.navItem}>
                <NavLink> Invest </NavLink>
              </NavItem>

              <NavItem  className={Navbarcss.navItem}>
                <NavLink> About Us </NavLink>
              </NavItem>

           
          </Nav>
          <div className="">
            <Button className={Navbarcss.btnfmloutline} > Sign in </Button>{' '}
            <Button  className={Navbarcss.btnfml}> Start a campaign </Button>{' '}
          </div>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default FmlNavbar;