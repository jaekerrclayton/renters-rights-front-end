import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

// import courtVacate from './evictionNotices/5d-court-vacate.jpg';
import vacate1 from '../data/documents/vacate1.jpeg';
import vacate2 from '../data/documents/vacate2.jpeg';
import vacate3 from '../data/documents/vacate3.jpeg';
import order1 from '../data/documents/order1.jpeg';
import order2 from '../data/documents/order2.jpeg';
import judgment1 from '../data/documents/judgment1.jpeg';
import judgment2 from '../data/documents/judgment1.jpeg';



class EvictionDocuments extends React.Component {
render() {
return (
      <div>
        <div >
            <div className="row">
                <div className="col-sm-12">
                  <h3>Eviction Notices: </h3>
                  </div>
                  </div>
                  {/* <div className="row">
                  <div className="col-12"> */}
                  <Carousel variant="dark" slide={false}>
                        <Carousel.Item>
                        <NavLink className="nav-link" to="/eviction-map/1">
                            <Button>Notice To Vacate</Button>
                        </NavLink>
                              <img
                              className="d-block w-100"
                              src={vacate1}
                              alt="First slide"
                                />
                                <Carousel.Caption> 
                                      

                                 </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                                <NavLink className="nav-link" to="/eviction-map/1">
                                    <Button>Notice To Vacate</Button>
                                </NavLink>
                              <img
                              className="d-block w-100"
                              src={vacate2}
                              alt="second slide"
                                />
                                <Carousel.Caption> 
                                </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                                <NavLink className="nav-link" to="/eviction-map/1">
                                    <Button>Notice To Vacate</Button>
                                </NavLink>
                              <img
                              className="d-block w-100"
                              src={vacate3}
                              alt="third"
                                />
                                <Carousel.Caption> 
                                </Carousel.Caption>
                          </Carousel.Item>


                          <Carousel.Item>
                                  <NavLink className="nav-link" to="/eviction-map/2">
                                      <Button>Court Order</Button>
                                  </NavLink>
                                  <img
                                        className="d-block w-100"
                                        src={order1}
                                        alt="Second slide"
                                  />
                                  <Carousel.Caption>
                                      <h3>Second slide label</h3>
                                  </Carousel.Caption>
                          </Carousel.Item>


                          <Carousel.Item>
                          <NavLink className="nav-link" to="/eviction-map/2">
                                      <Button>Court Order</Button>
                                  </NavLink>
                                  <img
                                        className="d-block w-100"
                                        src={order2}
                                        alt="Second slide"
                                  />
                                  <Carousel.Caption>
                                      <h3>Second slide label</h3>
                                  </Carousel.Caption>
                          </Carousel.Item>
                                            {/* <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="https://picsum.photos/500/300?img=3"
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                            </Carousel.Caption>
                                            </Carousel.Item> */}
                  </Carousel>

        </div>
      </div>
    )
  };
}


export default EvictionDocuments;