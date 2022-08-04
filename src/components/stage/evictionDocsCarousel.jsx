import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

// import courtVacate from './evictionNotices/5d-court-vacate.jpg';
import vacate1 from './evictionNotices/vacate1.jpeg';
import vacate2 from './evictionNotices/vacate2.jpeg';
import vacate3 from './evictionNotices/vacate3.jpeg';



class EvictionDocuments extends React.Component {
render() {
return (
      <div style={{ height:'50rem' }}>
        <div >
            <div className="row">
                <div className="col-sm-12">
                  <h3>Eviction Notices: </h3>
                  </div>
                  </div>
                  {/* <div className="row">
                  <div className="col-12"> */}
                  <Carousel showControls>
                        <Carousel.Item>
                              <NavLink className="nav-link" to="/eviction-map/1">
                                  <Button variant="dark">Notice To Vacate</Button>
                              </NavLink>
                              <img
                              className="d-block w-100"
                              src={vacate1}
                              alt="First slide"
                                />
                                <Carousel.Caption> 
                                      
                                    {/* <h3>First slide label</h3> */}
                                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

                                 </Carousel.Caption>
                          </Carousel.Item>


                          <Carousel.Item>

                                  <NavLink className="nav-link" to="/eviction-map/2">
                                      <Button>Court Order</Button>
                                  </NavLink>
                                  <img
                                        className="d-block w-100"
                                        src={vacate2}
                                        alt="Second slide"
                                  />
                                  <Carousel.Caption>
                                      <h3>Second slide label</h3>
                                  </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src="https://picsum.photos/500/300?img=3"
                          alt="Third slide"
                          />
                          <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                          </Carousel.Item>
              </Carousel>
        {/* </div>
        </div> */}
        </div>
      </div>
)
};
}
export default EvictionDocuments;