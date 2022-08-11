import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';




function Home({translations}) {
  return (
    <div className="home">
      <Container>
          <Row>
            <Col>
                  <Card style={{ width: '15rem'}}>
                      {/* <Card.Img variant="top" src={evictionMap} /> */}
                      <NavLink className="nav-link" to="/map-home">
                          <Card.Body>
                            <Card.Title>{translations.map}</Card.Title>
                            <Card.Text>
                              {translations.mapDescription}
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
                            <Card.Title>{translations.resources}</Card.Title>
                            <Card.Text>
                              {translations.resourceDescription}
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
                            <Card.Title>{translations.questions}</Card.Title>
                            <Card.Text>
                              {translations.questionDescription}
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
