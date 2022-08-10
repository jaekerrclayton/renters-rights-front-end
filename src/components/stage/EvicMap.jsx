import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from "./evictionDocsCarousel";
import AlertDismissible from './mapIntroAlert'; 
import '../Home.css';



const EvicMap = () => {
  return (

      <Container style={{ width: '50rem' }}>
        <Row className="welcome-message">
          <AlertDismissible />
        </Row>
      
        <h6>Please select the photo most similar to the document you have received </h6>
          <Row><ControlledCarousel /></Row>
          <Row><p>some text</p></Row>
          <Row><p>some more text</p></Row>
      </Container>
  
  );
      

}

export default EvicMap;

