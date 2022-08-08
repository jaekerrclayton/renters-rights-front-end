import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from "./evictionDocsCarousel";



const EvicMap = () => {
  return (

      <Container style={{ width: '100rem' }}>
        <h6>Please select the photo most similar to the document you have received </h6>
          <Row><ControlledCarousel /></Row>
          <Row><h1>Some stuff</h1></Row>  
           


    
      </Container>

  
  );
      

}

export default EvicMap;

