import React from 'react'
import { HiUserGroup } from 'react-icons/hi'


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

  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <HeaderDiv>
        <HiUserGroup size={70}/>
        <HeaderText> Your Team </HeaderText>
      </HeaderDiv>
      
    </>
  )
}

export default Team;