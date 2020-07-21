import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
// import './styles.css';
import { Link } from 'react-router-dom';

const FmlNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" className="container-fluid" light expand="lg">
        <Link className="navbar-brand head-link" to="/"> 
            
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink> Features </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> Pricing </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> Resources </NavLink>
            </NavItem>
           
          </Nav>
          <div className="ml-auto">
            <Button className="bg-white text-dark font-weight-400" style={{border: 1 }}> Login </Button>{' '}
            <Button  className="rounded-pill btn-info text-white "> Sign Up </Button>{' '}
          </div>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default FmlNavbar;