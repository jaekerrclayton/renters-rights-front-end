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
            <Card style={{ width: '15rem', height: '20rem' }}>
            {/* <Card.Img id="icon" variant="top" src={evicIcon} /> */}
                <Card.Body>
                  {/* <Card.Title>{translations.map}</Card.Title> */}
                  <Card.Text>
                  <img alt="evicIcon" id="icon" variant="top" src={evicIcon} />
                    <NavLink className="nav-link" to="/map-home">
                      <button class="button">{translations.map}</button>
                    </NavLink>
                    <p>
                      {translations.mapDescription}
                    </p>
                  </Card.Text>              
                </Card.Body>
          
            </Card>
          </Col> 
          <Col>
            <Card style={{ width: '15rem', height: '20rem' }}>
            {/* <Card.Img id="icon" variant="top" src={resIcon} /> */}
                <NavLink className="nav-link" to="/resources">
                  <Card.Body>
                    <Card.Text>
                    <img alt='res-icon' id="icon" variant="top" src={resIcon} />
                      <NavLink className="nav-link" to="/resources">
                        <button class="button">{translations.resources}</button>
                      </NavLink>
                      <p>
                        {translations.resourceDescription}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </NavLink>  
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem', height: '20rem' }}>
              {/* <Card.Img id="icon" variant="top" src={faqIcon} /> */}
                <Card.Body>
                  {/* <Card.Title>{translations.questions}</Card.Title> */}
                  <Card.Text>
                  <img alt="faq-icon" id="icon" src={faqIcon} />
                    <NavLink className="nav-link" to="/contact">
                    <button class="button">{translations.questions}</button>
                    </NavLink>
                    <p>
                      {translations.questionDescription}
                    </p>
                  </Card.Text>             
                </Card.Body>
            </Card>
          </Col>   
        </Row>
      </Container>
    </div>
  );
}

export default Home;
