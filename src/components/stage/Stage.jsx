import React from "react";

// import './stageCarousel'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypesAbbr from '../type/TypesAbbr';
import DocumentCarousel from './allDocumentsCarousel'; 
import Alert from 'react-bootstrap/Alert';

import {
    useParams,
  } from "react-router-dom";

  
const Stage = ({documentData, stageData, typeData}) => {
  const getStage = (stage_id) => {
    return stageData.find(
      (stage) => stage.stage_id === stage_id
    ); 
  }

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
                      <p style={{
                              maxHeight: 'calc(55vh - 210px)',
                              overflowY: 'auto'
                            }}>
                          <p>{stage.sub_title}</p>
                          <p>{stage.info}</p>
                          <h5>{stage.important}</h5>
                          {stage.about_notice.map((fact) => (
                              <p>{fact}</p>
                          ))}
                          {stage.additional_resources.map((resource)=> (
                            <p>{resource}</p>
                          ))}
                          <p>{stage.nextSteps}</p>
                          <p>{stage.next_steps}</p>
                      </p>
                      <hr />
                      <p className="mb-0">
                  <TypesAbbr typeDataJson={typeData}/>
                  </p>
          </Alert>
      
      </Col>
      <Col sm>

            <div>
                  <DocumentCarousel documentData={documentData} stage_id={stage.stage_id}  />
            </div>
          </Col>
      </Row>
  </Container>

  </>


  );
}


export default Stage;
