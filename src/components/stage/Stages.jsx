import React , { useState }  from "react";
// import './stages.css';

import {
        NavLink, 
        Outlet,
        useSearchParams,
} from "react-router-dom"; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import stageData from '../data/english_data/stagesData.json'; 
import Stage from './Stage'; 




const Stages = ({stageData}) => {
    console.log(stageData);

    const getStages = () => {
        return stageData; 
    }
    
    let stages = getStages();
    console.log(stages); 
    
    
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <main>
            <div>
                <Nav justify variant="tabs" >
                            {stages
                                .map((stage) => ( 
                            <Nav.Item>
                                <NavLink 
                                    // style={({ isActive }) => ({
                                    //     color: isActive ? "grey" : "",
                                        
                                    // })}
                                    to={`/eviction-map/${stage.stage_id}`}
                                    key={stage.stage_id}
                                >
                                    <button className='number-button'>{stage.stage_id}</button>                                 
                                </NavLink>
                            </Nav.Item>
                            ))}
                    </Nav>
            <Outlet />
        </div>
                {/* <Outlet /> */}
        </main>
    );
}


export default Stages;





