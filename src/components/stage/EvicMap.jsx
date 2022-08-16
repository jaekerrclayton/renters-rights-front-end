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
            <Alert.Heading>{documentData.can_ll}</Alert.Heading>
            <hr/>
            

            <Row>
              {documentData['ll_slides'].map((can_do) => (
                <Col>
                <Card style={{ width: '10rem', height: '10rem' }}>
                  <Card.Body>
                  {/* <Card.Text> */}
                  {/* <Card.ImgOverlay> */}
                      {/* <p>{can_do.text}</p> */}
                  {/* </Card.ImgOverlay> */}
      
                  <Card.Img alt="ll-no" src={can_do.image} />
                    
                    {/* </Card.Text> */}
                  </Card.Body>
               </Card>
               </Col>

              ))}
            </Row>

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

