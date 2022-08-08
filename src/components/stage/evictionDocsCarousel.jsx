import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

// // import courtVacate from './evictionNotices/5d-court-vacate.jpg';
// import vacate1 from '../data/documents/vacate1.jpeg';
// import vacate2 from '../data/documents/vacate2.jpeg';
// import vacate3 from '../data/documents/vacate3.jpeg';
// import order1 from '../data/documents/order1.jpeg';
// import order2 from '../data/documents/order2.jpeg';
// import judgment1 from '../data/documents/judgment1.jpeg';
// import judgment2 from '../data/documents/judgment1.jpeg';


import documentData from '../data/english_data/documentData'; 






const EvictionDocuments = () => { 

    return (
      <div className="col-sm-12"class="my-container">
            <Carousel variant="dark" slide={false}>
                        {documentData[1].map((document) => (
                          
      
                        <Carousel.Item>
                          <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                              <Button>{document.stage_title}</Button>
                          </NavLink>
                          
                            <img
                                  className="d-block w-100"
                                  src={document.id}
                                  alt="vacate docs"
                            />

                          </Carousel.Item>

                        ))}

                    {documentData[2].map((document) => (
                          
      
                          <Carousel.Item>
                            <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                                <Button>{document.stage_title}</Button>
                            </NavLink>
                            
                              <img
                                    className="d-block w-100"
                                    src={document.id}
                                    alt="vacate docs"
                              />
  
                            </Carousel.Item>
  
                          ))}
                      {documentData[5].map((document) => (
                          
      
                          <Carousel.Item>

                              <div className="d-grid gap-2">
                                  <Button variant="outline-secondary" size="lg">
                                  <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                                      {document.stage_title}
                                    </NavLink>
                                  </Button>
                              </div>
                            
                            {/* <NavLink className="nav-link" to={`/eviction-map/${document.stage_id}`}>
                                <Button>{document.stage_title}</Button>
                            </NavLink> */}
                            
                              <img
                                    className="d-block w-100"
                                    src={document.id}
                                    alt="vacate docs"
                              />
  
                            </Carousel.Item>
  
                          ))}
  

              
          </Carousel>

      </div>
        
  )
};



export default EvictionDocuments;