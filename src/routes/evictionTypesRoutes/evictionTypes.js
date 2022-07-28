import React from 'react';
import {
    NavLink, 
    Outlet,
    useSearchParams,
} from "react-router-dom"; 
import { getTypes } from '../../EvictionTypeData';
// React Router makes it easy to read and manipulate 
// the search params with useSearchParams. It works a 
// lot like React.useState() 
// but stores and sets the state 
// in the URL search params instead of in memory.
// import Invoice from "./invoice";

const Types = () => {
let evictionTypes = getTypes();
let [searchParams, setSearchParams] = useSearchParams();
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
        {evictionTypes
            .map((evictionType) => ( 
            <NavLink 
            // function
            // <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
                style={({ isActive }) => ({
                    display: "block", 
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                })}
                to={`/eviction-types/${evictionType.cause}`}
                key={evictionType.cause}
            >
                {evictionType.cause}
            </NavLink>
        ))}
    </nav>
    <Outlet />
</div>
</main>
);
}


export default Types;
// import React from 'react';
// import EvictionType from './evictionType';
// import evictionTypesJson from './evictionTypesData.json';

// const EvictionTypes = (types) => {
//     const getEvictionTypesJSX = (evictTypes) => {
//         return evictTypes.map((evictType) => {
//             return (
//                 <EvictionType
//                     cause={evictType.cause}
//                     description={evictType.description}
//                     landlordProof={evictType["Landlord Needs"]}
//                     renterRights={evictType["Renters Rights"]}
//                 />
//             )
//         })
//     }
//     return (
//         <ul>
//             {getEvictionTypeListJSX(types)}
//         </ul>
//     );
// };

// export default EvictionTypes;