import React,  {useState} from "react";
import './stage.css';
// import './stageCarousel'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import DropdownStages from "./stageDropdown";
import Types from '../type/Types'; 
import TypesAbbr from '../type/TypesAbbr';
import DocumentCarousel from './documentCarousel'; 
import Stack from 'react-bootstrap/Stack';



import {
    Link,
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

import stageData from '../data/english_data/stagesData.json'; 

  
const getStage = (stage_id) => {
  return stageData.find(
    (stage) => stage.stage_id === stage_id
  ); 
}



// const stage_docs = stage.documents.map(doc){
//   if (doc == str(doc))
// }

// import { getStage } from "./stagesdata";
// import OrderFirst from "./evictionNotices/orderFirst";
  
const Stage = () => {


  // export function getStage(stage_id) {
  //   return stages.find(
  //     (stage) => stage.stage_id === stage_id
  //   );
  // };
  
  let params = useParams();
  // let photo =
  let stage = getStage(parseInt(params.stage_id, 10));
  console.log(stage); 
  console.log(stage.title);

  console.log(stage.documents);

  // for (document of doc_list){
  //   if str(document) == 

  // }

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
 

  return (
    <main style={{ padding: "1rem" }}>
      {/* <div><DropdownStages/></div> */}
      <h4>{stage.title}</h4>
      <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{stage.sub_title}</Accordion.Header>
              <Accordion.Body>
              <p>{stage.info}</p>
              <p>{stage.about_notice}</p>
              <p>{stage.additional_resources}</p>
              {/* <p>{stage.photo}</p> */}
              </Accordion.Body>
          </Accordion.Item>
          </Accordion>
          <Accordion>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Causes for Eviction </Accordion.Header>
                            <Accordion.Body>
                            <div><TypesAbbr /></div>
                            </Accordion.Body>
              </Accordion.Item>

      </Accordion>

      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h4>{stage.title}</h4></Accordion.Header>
          <Accordion.Body>
                <div>
                <DocumentCarousel stage_id={stage.stage_id}  />


                  </div>
                  
                  

                                            

          </Accordion.Body>
      </Accordion.Item>

</Accordion>
    


    


      {/* <div><VacateCarousel/></div>
      <div><JudgmentCarousel/></div>
      <div><OrderCarousel/></div> */}


    <p>{stage.sub_title}</p>

    
  </main>


   
  );
}


export default Stage;
