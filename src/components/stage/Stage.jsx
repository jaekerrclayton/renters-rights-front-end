import React,  {useState} from "react";
import './stage.css';
// import './stageCarousel'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import DropdownStages from "./stageDropdown";
import Types from '../type/Types'; 
import TypesAbbr from '../type/TypesAbbr';
import DocumentCarousel from './allDocumentsCarousel'; 
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';



import {
    Link,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import stageData from '../data/english_data/stagesData.json'; 

  
const getStage = (stage_id) => {
  return stageData.find(
    (stage) => stage.stage_id === stage_id
  ); 
}
  
const Stage = () => {
  
  let params = useParams();
  let stage = getStage(parseInt(params.stage_id, 10));
  console.log(stage); 
  console.log(stage.title);

  console.log(stage.documents);

  return (
    <>

    <Container className="stages-all-map">
      <Row>
      <Col sm>
        
          <Alert id="about-notice" variant="success">
                  <Alert.Heading>{stage.title}</Alert.Heading>
                      <p>
                          <p>{stage.info}</p>
                          {stage.about_notice.map((fact) => (
                              <p>{fact}</p>
                          ))}
                          {stage.additional_resources.map((resource)=> (
                            <p>resource</p>
                          ))}
                      </p>
                      <hr />
                      <p className="mb-0">
                  <TypesAbbr />
                  </p>
          </Alert>
      
      </Col>
      <Col sm>

            <div>
                  <DocumentCarousel stage_id={stage.stage_id}  />
            </div>
          </Col>
      </Row>
  </Container>

  </>

   
  );
}


export default Stage;
