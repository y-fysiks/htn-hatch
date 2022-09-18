import React, { useState, useEffect } from "react";
import { axios, userID } from '../App';

import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  SampleDiv,
  MarginDiv,
  Header,
  Body,
} from './Profile.elements'

const Profile = () => {
  
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
    axios.get("http://localhost:3001/user/" + userID).then(res => {
      setUser(res.data);
      axios.get("http://localhost:3001/team/" + user.team).then(res => console.log(user.team)).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }, []);


  const skillsF = [];
  for (let i = 0; i < user.skills.length; i++) {
    skillsF.push(user.skills[i]);
    if (i < user.skills.length - 1){
      skillsF.push(', ');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <SampleDiv> { user.name }
        <Body> { team.name } </Body>
        <Header> Personal Bio </Header>
        <Body> { user.biography } </Body>
        <Header> Skills </Header>
        <Body> {skillsF} </Body>
        <Header> Contact Information </Header>
        <Body> { user.linkedIn } </Body>
      </SampleDiv>
    </>
  )
}

export default Profile