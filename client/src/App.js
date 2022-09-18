import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Matches from './Matches/Matches';
import Profile from './Profile/Profile';
import Team from './Team/Team';
import Explore from './Explore/Explore';

export const axios = require('axios');
export const uuid = 1;
export let user;
export let team;

function App() {
  //get the user's profile
  axios.get('/user', {
    params: {
      ID: uuid
    }
  })
  .then(function (response) {
    console.log(response);
    user = response;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  user = {name: 'John Doe', teamID: '1', skills: ['Python', 'Java', 'C++'], bio: 'I am a software engineer at Google', linkedIn: 'a'};

  //get the user's team
  axios.get('/team', {
    params: {
      ID: user.teamID
    }
  })
  .then(function (response) {
    console.log(response);
    team = response;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  team = {name: 'Team X'};

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
