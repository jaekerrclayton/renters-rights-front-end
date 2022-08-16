import React from "react";
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";


const MapCarousel = ({documentData}) => { 
    return (
      <div id="evic-carousel">
        <Carousel variant="dark" slide={false}>
          {documentData[1].map((document) => (
            <Carousel.Item>                          
              <img
                className="d-md-block w-100"
                src={document.id}
                alt="vacate docs"
              />
              <Carousel.Caption id="doc-button-link">
                <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                  <h6><button className="button">{document.stage_title}</button></h6>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          {documentData[2].map((document) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={document.id}
                alt="vacate docs"
              />
              <Carousel.Caption id="doc-button-link">
                <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                <h6><button className="button">{document.stage_title}</button></h6>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          {documentData[5].map((document) => (
            <Carousel.Item>
              <div className="d-grid gap-2">
              </div>
              <img
                className="d-block w-100"
                src={document.id}
                alt="vacate docs"
              />
              <Carousel.Caption id="doc-button-link"> 
                <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                <h4><button className="button">{document.stage_title}</button></h4>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
};



export default MapCarousel;