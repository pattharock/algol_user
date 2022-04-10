import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";

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
  },
  input: {
    height: "3rem",
    borderColor: "#FA5C5C",
    color: "white",
    width: "60%",
    borderRadius: "1.5rem",
    borderWidth: "0.5px",
    padding: "0.5rem",
    fontSize: "1.2rem",
    marginBottom: "0.5rem"
  }, 
  button: {
    backgroundColor: "#FA5C5C",
    border: 0,
    width: "60%",
    height: "3rem",
    borderRadius: "1.5rem",
    fontSize: "1.2rem",
  }, 
  registerButton: {
    backgroundColor: "#FA5C5C",
    border: 0,
    width: "40%",
    height: "5rem",
    borderRadius: "1.5rem",
    fontSize: "2rem",
    color: "white"
  }
}



const SignupScreen = ({connect, disconnect, isActive, account}) => {

  useEffect(() => {
    if (isActive) {
      setWalletAddress(account);
    }
  }, [account, isActive]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <div className="bg-dark" style={styles.homeStyles} >
      <Container style={styles.container}>
        <img alt="logo" src={require('../static/logo.png')} />
        <h1 style={styles.h1}>Sign Up</h1>
        <form>
          <div className="form-group">
            <input 
              style={styles.input} 
              type="text" 
              name="username" 
              placeholder='Username' 
              value={username}
              className='bg-dark form-input-color'
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input 
              style={styles.input} 
              type="password" 
              name="password" 
              placeholder='Password'
              value={password}
              className='bg-dark form-input-color'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <br/>
            <button
              style={styles.button}
              onClick={(event) => {
                event.preventDefault();
                connect();
              }}
            > Connect to Wallet </button>
          </div> 
          <br/>
          <p name="walletAddress" >Connected Wallet Address: {isActive ? account : ""}</p>
          <br/>
          <button style={styles.registerButton} type='submit' onClick={(event) => {
            event.preventDefault();

            axios.post('https://fyp21050-server.herokuapp.com/register', {
              username: username,
              walletAddress: walletAddress
            })
            .then((response) => {
              const status = response.data.success;
              if(status){
                
              }
            }, (error) => 
            {
              console.log("ERROR IN SENDING REQUEST");
            });
          }}>
            Register Account
          </button>
        </form>
        <p style={styles.h2}>
           Have an Account ? <a style={styles.a} href="/login">Login</a> to continue.
        </p>
      </Container>
    </div>
  )
}

export default SignupScreen