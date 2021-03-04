import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BlocksFinder from "../api";
import { ContextBlocks } from "../context/ContextBlocks";

import { Button, Card, Container, Row, Table, Col } from "react-bootstrap";

const Blocks = (props) => {
  const { blocks, setBlocks } = useContext(ContextBlocks);
  let history = useHistory();

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const response = await BlocksFinder.get("/blocks");
        // console.log(response.data.data);
        setBlocks(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlocks();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Blocks</Card.Title>
                <p className="card-category">
                  Blocks contain components which thematically fit together.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Components</th>
                      <th className="border-0">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blocks && blocks.map((block) => {
                      return (
                        <tr key={block.id}>
                          <td>{block.id}</td>
                          <td>{block.name}</td>
                          <td>xxx</td>
                          <td>{block.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
              {/* <Card.Body className="all-icons">
                <Row>
                  
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="nc-icon nc-zoom-split"></i>
                      <p>nc-zoom-split</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blocks;
