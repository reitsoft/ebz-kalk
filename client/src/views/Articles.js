import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Articles() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Articles</Card.Title>
                <p className="card-category">Articles and purchased parts for components.</p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row></Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Articles;
