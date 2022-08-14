import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapCarousel from "./mapCarousel";
// import AlertDismissible from './mapIntroAlert'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';



const EvicMap = ({documentData}) => {

  const [show, setShow] = useState(false);
  
  return (

      <Container style={{ width: '20rem' }}>
        <Row className="welcome-message">
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
              </Row>
             

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-80w"
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
  );
}

export default EvicMap;

