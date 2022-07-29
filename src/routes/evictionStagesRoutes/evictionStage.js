import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
import React from 'react';
import { getStage } from "./evictionstagesdata";
  
export default function EvictionStage() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let stage = getStage(parseInt(params.stageId, 10));
  
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{stage.title}</h2>
        <h4>{stage.sub_title}</h4>
        <div>
          <p>
            {stage.info}
          </p>
        </div>
        <div>
          <p>THIS IS WHER U SEE THE PIC OF A DOC/ SOMETHING</p>
          <p>{stage.photo}</p>
          <p>About notice : {stage.about_notice}</p>
        </div>
        <p>Next Steps: {stage.next_steps}</p>
      </main>
    );
  }