import React from 'react'
import { HiUserGroup } from 'react-icons/hi'


import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  HeaderDiv,
  HeaderText,
  MarginDiv,
  TeamDiv,
  TeamName,
  Subheader,
  SmallText,
  TeamInfoDiv

} from './Team.elements'

const Team = () => {

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <TeamDiv>
        <HeaderDiv>
          <HiUserGroup size={60} style={{ color: "#256EFF"}}/>
          <HeaderText> Your Team </HeaderText>
        </HeaderDiv>
        
        <TeamInfoDiv>
          <TeamName> Glorious Giraffes</TeamName>
          <Subheader>Members</Subheader>
          <SmallText>Bob, Sally</SmallText>
          <Subheader>Skills</Subheader>
          <SmallText>Neural Networks, SQL, Data Modelling</SmallText>
          <Subheader>Project Description</Subheader>
          <SmallText>Looking to build something involving ML and/or drones.</SmallText>
        </TeamInfoDiv>

      </TeamDiv>




      
    </>
  )
}

export default Team;