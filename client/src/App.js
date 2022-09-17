import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Home/Home';
import Matches from './Matches/Matches';
import  { Navbar, Footer } from './Navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="a" element={<Matches />} />
      <Route path="b" element={<Home />} />
      <Route path="c" element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
