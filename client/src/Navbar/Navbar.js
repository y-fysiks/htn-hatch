import { VscGlobe } from 'react-icons/vsc'
import { BsHeartFill, BsPersonFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'

import React from 'react';
//Styled Components
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  LogoText,
  NavItem, 
  NavLinks,
  NavIconContainer
} from './Navbar.elements'
//Images


// import sampleLogo from '../images/sampleLogo.png'


export const Navbar = () => {

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <LogoText>Hatch</LogoText>
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

export default Navbar