import React from "react";
import './stage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import DropdownStages from "./stageDropdown";
import Types from '../type/Types'; 
import TypesAbbr from '../type/TypesAbbr';



import {
    Link,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import { getStage } from "./stagesdata";
import OrderFirst from "./evictionNotices/orderFirst";
  
const Stage = () => {


  // export function getStage(stage_id) {
  //   return stages.find(
  //     (stage) => stage.stage_id === stage_id
  //   );
  // };
  

  // let photo =
  
  // this establishes what the endpoint will be
  let params = useParams();
  let stage = getStage(parseInt(params.stageId, 10));

  return (
    
      <Container>
        <Row><DropdownStages/></Row>
          {/* <Row> */}
                  {/* <Col> */}
                  {/* <Card style={{ width: '25rem' }}> */}
                      {/* <Card.Img variant="top" src={stage.photo} /> */}
                          {/* <Card.Body> */}
                              {/* <Card.Title>{stage.title}</Card.Title> */}
                              {/* <Card.Text> */}
                              {/* <h6>{stage.sub_title}</h6> */}
                              {/* </Card.Text> */}
                              {/* <Accordion>
                                    <Accordion.Item eventKey="1">
                                      <Accordion.Header>{stage.sub_title}</Accordion.Header>
                                      <Accordion.Body>
                                      <p>{stage.info}</p>
                                      <p>{stage.about_notice}</p>
                                      <p>{stage.additional_resources}</p>
                                      </Accordion.Body>
                                    </Accordion.Item>

                              </Accordion> */}
                              <Accordion>
                                    <Accordion.Item eventKey="1">
                                      <Accordion.Header>Causes for Eviction </Accordion.Header>
                                      <Accordion.Body>
                                      <p><TypesAbbr /></p>
                                      {/* <p>{stage.about_notice}</p>
                                      <p>{stage.additional_resources}</p> */}
                                      </Accordion.Body>
                                    </Accordion.Item>

                              </Accordion>
                              <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                      <Accordion.Header><h4>{stage.title}</h4></Accordion.Header>
                                      <Accordion.Body>
                                            <div>
                                            <Accordion>
                                                  <Accordion.Item eventKey="1">
                                                    <Accordion.Header>{stage.sub_title}</Accordion.Header>
                                                    <Accordion.Body>
                                                    <p>{stage.info}</p>
                                                    <p>{stage.about_notice}</p>
                                                    <p>{stage.additional_resources}</p>
                                                    {/* <p>{stage.photo}</p> */}
                                                    </Accordion.Body>

                  
                                                </Accordion.Item>
                                                </Accordion>

                                            </div>
                                            
                                            
                                      

                                            <div class="image-container"> 
                                            <Card.Img variant="bottom" src={stage.photo} class='document-image' id={stage.photo}/>
                                            </div> 

                                            
                                            <div><OrderFirst/></div>
                                      </Accordion.Body>
                                    </Accordion.Item>

                              </Accordion>
                              
                              {/* <Card.Img variant="bottom" src={stage.photo} /> */}
                             

                            {/* <Card.Title>Eviction Map</Card.Title> */}
                            {/* <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text> */}
                                {/* <NavLink className="nav-link" to="/map-home">
                                      <Button variant="primary">Eviction Map</Button>
                                </NavLink>                */}
                                
                      {/* </Card.Body> */}
                  {/* </Card> */}
                  {/* </Col> */}
            
                    
          {/* </Row> */}

              
                </Container>


   
  );
}


export default Stage;
