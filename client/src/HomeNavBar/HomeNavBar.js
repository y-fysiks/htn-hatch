import { VscGlobe } from 'react-icons/vsc'
import { BsHeartFill, BsPersonFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

import React from 'react';
//Styled Components
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  Img,
  NavItem, 
  NavLinks,
  NavIconContainer
} from './HomeNavBar.elements'
//Images


import sampleLogo from '../images/sampleLogo.png'


export const HomeNavBar = () => {

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Img src={sampleLogo} ></Img>
        </NavLogo>

        <NavIconContainer>

          <NavItem>
            <NavLinks to='/explore'>
              <VscGlobe size={50}/>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/matches'>
              <BsHeartFill size={40}/>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/team'>
              <HiUserGroup size={50}/>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/profile'>
              <BsPersonFill size={50}/>
            </NavLinks>
          </NavItem>

        </NavIconContainer>

 
      </NavbarContainer>
    </Nav>
  );
};

export default HomeNavBar