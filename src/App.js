import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Contact,
  Admin, 
  EvicMap,
  Stages,
  Stage,
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
  const [language, setLanguage] = useState({general:translations.en, resources:resourceData, questions:answeredQuestions, documents:documentData, stages:stageData, types:typeDataJson});

  const changeLanguage = (lng) => {
    console.log(lng);
    let newLanguageSetting = {}
    if (String(lng) === 'en'){
      newLanguageSetting = {
        general:translations.en,
        resources:resourceData,
        questions:answeredQuestions,
        documents:documentData,
        stages:stageData,
        types:typeDataJson
      }
    } else {
      newLanguageSetting = {
        general: translations.es,
        resources: esResourceData,
        questions:esAnsweredQuestions,
        documents:esDocumentData,
        stages:esStageData,
        types:esTypeDataJson
      }
    }
    setLanguage(newLanguageSetting);
  };

  return (

    <div className="App"> 
      <Navigation changeLanguage={changeLanguage} translations={language.general}/>  
      <Routes>
        <Route path="/" element={<Home translations={language.general}/>} />
        <Route path="resources" element={<ResourcesAbbr resourceData={language.resources}/>} />
        <Route path="/contact" element={<Contact resourceData={language.resources} answeredQuestions={language.questions}/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/map-home" element={<EvicMap documentData={language.documents}/>} />
        <Route path="/eviction-map" element={<Stages stageData={language.stages}/>}>
          <Route path="" index />
          <Route path=":stage_id" element={<Stage stageData={language.stages} documentData={language.documents} typeData={language.types}/>} /> 
        </Route>
      </Routes>
      <Footer translations={language.general}/>
    </div> 


);

}


export default App; 
