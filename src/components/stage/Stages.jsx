import React from "react";
import {
        NavLink, 
        Outlet,
} from "react-router-dom"; 
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'




const Stages = ({stageData}) => {
    console.log(stageData);

    const getStages = () => {
        return stageData; 
    }
    
    let stages = getStages();
    console.log(stages); 

    return (
        <main>
            <Container flex className="stages-all-map" >
                <Nav justify flex className="max-width">
                            {stages
                                .map((stage) => ( 
                            <Nav.Item>
                                <NavLink className='number-button'
                                    style={({ isActive }) => ({
                                        color: isActive ? "#3784b4" : "",
                                        
                                    })}
                                    to={`/eviction-map/${stage.stage_id}`}
                                    key={stage.stage_id}
                                >
                                    {stage.stage_id}                                 
                                </NavLink>
                            </Nav.Item>
                            ))}
                    </Nav>
            <Outlet />
        </Container>
                {/* <Outlet /> */}
        </main>
    );
}


export default Stages;





