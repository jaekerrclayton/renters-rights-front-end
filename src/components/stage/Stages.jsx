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
        </Container>
                {/* <Outlet /> */}
        </main>
    );
}


export default Stages;





