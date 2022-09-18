import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MarginDiv = styled.div`
  height: 80px;
`

export const MainText = styled.h1`
  font-family: 'Reem Kufi', sans-serif;
  color: #FFF;
  font-weight: normal;
  max-width: 820px;
  margin-left: 10%;
  margin-top: 100px;
  padding: 40px;
  font-size: 80px;
  line-height: 1.3;
`

export const GetStartedLink = styled(Link)` 
  text-decoration: none;
`

export const GetStartedButton = styled.button`
  font-family: 'Righteous';
  margin-left: 180px;
  color: #fff;
  background-color: black;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 35px;
  transition: background-color 0.1s;
  border-radius: 25px;
  border: none;

  &:hover {
    background-color: grey;
  }
`

export const HomeContainer = styled.div`
  background:linear-gradient(#256EFF, #9BC4CB);
  height: 100vh;
`