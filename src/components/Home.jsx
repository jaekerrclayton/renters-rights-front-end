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
      <Container>
        <Row>
        <h1>{translations.main}</h1>
        </Row>
        
        <Row>
          
          <Col>
            <Card style={{ width: '14.5rem', height: '14.5rrem' }}>
            {/* <Card.Img id="icon" variant="top" src={evicIcon} /> */}
            <NavLink className="nav-link" to="/map-home">
                <Card.Body>
                  <Card.Text>
                  <img alt="evicIcon" id="icon" variant="top" src={evicIcon} />
                  <Card.ImgOverlay>
                      <h5>{translations.map}</h5> 
                  </Card.ImgOverlay>
                  </Card.Text>              
                </Card.Body>
                </NavLink>
          
            </Card>
          </Col> 
          <Col>
            <Card style={{ width: '14.5rem', height: '14.5rem' }}>
                <NavLink className="nav-link" to="/resources">
                  <Card.Body>
                    <Card.Text>
                    <img alt='res-icon' id="icon" variant="top" src={resIcon} />
                    <Card.ImgOverlay>
                        <h5>{translations.resources}</h5>
                      </Card.ImgOverlay>
                    </Card.Text>
                  </Card.Body>
                </NavLink>  
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '14.5rem', height: '14.5rem' }}>
              <NavLink className="nav-link" to="/contact">
                <Card.Body>

                  <Card.Text>
                  <img alt="faq-icon" id="icon" src={faqIcon} />
                  <Card.ImgOverlay>
                   
                    <h5>{translations.questions}</h5>
                    
                    </Card.ImgOverlay>
                  </Card.Text>             
                </Card.Body>
                </NavLink>
            </Card>
          </Col>   
        </Row>
        <hr />
        <hr />
      </Container>
    </div>
  );
}

export default Home;
