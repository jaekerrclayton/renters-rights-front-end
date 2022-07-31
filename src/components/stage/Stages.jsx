import React from "react";
import './stage.css';
import {
        NavLink, 
        Outlet,
} from "react-router-dom"; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// React Router makes it easy to read and manipulate 
// the search params with useSearchParams. It works a 
// lot like React.useState() 
// but stores and sets the state 
// in the URL search params instead of in memory.
// import evictionStage from "./evictionStage";

import { getStages } from "./stagesdata";

const Stages = () => {
    let stages = getStages();
    //   let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
                     
            <Row></Row>
            <Row>
            <div className="main-notices">
                <nav>
                    {stages
                        .map((stage) => ( 
                        <NavLink 
                        // function
                        // <NavLink classtitle={({ isActive }) => isActive ? "red" : "blue"} />
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
                </nav>
            </div>
            </Row>
            <Row><Outlet /></Row>

            <div>         
                <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Dropdown button"
                className="mt-2"
            >
                <Dropdown.Item href="#/action-1" active>
                Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </DropdownButton></div>
        </div>
    );
}


export default Stages;