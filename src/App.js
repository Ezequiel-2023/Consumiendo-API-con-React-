import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"; 
import ListaDeAves from "./components/ListaDeAves/ListaDeAves";
import "./App.scss";
import SonidoDeAves from "./components/SonidoDeAves/SonidoDeAves";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListaDeAves" element={<ListaDeAves />} />
        <Route path="/details/:id" element={<SonidoDeAves />} />
      </Routes>
    </Router>
  );
}

export default App;
