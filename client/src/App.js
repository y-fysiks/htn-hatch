import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Matches from './Matches/Matches';
import Profile from './Profile/Profile';
import Team from './Team/Team';
import Explore from './Explore/Explore';

export const axios = require('axios');
export let userID = 1;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="matches" element={<Matches />} />
        <Route path="team" element={<Team />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
