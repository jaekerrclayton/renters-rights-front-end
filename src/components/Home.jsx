import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import order2 from './data/documents/order2.jpeg';
import evictionMap from './data/documents/evictionMap.png'
import repairs from './data/documents/repairs.png'




function Home() {
  return (
    <div className="home">
     <h1>Homepage</h1>

     <Container fluid>
          <Row>
            <Col>
                  <Card style={{ width: '18rem'}}>
                      <Card.Img variant="top" src={evictionMap} />
                          <Card.Body>
                            <Card.Title>Eviction Map</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                                <NavLink className="nav-link" to="/map-home">
                                      <Button variant="primary">Eviction Map</Button>
                                </NavLink>               
                      </Card.Body>
                  </Card>
            </Col> 
            <Col>
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://picsum.photos/500/300?img=1" />
                          <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                                <NavLink className="nav-link" to="/resources">
                                      <Button variant="primary">Resources</Button>
                                </NavLink>               
                      </Card.Body>
                  </Card>
            </Col>
            <Col>
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={repairs} />
                          <Card.Body>
                            <Card.Title>Contact</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                                <NavLink className="nav-link" to="/contact">
                                      <Button variant="primary">Admin</Button>
                                </NavLink>               
                      </Card.Body>
                  </Card>
            </Col>   
          </Row>
      </Container>
    </div>
  );
}

export default Home;
