import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapCarousel from "./mapCarousel";
import AlertDismissible from './mapIntroAlert'; 
import '../Home.css';



const EvicMap = () => {
  return (

      <Container style={{ width: '30rem' }}>
        {/* <Row className="welcome-message">
          <AlertDismissible />
        </Row> */}
          <Row><MapCarousel /></Row>
      </Container>
  
  );
      

}

export default EvicMap;

