import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  // transition: background-color 0.5s, color 0.5s;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  width: 100%;
  list-style: none;

`

// export const NavbarContainer = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   ${Container}
// `

export const NavLogo = styled(Link)` 
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  line-height: 100%;
  transition: color 0.5s;
  margin-left: 100px;
`

export const Img = styled.img` 
  width: 150px;
  margin-right: 10px;
  margin-top: 10px;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center; 
`

export const LogoText = styled.h1`
  font-family: 'Righteous';
  margin-left: 92px;
  color: #fff;
  cursor: pointer;
  font-size: 40px;
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 3px solid #4b59f7;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  transition: color 0.5s;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  // border: 3px solid red;
`

export const NavIconContainer = styled.div`
  // border: 3px solid red;
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  width: 60%;
  list-style: none;
  margin-left: auto; 
  margin-right: 0;
`