import React, {useState, useEffect} from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { axios, userID } from '../App';

import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  HeaderDiv,
  HeaderText,
  MarginDiv,
  Header,
  Body
} from './Team.elements'

const Team = () => {
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
    members: [],
    seeking: [],
    accepted: [],
    declined: []
  });
  const [names, setNames] = useState([]);
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/user/" + userID).then(res => setUser(res.data)).catch(err => console.log(err));
  }, []);

  function appendName(name) {
    setNames(names + [name]);
  }
  function appendSkill(skill) {
    if(!skills.includes(skill)) setSkills(skills + [skill]);
  }

  useEffect(() => {
    if(user.id > 0) {
      axios.get("http://localhost:3001/team/" + user.team).then(res => {
        setTeam(res.data);
        for(let i = 0; i < team.members.length; i++) {
          axios.get("http://localhost:3001/user/" + team.members[i]).then(res => {
            appendName(res.data.name);
            for(let j = 0; j < res.data.skills.length; j++) appendSkill(res.data.skills[j]);
          });
        }
      }).catch(err => console.log(err));
    }
  });

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <HeaderDiv>
        <HiUserGroup size={70}/>
        <HeaderText> Your Team </HeaderText>
        <Header> {team.name} </Header>
        <Header> Members </Header>
        <Body> {names} </Body>
        <Header> Skillset </Header>
        <Body> {skills} </Body>
        <Header> Skills sought </Header>
        <Body> {team.seeking} </Body>
        <Header> Description </Header>
        <Body> {team.description} </Body>
        
      </HeaderDiv>
      
    </>
  )
}

export default Team;