import React, { useContext } from "react"
import styled from "styled-components"
import AuthContext from "../../context/AuthContext"

import ShortProfile from './user/ShortProfile'
import AppliedScholarships from './user/AppliedScholarships'
import FavouriteScholarships from './user/FavouriteScholarships'
import CreatedScholarships from './user/CreatedScholarships'
import JoinedScholarships from './user/JoinedScholarships'

const UserProfileWrapper = styled.div``

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  return (
    <UserProfileWrapper>
      {user.role === "student" && (
        <>
          <ShortProfile />
          <AppliedScholarships />
          <FavouriteScholarships />
        </>
      )}

      {user.role === "donor" && (
        <>
          <ShortProfile />
          <CreatedScholarships />
          <JoinedScholarships />
        </>
      )}
    </UserProfileWrapper>
  )
}

export default UserProfile
