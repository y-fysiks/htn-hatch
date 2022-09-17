import './App.css';
const { Client } = import("pg");

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home/Home';
import Matches from './Matches/Matches';
import Profile from './Profile/Profile';
import Team from './Team/Team';
import Explore from './Explore/Explore';
import  { Navbar } from './Navbar/Navbar';

const client = new Client({
    connectionString: "postgresql://carl:8lxP-wTqhsa-d6J4YVxUSA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dhtn-hatch-5024",
    application_name: "$ docs_quickstart_node"
});

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="matches" element={<Matches />} />
        <Route path="profile" element={<Profile />} />
        <Route path="team" element={<Team />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
