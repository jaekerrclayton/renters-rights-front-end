import React from 'react';
import {
    NavLink, 
    Outlet,
} from "react-router-dom"; 
import { getTypes } from './typeData';
import typeDataJson from './evictionTypesData.json';

const Types = () => {
    let types = typeDataJson;
    return (
        <main>
        <h2>Causes for Eviction</h2>
        <div style={{ display: "flex "}}>
        <nav 
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}
            >
                {types
                    .map((type) => ( 
                        <NavLink 
                            style={({ isActive }) => ({
                                display: "block", 
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                                })}
                            to={{pathname:`/eviction-types/${type.typeId}`, 
                                typeProps:{typeId:type.typeId, cause:type.Cause},}}
                            key={type.typeId}
                        >
                            {type.Cause}
                        </NavLink>
                    ))}
        </nav>
        <Outlet />
    </div>
    </main>
    );
}

export default Types;