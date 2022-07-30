import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Resources from './routes/ResourceRoutes/resources';
import Resource from './routes/ResourceRoutes/resource';
import reportWebVitals from './reportWebVitals';
import EvictionType from './routes/evictionTypesRoutes/evictionType';
import EvictionTypes from './routes/evictionTypesRoutes/evictionTypes';
import EvictionStage from './routes/evictionStagesRoutes/evictionStage';
import EvictionStages from './routes/evictionStagesRoutes/evictionStages';

const root = ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="eviction-map" element={<EvictionStages />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an resource</p>
                </main>
              }
            />
            <Route path=":stageId" element={<EvictionStage />} /> 
          </Route>
          
          {/* <Route path="kyr" element={<KnowYourRights />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="newsletter" element={<Newsletter/>} /> */}
          <Route path="eviction-types" element={<EvictionTypes />}/>
          <Route path="resources" element={<Resources />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an resource</p>
                </main>
              }
            />
            <Route path=":resourceId" element={<Resource />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
