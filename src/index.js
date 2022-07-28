import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Resources from './routes/resourcesRoutes/resources';
import reportWebVitals from './reportWebVitals';
import EvictionType from './routes/evictionTypesRoutes/evictionType';
import EvictionTypes from './routes/evictionTypesRoutes/evictionTypes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="eviction-map" element={<EvictionStages />} />
        <Route path="kyr" element={<KnowYourRights />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newsletter" element={<Newsletter/>} />
        <Route path="eviction-type" element={<EvictionTypes />}/>
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
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
