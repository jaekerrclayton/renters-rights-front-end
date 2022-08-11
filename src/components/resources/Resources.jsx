import React from 'react';
import {
  NavLink, 
  Outlet,
  useSearchParams,
} from "react-router-dom"; 
// React Router makes it easy to read and manipulate 
// the search params with useSearchParams. It works a 
// lot like React.useState() 
// but stores and sets the state 
// in the URL search params instead of in memory.
// import Invoice from "./invoice";
// import { getResources } from "./resourcedata";
import resourceData from '../data/english_data/resourceData.json'; 



const Resources = () => {
  const getResources = () => {
    return resourceData; 
  }
let resources = getResources(); 
console.log(resources); 

let [searchParams, setSearchParams] = useSearchParams();
return (
  <main>
  <h2>Resources</h2>
  <div>
    <nav>
        <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
        {resources
          .filter((resource) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = resource.type.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((resource) => ( 
            <NavLink 
            // function
            // <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
                to={`/resources/${resource.resourceId}`}
                key={resource.resourceId}
            >
                <button>{resource.type}</button>
            </NavLink>
        ))}
    </nav>
    <Outlet />
  </div>
</main>
);
}


export default Resources;