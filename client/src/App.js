import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="a" element={<Home />} />
      <Route path="b" element={<Home />} />
      <Route path="c" element={<Home />} />

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
