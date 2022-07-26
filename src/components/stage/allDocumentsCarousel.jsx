import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';
import './documentCarousel.css'; 


const AllDocumentsCarousel = ({documentData, stage_id}) => {
    console.log(stage_id)
    let vacateDocs = documentData[1];
    let orderDocs = documentData[2]; 
    let courtPrep = documentData[3] 
    let judgmentDocs = documentData[5]; 
    let documents = []
    if (stage_id === 1){
        documents = vacateDocs; 
    }else if (stage_id === 2 ) {
        documents = orderDocs; 
    }else if (stage_id === 3 ) {
        documents = courtPrep; 
    }else if (stage_id === 5) {
        documents = judgmentDocs; 
    }

    return (
    <div class="my-container">
    <Carousel variant="dark" slide={false}>
    {documents.map((doc) => (
        <Carousel.Item interval={10000000} className="docCarousel">
        <img
            id="doc-image"
            class="doc-image"
            // className="d-block w-100"
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
                        <strong>{box.sub_title}</strong>
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

export default AllDocumentsCarousel;
