import React, { useState, useEffect } from "react";
import { axios, userID } from '../App';

import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  MainDiv,
  MarginDiv,
} from './Matches.elements'

const Matches = () => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    biography: "",
    skills: [],
    team: 0,
    linkedin: "",
    username: "",
    password: ""
  });
  const [team, setTeam] = useState({
    id: 0,
    name: "",
    description: "",
    seeking: [],
    accepted: [],
    declined: []
  });

  useEffect(() => {
    axios.get("http://localhost:3001/user/" + userID).then(res => setUser(res.data)).catch(err => console.log(err));
  });

  useEffect(() => {
    axios.get("http://localhost:3001/team/" + user.team).then(res => setTeam(res.data)).catch(err => console.log(err));
  });
  const [matches, setMatches] = useState([]);

  if (team.accepted == null) {

  } else {
    for (let i = 0; i < team.accepted.length; i++) {
      let x;
      axios.get("http://localhost:3001/team/" + team.accepted[i]).then(res => x = res.data).catch(err => console.log(err));
      if (x.accepted.includes(team.id)) {
        //display match
        setMatches(matches.push(x));
      }
    }
  }
  

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <MainDiv> Your Matches
        
      </MainDiv>
    </>
  )
}

export default Matches;