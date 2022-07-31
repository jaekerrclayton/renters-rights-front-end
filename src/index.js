import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Resource,
  Resources,
  Contact,
  Blog,
  Posts,
  Post,
  EvicMap,
  Stages,
  Stage,
  Type,
  Types,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="resources" element={<Resources />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                </main>
              }
            />
            <Route path=":resourceId" element={<Resource />} />
          </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/map-home" element={<EvicMap />}>
        <Route path="" element={<Stages />} />
      </Route>
      <Route path="/eviction-map" element={<Stages />}>
            {/* <Route path="" element={<EvicMap/>} /> */}
            <Route path=""
              index
              // element={
              //   <main>
              //     <p>S!!!!!</p>
              //   </main>
              // }
            />
            <Route path=":stageId" element={<Stage />} /> 
      </Route>
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
      <Route path="eviction-types" element={<Types />}>
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
          </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
