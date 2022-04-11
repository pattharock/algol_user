import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loader = ({message}) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: 100, 
        height: 100, 
        margin: "auto",
        display: "block"
      }}>
        <span className="sr-only">{message}</span>
    </Spinner>
  )
}

export default Loader