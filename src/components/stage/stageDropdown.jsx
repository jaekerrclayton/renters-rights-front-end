import React from "react";
import './stage.css';
import {
        NavLink
} from "react-router-dom"; 
import Nav from 'react-bootstrap/Nav';
import stagesData from '../../data/english_data/stagesData.json'; 

// React Router makes it easy to read and manipulate 
// the search params with useSearchParams. It works a 
// lot like React.useState() 
// but stores and sets the state 
// in the URL search params instead of in memory.
// import evictionStage from "./evictionStage";
const getStages = () => {
    return stagesData; 
}


const DropdownStages = () => {
    let stages = getStages();
    //   let [searchParams, setSearchParams] = useSearchParams();
    return (
        // <div>
        //     <div>         
        //         <DropdownButton
        //             id="dropdown-button-light"
        //             variant="secondary"
        //             menuVariant="dark"
        //             title="Stages of Eviction"
        //             className="mt-2"
        //         >
        //         <Dropdown.Item active>
        //         Eviction Stages
        //         </Dropdown.Item>
                    <Nav justify variant="tabs" >
                            {stages
                                .map((stage) => ( 
                            <Nav.Item>
                                <NavLink 
                                    style={({ isActive }) => ({
                                        // display: "flex", 
                                        // margin: "1rem 0",
                                        color: isActive ? "blue" : "",
                                        
                                    })}
                                    to={`/eviction-map/${stage.stage_id}`}
                                    key={stage.stage_id}
                                >
                                    <h6>{stage.stage_id}</h6>
                                    {/* <p>{stage.title}</p> */}
                                    
                                </NavLink>
                            </Nav.Item>
                            
                            ))}
                        
                    </Nav>
        //         <Dropdown.Divider />
        //         <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        //     </DropdownButton>
        //     </div>
        // </div>
    );
}


export default DropdownStages;