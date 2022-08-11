import React, { useState, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapCarousel from "./mapCarousel";
import AlertDismissible from './mapIntroAlert'; 
import '../Home.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const EvicMap = () => {

  const [show, setShow] = useState(false);
  
  return (

      <Container style={{ width: '30rem' }}>
        <Row className="welcome-message">
          <AlertDismissible />
        </Row>
        <Button variant="primary" onClick={() => setShow(true)}>
        Browse document examples
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-80w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Do any of these look like your notice? 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
              <MapCarousel />
          </p>
        </Modal.Body>
      </Modal>









          {/* <Row><MapCarousel /></Row> */}
      </Container>
  
  );
      

}

export default EvicMap;

