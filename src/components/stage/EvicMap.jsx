import React, { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from "./evictionDocsCarousel";
// import DropdownStages from "./stageDropdown";
import PopoverPositionedExample from './poppppp';

const EvicMap = () => {
  return (

      <Container>
          <Row style={{ width: '30rem' }}><ControlledCarousel /></Row>  
           
          {/* <Row><DropdownStages/></Row> */}
          /* <Row><PopoverPositionedExample/></Row> */}
    
      </Container>

  
  );
      

}




export default EvicMap;




{/* <section>
<Container>
    <Row>
      <Col sm={8}>
         <ControlledCarousel />  
      </Col>  
      <Col sm={4}><DropdownStages/></Col>
    </Row>

</Container>
</section> */}