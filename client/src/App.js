import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Home/Home';
import Matches from './Matches/Matches';
import Profile from './Profile/Profile';
import Team from './Team/Team';
import Explore from './Explore/Explore';
import  { Navbar, Footer } from './Navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="matches" element={<Matches />} />
      <Route path="profile" element={<Profile />} />
      <Route path="team" element={<Team />} />
      <Route path="explore" element={<Explore />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
