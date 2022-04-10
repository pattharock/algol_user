import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const styles = {
  homeStyles: {
    height: "120vw",
    color: "white",
  }, 
  container: {
    textAlign: "center"
  },
  h1: {
    marginTop: "-10vw",
    color: "#FA5C5C"
  },
  h2: {
    color: "#FA5C5C",
    fontSize: "1.5rem"
  }, 
  a: {
    color: "#7ee6e4"
  }
}
const LoginScreen = () => {

  return (
    <div className="bg-dark" style={styles.homeStyles} >
      <Container style={styles.container}>
        <img alt="logo" src={require('../static/logo.png')} />
        <h1 style={styles.h1}>Log In</h1>
      </Container>
    </div>
  )
}

export default LoginScreen