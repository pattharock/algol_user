import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
// import rsa from 'js-crypto-rsa';
// import {encrypt, decrypt} from '../components/pki';
import axios from 'axios';

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
  p: {
    // marginTop: "-10vw",
    color: "white",
    fontSize: "1.5rem"
  },
  div: {
    // backgroundColor: "#FA5C5C",
    color: "white",
    padding: "1rem",
    borderRadius: "5rem",
    width: "80%",
  }
}
const HomeScreen = () => {
  const User = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const [user, setUser] = useState(User);
  if (!user){
    return (
      <div className="bg-dark" style={styles.homeStyles} >
        <Container style={styles.container}>
          <img alt="logo" src={require('../static/logo.png')} />
          <p style={styles.h1}>Decentralised Academic Identity Management</p>
          <p style={styles.h2}>
            <a style={styles.a} href='/signup'>Signup</a> or <a style={styles.a} href="/login">Login</a> to continue.
          </p>
        </Container>
      </div>
    )
  } else {
    const {id, privateKey, publicKey, username, walletAddress} = user;
    let credentials = null;
    axios.get(`https://fyp21050-server.herokuapp.com/getFilesByUser`,{ params: { userId: id } })
    .then(result => {
      console.log(result.data);
      credentials = result.data.credentials;
      for (let credential in credentials){
        // const filename = credential.data.name;
        // const encrypted1
        console.log(credential);
      }
    }, error => {
      console.log("ERROR")
      console.log(error.data);
    })

    return (
      <div className="bg-dark" style={styles.homeStyles} >
        <Container style={styles.container}>
          <img alt="logo" src={require('../static/logo.png')} />
          <Container style={styles.div}>
            <Table style={styles.div} striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>{username}</td>
                </tr>
                <tr>
                  <td>UserID</td>
                  <td>{id}</td>
                </tr>
                <tr>
                  <td>Wallet Address</td>
                  <td>{walletAddress}</td>
                </tr>
                <tr>
                  <td>Public Key</td>
                  <td>{publicKey.n}</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </div>
    )
  }

}

export default HomeScreen