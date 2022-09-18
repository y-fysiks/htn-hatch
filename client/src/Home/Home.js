import React from 'react'

//Styled Components
import {
  MarginDiv,
  MainText,
  GetStartedLink,
  GetStartedButton,
  HomeContainer
} from './Home.elements'

import  { HomeNavBar } from '../HomeNavBar/HomeNavBar'


const Home = () => {
  return (
    <>
    <HomeContainer>
      <HomeNavBar></HomeNavBar>
      <MarginDiv></MarginDiv>

      <MainText>Get Matched with your dream Hackathon Team</MainText>
        <GetStartedLink to='/profile'>
        <GetStartedButton>
          Get Started
        </GetStartedButton>
      </GetStartedLink>
    </HomeContainer>


      
    </>
  )
}

export default Home