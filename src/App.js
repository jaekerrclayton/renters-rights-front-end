import React from "react";
import {Outlet, Link} from "react-router-dom";
import './App.css';

function App() {
  return (

      <div>
        <h1>Spanish Hotline Renters' Rights - New Orleans, LA</h1>
        <h4>LEGAL DISCLAIMER</h4>
        <nav 
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
          >
            <Link to="/eviction-map">Evicition Map</Link> | {" "}
            <Link to="/kyr">Know Your Rights</Link> | {" "}
            <Link to="/resources">Resources</Link> | {" "}
            <Link to="/contact">Contact Us</Link> | {" "}
            <Link to="/newsletter">Newsletter</Link> | {" "}
            <Link to="/volunteer">Volunteer</Link> | {" "}
          
          </nav>
          <Outlet />
      </div>
    );
  
}

export default App;