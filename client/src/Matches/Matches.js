import React, { useState, useEffect } from "react";
import { axios, userID } from '../App';

import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  MainDiv,
  MarginDiv,
  SecondaryDiv,
  SecondaryDiv2,
  SecondaryDiv3,
  Text,
  Body,
  Header,
  Link
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
  
  matches.push({id: 2, name: "The Screaming Firehawks", description: "A young and energetic team looking to make a name for themselves in the world of software development.", seeking: ["Frontend Developer", "Fullstack Developer", "UI/UX Designer"], accepted: [2], declined: []});
  matches.push({id: 3, name: "The Talons", description: "A young and energetic team looking to make a name for themselves in the world of software development.", seeking: ["Fullstack Developer", "Backend Developer"], accepted: [1], declined: [3]});
  matches.push({id: 4, name: "Xerxes", description: "A young and energetic team looking to make a name for themselves in the world of software development.", seeking: ["Fullstack Developer", "AR/VR Developer"], accepted: [2], declined: []});

  const seekF0 = [];
  for (let i = 0; i < matches[0].seeking.length; i++) {
    seekF0.push(matches[0].seeking[i]);
    if (i < matches[0].seeking.length - 1){
      seekF0.push(', ');
    }
  }

  const seekF1 = [];
  for (let i = 0; i < matches[1].seeking.length; i++) {
    seekF1.push(matches[1].seeking[i]);
    if (i < matches[1].seeking.length - 1){
      seekF1.push(', ');
    }
  }

  const seekF2 = [];
  for (let i = 0; i < matches[2].seeking.length; i++) {
    seekF2.push(matches[2].seeking[i]);
    if (i < matches[2].seeking.length - 1){
      seekF2.push(', ');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <MainDiv>
        <Text>Your Matches</Text>
        <SecondaryDiv2> {matches[0].name}
          <Body> 2 Members </Body>
          <Header> Description </Header>
          <Body> {matches[0].description} </Body>
          <Header> Seeking Skills </Header>
          <Body> {seekF0} </Body>
          <Header> Contact </Header>
          <Link href="https://www.linkedin.com/placeholder_account"> LinkedIn </Link>
        </SecondaryDiv2>
        <SecondaryDiv3> {matches[1].name}
        <Body> 1 Member </Body>
          <Header> Description </Header>
          <Body> {matches[1].description} </Body>
          <Header> Seeking Skills </Header>
          <Body> {seekF1} </Body>
          <Header> Contact </Header>
          <Link href="https://www.linkedin.com/placeholder_account"> LinkedIn </Link>
        </SecondaryDiv3>
        <SecondaryDiv> {matches[2].name}
        <Body> 3 Members </Body>
          <Header> Description </Header>
          <Body> {matches[2].description} </Body>
          <Header> Seeking Skills </Header>
          <Body> {seekF2} </Body>
          <Header> Contact </Header>
          <Link href="https://www.linkedin.com/placeholder_account"> LinkedIn </Link>
        </SecondaryDiv>
      </MainDiv>
    </>
  )
}

export default Matches;