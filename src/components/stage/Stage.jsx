import React from "react";
import './stage.css';


import {
    Link,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import { getStage } from "./stagesdata";
  
const Stage = () => {

  
  // this establishes what the endpoint will be
  let params = useParams();
  let stage = getStage(parseInt(params.stageId, 10));

  return (
    <main >
      <div class="container" id="stage-title-info">
        
        <h3>{stage.title}</h3>
        <h7>{stage.sub_title}</h7>
      </div>
      <div>{stage.info}</div>
      <section className="doc-information">
      <div class="document-translate" id={stage.photo}> 
          <p>About notice : {stage.about_notice}</p>
        </div>
        <div class="document-photo"> 
          <div class={stage.photo}>&nbsp;</div>
          <p>THIS IS WHER U SEE THE PIC OF A DOC/ SOMETHING</p>
        </div>
      </section>
      <p>Next steps: {stage.next_steps}</p>

    </main>
  );
}


export default Stage;