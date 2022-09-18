import React from 'react'

import  { Navbar } from '../Navbar/Navbar'

import { ImCross, ImCheckmark } from 'react-icons/im'


//Styled Components
import {
  Card,
  MarginDiv,
  HeaderText,
  TeamName,
  SmallText,
  RejectButton,
  AcceptButton,
  Buttons,
  InfoContainer,
  Text
} from './Explore.elements'

const Explore = () => {
  return (
    <>
      <Navbar></Navbar>
      <MarginDiv></MarginDiv>
      <Text>Explore</Text>

      <Card>
        <InfoContainer>
          <TeamName>Awesome Anteaters</TeamName>
          <SmallText>Bob, Sally</SmallText>

          <HeaderText>Description</HeaderText>
          <SmallText>We are a team who specialize in full-stack web development.</SmallText>
          <HeaderText>Skills</HeaderText>
          <SmallText>HTML, CSS, JS, React, CockroachDB, MongoDB</SmallText>
          <HeaderText>Skills Needed</HeaderText>
          <SmallText>UI/UX Design</SmallText>
        </InfoContainer>


        <Buttons>
          <RejectButton><ImCross size={25} style={{color: "white"}}/></RejectButton>
          <AcceptButton><ImCheckmark size={25} style={{color: "white"}}/></AcceptButton>
        </Buttons>
      </Card>
    </>
  )
}

export default Explore;