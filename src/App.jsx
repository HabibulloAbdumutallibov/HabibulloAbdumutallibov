import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layaut/Layaut";
import Home from "./page/Home";
import Statistika from "./page/Statistika";
import LangStatistik from "./page/LangStatistik";
import Contact from "./page/Contakt";
import Detals from "./page/Detals";
import Setinges from "./page/Setinges";

 

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lang" element={<LangStatistik />} />
          <Route path="contact" element={<Contact />} />
          <Route path="statistika" element={<Statistika />} />
          <Route path="detals" element={<Detals />} />
          <Route path="settings" element={<Setinges />} />
        </Route>
      </Routes>
  );
};


export default App;
