import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MapCarousel from "./mapCarousel";
// import AlertDismissible from './mapIntroAlert'; 
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel'; 




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
            <Alert.Heading>Can my landlord ...?</Alert.Heading>
            <hr/>
              {/* <p> */}


            {/* <div id="llNo" > */}
              {/* <Carousel  id="llNo" variant="dark" slide={false} >
              <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={no}
                        alt="vacate docs"
                      />
                      <Carousel.Caption>
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                  <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={lights}
                        alt="vacate docs"
                      />
                      <Carousel.Caption >
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={no}
                        alt="vacate docs"
                      />
                      <Carousel.Caption >
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={move}
                        alt="vacate docs"
                      />
                      <Carousel.Caption >
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={no}
                        alt="vacate docs"
                      />
                      <Carousel.Caption>
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={cops}
                        alt="vacate docs"
                      />
                      <Carousel.Caption>
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={no}
                        alt="vacate docs"
                      />
                      <Carousel.Caption>
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>                          
                      <img
                        // className="d-md-block w-40"
                        src={lock}
                        alt="vacate docs"
                      />
                      <Carousel.Caption >
                        Can my Landlord??
                      </Carousel.Caption>
                    </Carousel.Item>
              
              
                  </Carousel> */}
                  {/* </p> */}
                  <hr/>
                  </Alert>
              {/* </div> */}

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

