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
import { getResources } from "./resourcedata";

const Resources = () => {
let resources = getResources();
let [searchParams, setSearchParams] = useSearchParams();
return (
  <main>
  <h2>Resources</h2>
  <div style={{ display: "flex "}}>
    <nav 
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
      >
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
            let name = resource.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((resource) => ( 
            <NavLink 
            // function
            // <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
              style={({ isActive }) => ({
                  display: "block", 
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                })}
                to={`/resources/${resource.number}`}
                key={resource.number}
            >
                {resource.name}
            </NavLink>
        ))}
    </nav>
    <Outlet />
  </div>
</main>
);
}


export default Resources;