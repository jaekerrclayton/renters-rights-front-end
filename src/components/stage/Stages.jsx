import React from "react";
import './stages.css';

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
             <div id="navbar">
             <nav>
                    {stages
                        .map((stage) => ( 
                        <NavLink 
                            to={`/eviction-map/${stage.stage_id}`}
                            key={stage.stage_id}
                        >
                            {stage.title}                            
                        </NavLink>
                    ))}
                </nav>
            </div> 
            <Row><Outlet /></Row>
        </div>
    );
}


export default Stages;





