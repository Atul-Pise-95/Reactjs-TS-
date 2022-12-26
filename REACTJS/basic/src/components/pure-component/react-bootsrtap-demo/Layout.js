import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Layout = () => {
  return (
    <>
      <h1>Layout in React Bootstrap</h1>
      <Container className="bg-primary">Container</Container>
      <Container fluid className="bg-success">
        Container Fluid
      </Container>
      <Container fluid className="bg-success">
        <Row>
          <Col className="bg-warning">First col</Col>
          <Col className="bg-info" xs={6}>
            second col
          </Col>
          <Col className="bg-success">Third col</Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="bg-success" xs={6}>
            second col
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Layout;
