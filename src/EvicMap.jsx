// import React, { useState, Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import MapCarousel from "./mapCarousel";
// import AlertDismissible from './mapIntroAlert'; 
// import '../Home.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import LlNoCarousel from './LL_no_carousel'; 


// const EvicMap = ({documentData}) => {

//   const [show, setShow] = useState(false);
  
//   return (

//       <Container style={{ width: '30rem' }}>
//         <Row className="welcome-message">
//           <AlertDismissible documentData={documentData}/>
//         </Row>
//         <Button variant="primary" onClick={() => setShow(true)}>
//         {documentData.browse}
//       </Button>

//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         dialogClassName="modal-80w"
//         aria-labelledby="example-custom-modal-styling-title"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-custom-modal-styling-title">
//             {documentData.notice} 
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>
//               <MapCarousel documentData={documentData}/>
//           </p>
//         </Modal.Body>
//       </Modal>
//       {/* <div>
//       <LlNoCarousel/> 
//       </div> */}
      









//           {/* <Row><MapCarousel /></Row> */}
//       </Container>
  
//   );
      

// }

// export default EvicMap;

