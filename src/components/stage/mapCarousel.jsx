import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './evictionDocsCarousel.css'; 

import documentData from '../data/english_data/documentData'; 



const MapCarousel = () => { 

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
                                    <Button>{document.stage_title}</Button>
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
                                    <Button >{document.stage_title}</Button>
                                  </NavLink>
                              </Carousel.Caption>
  
                            </Carousel.Item>
  
                          ))}
                      {documentData[5].map((document) => (

                          <Carousel.Item>

                              <div className="d-grid gap-2">
                              </div>
                            
                            {/* <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                                <Button>{document.stage_title}</Button>
                            </NavLink> */}
                            
                              <img
                                    className="d-block w-100"
                                    src={document.id}
                                    alt="vacate docs"
                              />

                            <Carousel.Caption id="doc-button-link"> 
                                  <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                                    <Button >{document.stage_title}</Button>
                                  </NavLink>
                              </Carousel.Caption>
  
                            </Carousel.Item>
  
                          ))}
  

              
          </Carousel>

      </div>
        
  )
};



export default MapCarousel;