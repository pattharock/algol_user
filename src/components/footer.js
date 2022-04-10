import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%"
  }
}
const Footer = () => {
  return (
    <footer className="bg-dark" style={styles.footer}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Algol
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer