import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav, Container } from 'react-bootstrap'; 

const style = {
  navbar: {
    backgroundColor: '#FA5C5C',
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%"
  },
  headerTitle: {
    fontWeight: "bold",
    color: "white"
  }, 
  link: {
    color: "white"
  }
}

const Header = () => {
  return (
    <header style={style.header}>
      <Navbar style={style.navbar} expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand id="logo" style={style.headerTitle} >ALGOL.</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/login'>
                <Nav.Link><i color='white' className="fas fa-user text-dark"></i> Log In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header