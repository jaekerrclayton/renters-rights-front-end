import React , { useState }  from "react";
import {
        NavLink, 
        Outlet,
        useSearchParams,
} from "react-router-dom"; 
import Nav from 'react-bootstrap/Nav';




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





