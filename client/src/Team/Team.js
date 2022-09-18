import React from 'react'
import { HiUserGroup } from 'react-icons/hi'


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
      <MarginDiv></MarginDiv>
      <HeaderDiv>
        <HiUserGroup size={70}/>
        <HeaderText> Your Team </HeaderText>
      </HeaderDiv>
      
    </>
  )
}

export default Team;