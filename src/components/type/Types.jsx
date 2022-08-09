import React from 'react';
import {
    NavLink, 
    Outlet,
} from "react-router-dom";
import typeDataJson from '../data/english_data/evictionTypesData.json';

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
                            to={`/eviction-types/${type.typeId}`}
                            key={type.typeId}
                        >
                            {type.cause}
                        </NavLink>
                    ))}
        </nav>
        <Outlet />
    </div>
    </main>
    );
}

export default Types;