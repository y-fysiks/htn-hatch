import styled from 'styled-components'

export const Text = styled.p`
  font-family: 'Righteous';
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`

export const Card = styled.div`
  color: black;
  font-family: 'Righteous';
  font-size: 45px;
  font-weight: bold;
  background-color: #F3F3F0;
  max-width: 450px;
  min-height: 550px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 20px;
  // padding: 40px;
  box-shadow: 13px -13px #CCCCCC;
`

export const MarginDiv = styled.div`
  height: 80px;
`

export const HeaderText = styled.h1`
  font-family: 'Righteous';
  font-size: 30px;
  font-weight: bold;
  padding: none;
  margin: none;
`

export const TeamName = styled.h1`
  font-size: 40px;
  font-family: Righteous;
`

export const SmallText = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  margin: 0 0 0 20px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
`

export const RejectButton = styled.button`
  background-color: #FF4B4B;
  width: 50%;
  border: none;
  height: 50px;
  border-radius: 0 0 0 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #FF0A0A;
  }

`

export const AcceptButton = styled.button`
  background-color: #256EFF;
  width: 50%;
  border: none;
  height: 50px;
  border-radius: 0 0 20px 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0156FF;
  }
`

export const InfoContainer = styled.div`
  padding: 1px 20px 20px 20px;

`