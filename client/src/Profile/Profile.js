import React from 'react'

//Styled Components
import {
  SampleDiv,
  MarginDiv,
  TeamNameP,
  BioHeader,
  Bio,
  SkillsHeader
} from './Profile.elements'

const Profile = () => {
  return (
    <>
      <MarginDiv></MarginDiv>
      <SampleDiv>John Doe
        <TeamNameP> Team X </TeamNameP>
        <BioHeader> Personal Bio </BioHeader>
        <Bio> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </Bio>
        <SkillsHeader> Skills </SkillsHeader>
      </SampleDiv>
    </>
  )
}

export default Profile