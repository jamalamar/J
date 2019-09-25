import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


function NavBar (props) {

  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
          <Navbar.Brand style={style.brand} as={Link} to='/' >{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" style={style.navItems}>
              <Nav.Link as={Link} to='/Work' >Work</Nav.Link>
              <Nav.Link as={Link} to='/About' >About</Nav.Link>
              <Nav.Link as={Link} to='/Contact' >Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

const style = {

  brand: {
    fontSize: '1.6rem',
    lineHeight: '1.1',
    letterSpacing: '0.091em',
    fontWeight: '1000',
    fontSize: '36px'
  },

  navItems: {
    letterSpacing: '0.394em',
    fontWeight: '602',
  },
}


export default NavBar;