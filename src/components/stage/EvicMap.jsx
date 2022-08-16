import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapCarousel from "./mapCarousel";
// import AlertDismissible from './mapIntroAlert'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'; 




const EvicMap = ({documentData}) => {

  const [show, setShow] = useState(false);
  
  return (

    <main>
      <Container>
              <Alert className="text-box" variant="success">
              <Alert.Heading>{documentData.title}</Alert.Heading>
              <hr />
              <p>
                {documentData.introduction}
              </p>
              <hr />
              <p className="mb-0">
                    <button className="button" onClick={() => setShow(true)}>
                      {documentData.browse}
                    </button>
              </p>


            </Alert>
            
            <Alert className="text-box" variant="success">
            <Alert.Heading><h6>{documentData.can_ll}</h6></Alert.Heading>
            <hr/>
            

            <Row>
              {documentData['ll_slides'].map((can_do) => (
                <Col>
                <Card style={{ width: '13rem', height: '12rem' }}>
                  <Card.Body>
                  <Card.Text>
                  <img id="icon"  alt="ll-no" src={can_do.image} />
                  <Card.ImgOverlay id="llinfo">
                      <p>{can_do.text}</p>
                  </Card.ImgOverlay>
      
                  
                    
                    </Card.Text>
                  </Card.Body>
               </Card>
               </Col>

              ))}
            </Row>

            <hr/>
            <h6>{documentData.ll_disclaimer}</h6>
            <hr/>
            </Alert>
            

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-30w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {documentData.notice} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
              <MapCarousel documentData={documentData}/>
          </p>
        </Modal.Body>
      </Modal>




    </Container>
    </main>
  );
}

export default EvicMap;

