import React from 'react'
import { user } from '../App';
import { team } from '../App';

//Styled Components
import {
  SampleDiv,
  MarginDiv,
  Header,
  Body,
} from './Profile.elements'

const Profile = () => {
  const skillsF = [];
  for (let i = 0; i < user.skills.length; i++) {
    skillsF.push(user.skills[i]);
    if (i < user.skills.length - 1){
      skillsF.push(', ');
    }
  }

  return (
    <>
      <MarginDiv></MarginDiv>
      <SampleDiv> { user.name }
        <Body> { team.name } </Body>
        <Header> Personal Bio </Header>
        <Body> { user.bio } </Body>
        <Header> Skills </Header>
        <Body> {skillsF} </Body>
        <Header> Contact Information </Header>
        <Body> { user.linkedIn } </Body>
      </SampleDiv>
    </>
  )
}

export default Profile