import React, {Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom";
import "./index.css";
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Resource,
  Resources,
  Contact,
  Admin, 
  EvicMap,
  Stages,
  Stage,
  Type,
  Types,
} from "./components";
import ResourcesAbbr from './components/resources/ResourceAbbr';
import resourceData from './data/english_data/resourceData.json'; 
import esResourceData from './data/spanish_data/resourceData.json';
import stageData from './data/english_data/stagesData.json'; 
import esStageData from './data/spanish_data/stagesData.json';
import documentData from './data/english_data/documentData'; 
import esDocumentData from './data/spanish_data/documentData';
import answeredQuestions from "./data/english_data/answeredQuestions.json";
import esAnsweredQuestions from "./data/spanish_data/answeredQuestions.json"
import translations from "./data/translations.json";
import typeDataJson from './data/english_data/evictionTypesData.json';
import esTypeDataJson from './data/spanish_data/evictionTypesData.json';

const App = () => {
  const [language, setLanguage] = useState();

  const changeLanguage = (lng) => {
    console.log(lng);
    setLanguage(lng);
  };

  return (

    <div className="App"> 
            {/* <Router> */}
              <Navigation changeLanguage={changeLanguage} translations={language==='en'? translations.en : translations.es}/>  
                          <Routes>
                            <Route path="/" element={<Home translations={language==='en'? translations.en : translations.es}/>} />
                            <Route path="resources" element={<ResourcesAbbr resourceData={language==='en'? resourceData : esResourceData}/>}>
                                  {/* <Route
                                    index
                                    element={
                                      <main style={{ padding: "1rem" }}>
                                      </main>
                                    }
                                  /> */}
                                  {/* <Route path=":resourceId" element={<Resource />} /> */}
                                </Route>
                            <Route path="/contact" element={<Contact resourceData={language==='en'? resourceData : esResourceData} answeredQuestions={language==='en'? answeredQuestions : esAnsweredQuestions}/>} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/map-home" element={<EvicMap documentData={language==='en' ? documentData : esDocumentData}/>}>
                              {/* <Route path="" element={<Stages stageData={language==='en' ? stageData : esStageData} />} /> */}
                            </Route>
                            <Route path="/eviction-map" element={<Stages stageData={language==='en' ? stageData : esStageData}/>}>

                                  <Route path="" index />
                                  <Route path=":stage_id" element={<Stage stageData={language==='en' ? stageData : esStageData} documentData={language==='en' ? documentData : esDocumentData} typeData={language==='en'? typeDataJson : esTypeDataJson}/>} /> 
                            </Route>
                            {/* <Route path="eviction-types" element={<Types />}>
                                <Route
                                    index
                                    element={
                                          <main style={{ padding: "1rem" }}>
                                            <h2>Select the Cause Given By Your Landlord</h2>
                                            <h3>Need help finding the cause? Look at the examples below.</h3>
                                            <p>**picture examples will go here**</p>
                                          </main>
                                        }
                                />
                                  <Route path=":typeId" element={<Type />} />
                                </Route> */}
                          </Routes>
              <Footer translations={language==='en'? translations.en : translations.es}/>
            {/* </Router>   */}

          </div> 


);

}


export default App; 
