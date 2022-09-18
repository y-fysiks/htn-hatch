import React from 'react'
import  { Navbar } from '../Navbar/Navbar'

//Styled Components
import {
  MainDiv,
  MarginDiv,
} from './Matches.elements'

const Matches = () => {
  
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