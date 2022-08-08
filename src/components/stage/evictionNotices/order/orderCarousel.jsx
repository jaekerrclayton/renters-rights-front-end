import React from "react";
// import vacateData from "./vacateBoxData"; 
import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';

import documentData from '../../../data/english_data/documentData';  
import './orderCarousel.css'





const OrderCarousel = () => {
    let orderDocs = documentData[2]; 
  

  return (


    <div className="col-sm-12"class="my-container">
    <Carousel variant="dark" slide={false}>
    {orderDocs.map((doc) => (
         <Carousel.Item interval={10000000} className="docCarousel">
         <img
            id="doc-image"
            class="doc-image"
            className="d-block w-100"
            src={doc.id}
            alt="doc-pic"
            />
        {doc.docInfo.map((box) => (
            // <Carousel.Caption>
                <OverlayTrigger
                        trigger="hover"
                        key={box.info_id}
                        placement={box.placement}
                        overlay={
                    <Popover id={box.title}>
                    
                    <Popover.Header as="h3">{box.title}</Popover.Header>
                    
                    <Popover.Body>
                        <strong>{box.sub_title}</strong> Check this info.
                    </Popover.Body>
                    </Popover> 
                }
        >
                    <Button id={`btn-${box.info_id}`} variant="secondary">{box.info_id}</Button>
                </OverlayTrigger>
            // </Carousel.Caption> 
        ))}
        
        
        </Carousel.Item>




    ))}
    </Carousel>
    </div> 
  );
}

export default OrderCarousel;
