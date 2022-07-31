import React from "react";

import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
          <Container fluid>
                <NavLink className="navbar-brand" to="/">
                  Renters Rights : New Orleans, Louisiana

                </NavLink>
                      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                      <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                      >
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                              </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          {/* MAIN CAT FOR HEAD NAV */}
                                  <Nav className="justify-content-end flex-grow-1 pe-3">
                                  <NavLink className="nav-link" to="/map-home">
                                    Eviction Map
                                  </NavLink>
                                  <NavLink className="nav-link" to="/eviction-types">
                                    Eviction Types
                                  </NavLink>
                                  <NavLink className="nav-link" to="/resources">
                                    Resources
                                  </NavLink>
                                  <NavLink className="nav-link" to="/blog">
                                    News Letter 
                                  </NavLink>

                          {/* DROPDOWN LIST FOR NAV */}
                                <NavDropdown
                                  title="Contact"
                                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                                > 
                                  <NavLink className="nav-link" to="/contact">Contact</NavLink>`

                                        <NavDropdown.Item href="#action4">
                                          Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                          Something else here
                                        </NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
            </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;