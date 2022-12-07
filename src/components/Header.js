import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";


function Header() {
  return (

    <Navbar className="Nav" color="dark" variant="dark" dark >
      <Container className='d-flex nav-container mx-4' >
        <NavbarBrand href="/">BLOG APP</NavbarBrand>
        <Nav>
          <NavItem>
            <Link  to="/" className='btn btn-info' style={{textDecoration:'none'}}>My Blogs</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
 

  )
}

export default Header