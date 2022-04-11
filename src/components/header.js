import React, {useState, useEffect} from 'react';
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
  var User = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const [user, setUser] = useState(User);

  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  useEffect(() => {
    console.log("user", user);
  } , [user]);

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
              {!user && (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i color='white' className="fas fa-user text-dark"></i> Log In
                  </Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to='#' onClick={handleClick}>
                  <Nav.Link>
                    <i color='white' className="fas fa-user text-dark"></i>Sign Out
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header