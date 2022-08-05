import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      {/* ariant="dark" bg="dark" expand="lg"> */}
      <Container fluid></Container>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Renters Rights : New Orleans, Louisiana

          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resources">
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/map-home">
                  Eviction Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/eviction-types">
                  Eviction Types
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  News Letter 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
