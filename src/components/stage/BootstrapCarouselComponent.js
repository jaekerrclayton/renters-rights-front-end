import React from "react";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";



class EvictionDocuments extends React.Component {
render() {
return (
      <div>
        <div className='container-fluid' >
            <div className="row">
                <div className="col-sm-12">
                  <h3>Eviction Notices: </h3>
                  </div>
                  </div>
                  {/* <div className="row">
                  <div className="col-12"> */}
                  <Carousel>
                        <Carousel.Item>
                              <img
                              className="d-block w-100"
                              src="https://picsum.photos/500/300?img=1"
                              alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <NavLink className="nav-link" to="/eviction-map/1">
                                            <Button variant="primary">Notice To Vacate</Button>
                                        </NavLink>
                                </Carousel.Caption>
                          </Carousel.Item>
                                            <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="https://picsum.photos/500/300?img=2"
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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