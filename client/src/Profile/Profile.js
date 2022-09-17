import React from 'react'

//Styled Components
import {
  SampleDiv,
  MarginDiv,
  TeamNameP,
  BioHeader
} from './Profile.elements'

const Profile = () => {
  return (
    <>
      <MarginDiv></MarginDiv>
      <SampleDiv>John Doe
        <TeamNameP> Team X </TeamNameP>
        <BioHeader> Personal Bio </BioHeader>
      </SampleDiv>

    </>
  )
}

export default Profile