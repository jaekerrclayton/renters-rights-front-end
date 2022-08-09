import React from "react";

import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// ariant="dark" bg="dark" expand="lg">
// <Container fluid></Container>
// <nav className="navbar navbar-expand navbar-dark bg-dark">

function OffCanvasNav() {
  return (
    //lang switch hook to 
    <>
      {[false].map((expand) => (
        <Navbar  key={expand} bg="dark" variant='dark' expand={expand} className="mb-5">
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
                                Renters Rights : New Orleans
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
                                  <NavLink className="nav-link" to="/contact">
                                    Contact
                                  </NavLink>


                                  <NavDropdown
                                  title="Eviction"
                                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                                > 
                                  <NavLink className="nav-link" to="/map-home">
                                    Eviction Map
                                  </NavLink>
                                 </NavDropdown>

{/* 
                            <Dropdown.Item href="#/action-1" active>
                                Stages of Eviction
                                </Dropdown.Item>
                                        <nav>
                                            {stages
                                                .map((stage) => ( 
                                                <NavLink 
                                                    style={({ isActive }) => ({
                                                        display: "block", 
                                                        margin: "1rem 0",
                                                        
                                                    })}
                                                    to={`/eviction-map/${stage.stage_id}`}
                                                    key={stage.stage_id}
                                                >
                                                    {stage.title}
                                                    
                                                </NavLink>
                                            ))}
                                        </nav> */}

                          {/* DROPDOWN LIST FOR NAV */}
                                <NavDropdown
                                  title="For Volunteers"
                                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                                > 
                                
                                  {/* <NavLink className="nav-link" to="/contact">Contact</NavLink> */}

                                        <NavDropdown.Item href="#action4">
                                          Volunteer With Us ! 
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                          
                                          <NavLink className="nav-link" to="/admin">Admin</NavLink>
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

export default OffCanvasNav;