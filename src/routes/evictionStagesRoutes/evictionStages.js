import React from "react";
import './evictionStages.css'
import {
    NavLink, 
    Outlet,
  } from "react-router-dom"; 
  // React Router makes it easy to read and manipulate 
  // the search params with useSearchParams. It works a 
  // lot like React.useState() 
  // but stores and sets the state 
  // in the URL search params instead of in memory.
  // import evictionStage from "./evictionStage";
  
import { getEvictionStages } from "./evictionstagesdata";
  
const EvictionStages = () => {
  let stages = getEvictionStages();
//   let [searchParams, setSearchParams] = useSearchParams();
  return (
    <main>
        <div className="eviction-stages">
            <h2>Eviction Stages :</h2>
            <h4>select photo most similar to your notice</h4>
            {/* <div>
                <h3>What does Your Eviction Notice Look Like ? </h3>
                {stages
                    .map((stage) => ( 
                    <NavLink 
                    // function
                    // <NavLink classtitle={({ isActive }) => isActive ? "red" : "blue"} />
                        style={({ isActive }) => ({
                            display: "block", 
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        })}
                        to={`/eviction-map/${stage.stage_id}`}
                        key={stage.stage_id}
                    >
                        <div id="stage-photo">
                        {stage.photo};
                        </div>
                        
                        
                    </NavLink>
                ))}
            </div> */}
        </div>
        <div className="main-notices">
            <nav className="notice-thumbn"
                style={{
                borderRight: "solid 1px",
                padding: "1rem",
                }}
                >
                {/* <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                        setSearchParams({ filter });
                        } else {
                        setSearchParams({});
                        }
                    }}
                    /> */}
                {stages
                    .map((stage) => ( 
                    <NavLink 
                    // function
                    // <NavLink classtitle={({ isActive }) => isActive ? "red" : "blue"} />
                        style={({ isActive }) => ({
                            display: "block", 
                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        })}
                        to={`/eviction-map/${stage.stage_id}`}
                        key={stage.stage_id}
                    >
                        {stage.title}
                        
                    </NavLink>
                ))}
            </nav>
        <Outlet />
        </div>
  </main>
  );
  }
  
  
export default EvictionStages;