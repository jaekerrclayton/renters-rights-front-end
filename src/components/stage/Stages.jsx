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
            <Container flex>
                <Nav justify flex>
                            {stages
                                .map((stage) => ( 
                            <Nav.Item>
                                <NavLink className='number-button'
                                    style={({ isActive }) => ({
                                        color: isActive ? "#F8D7C1 " : "",
                                        
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





