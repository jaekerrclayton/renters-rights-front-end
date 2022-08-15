import React from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import evicIcon from '../data/documents/icons/evic-icon.png';
import faqIcon from '../data/documents/icons/faq-icon.png';
import resIcon from '../data/documents/icons/res-icon.png';

function Home({translations}) {
  return (
    <div className="home">
      <Container >
        <Row>
          <Col>
            <Card style={{ width: '15rem'}}>
            <Card.Img id="icon" variant="top" src={evicIcon} />
              <NavLink className="nav-link" to="/map-home">
                <Card.Body>
                  <Card.Title>{translations.map}</Card.Title>
                  <Card.Text>
                    {translations.mapDescription}
                    <button class="button">link</button>
                  </Card.Text>              
                </Card.Body>
              </NavLink>
            </Card>
          </Col> 
          <Col>
            <Card style={{ width: '15rem' }}>
            <Card.Img id="icon" variant="top" src={resIcon} />
                <NavLink className="nav-link" to="/resources">
                  <Card.Body>
                    <Card.Title>{translations.resources}</Card.Title>
                    <Card.Text>
                      {translations.resourceDescription}
                      <button class="button">link</button>
                    </Card.Text>
                  </Card.Body>
                </NavLink>  
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img id="icon" variant="top" src={faqIcon} />
              <NavLink className="nav-link" to="/contact">
                <Card.Body>
                  <Card.Title>{translations.questions}</Card.Title>
                  <Card.Text>
                    {translations.questionDescription}
                    <button class="button">link</button>
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
