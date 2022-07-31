import React from "react";
import './stage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import {
    Link,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import { getStage } from "./stagesdata";
  
const Stage = () => {

  
  // this establishes what the endpoint will be
  let params = useParams();
  let stage = getStage(parseInt(params.stageId, 10));

  return (
    <main >
      <Container fluid>
            <Row>
                <Col className="evic-doc" id={stage.photo}></Col>

                <Col id="stage-info">
                  <Row>
                      <h3>{stage.title}</h3>
                      <h6>{stage.sub_title}</h6>
                  </Row>
                  <Row>
                    <h3>information about this stage:</h3>
                  </Row>
                  <Row>{stage.info}</Row>
                  <Row>
                    <h3>information about document !! THIS IS WHERE BOXES COME IN:</h3>
                  </Row>
                  <Row>{stage.about_notice}</Row>
                  <Row>
                    <h3>link To additional resources:</h3>
                  </Row>
                  <Row>{stage.additional_resources}</Row>
                </Col>
            </Row>
      </Container>


    </main>
  );
}


export default Stage;
