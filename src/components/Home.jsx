import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import evictionMap from './data/documents/evictionMap.png'
import repairs from './data/documents/repairs.png';
import './Home.css';




function Home() {
  return (
    <div className="home">
      <h1>Homepage</h1>

      <Container>
          <Row>
            <Col>
                  <Card style={{ width: '15rem'}}>
                      {/* <Card.Img variant="top" src={evictionMap} /> */}
                      <NavLink className="nav-link" to="/map-home">
                          <Card.Body>
                            <Card.Title>Eviction Map</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>              
                      </Card.Body>
                    </NavLink>
                  </Card>
            </Col> 
            <Col>
                  <Card style={{ width: '15rem' }}>
                      {/* <Card.Img variant="top" src="https://picsum.photos/500/300?img=1" /> */}
                        <NavLink className="nav-link" to="/resources">
                          <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                      </NavLink>  
                  </Card>
            </Col>
            <Col>
                  <Card style={{ width: '15rem' }}>
                      {/* <Card.Img variant="top" src={repairs} /> */}
                      <NavLink className="nav-link" to="/contact">
                          <Card.Body>
                            <Card.Title>Contact</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>             
                      </Card.Body>
                    </NavLink> 
                  </Card>
            </Col>   
          </Row>
      </Container>
    </div>
  );
}

export default Home;
