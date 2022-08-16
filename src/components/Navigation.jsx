import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasNav({changeLanguage, translations}) {
  
  const changeLanguageCallback = (e) => {
    e.preventDefault();
    console.log(e.target);
    let value = 'es';
    if (e.target.value === 'English') {
      value = 'en'
    }
    changeLanguage(value);
  };
  
  return (    
    <>
      {[false].map((expand) => (
        <Navbar id="nav-nav" key={expand} expand={expand} className="mb-5" fluid>
          {/* <Container> */}
              <NavLink id="nav-header"className="navbar-brand" to="/">
                {translations.main}
              </NavLink>
              <button className='button' style={{'text-align':'right'}} value={translations.lngButton} onClick={changeLanguageCallback}>{translations.lngButton}</button>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    {translations.main}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link" to="/map-home">
                      {translations.map}
                    </NavLink>
                    <NavLink className="nav-link" to="/resources">
                      {translations.resources}
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                      {translations.questions}
                    </NavLink>
                    <NavDropdown
                      title={translations.volunteers}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    > 
                      <NavDropdown.Item href="#action4">
                        <NavLink className="nav-link" to="/volunteers">
                          {translations.apply}
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        <NavLink className="nav-link" to="/login">
                          {translations.admin}
                        </NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            {/* </Container> */}
        </Navbar>
      ))}
    </>
  );
}

export default OffCanvasNav;