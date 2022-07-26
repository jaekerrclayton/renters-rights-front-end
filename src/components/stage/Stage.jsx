import React from "react";
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
    <main>

    <Container className="stages-all-map" id="add-padding">
      {/* <Row>
      <Col> */}
          <Alert className="text-box" variant="success">
                  <Alert.Heading>{stage.title}</Alert.Heading>
                  <hr />
                      <p style={{
                              maxHeight: 'calc(65vh - 210px)',
                              overflowY: 'auto'
                            }}>
                          <p>{stage.sub_title}</p>
                          <p>{stage.info}</p>
                          <b>{stage.important}</b>
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
      
      {/* </Col>
      <Col> */}
            <div>
                  <DocumentCarousel documentData={documentData} stage_id={stage.stage_id} />
            </div>
          {/* </Col>
      </Row> */}
  </Container>

  </main>


  );
}


export default Stage;
