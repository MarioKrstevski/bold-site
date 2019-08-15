import { Link } from "@reach/router"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"
import { defaultUser, isBrowser } from '../utils/auth-service';

const UserHeader = ({ siteTitle }) => {
  const { user, setUser } = useContext(AuthContext)
  const logout = () => {
    if (!isBrowser) return
    setUser(defaultUser);
    navigate("/")

    return null;
  }
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: `#333`,
        marginBottom: `1.45rem`,
        border: "1px solid black",
        zIndex: "10",
      }}
    >
      <span style={{ color: "white" }}> Hello, you are {user.name} </span>
      <Link to="/app/student">
        <button>Student Part</button>
      </Link>
      <Link to="/app/profile">
        <button>Profile Page</button>
      </Link>
      <Link to="/app/donor">
        <button>Donor Part</button>
      </Link>
      <button onClick={() => logout()}>Logout</button>
    </header>
  )
}

UserHeader.propTypes = {
  siteTitle: PropTypes.string,
}

UserHeader.defaultProps = {
  siteTitle: ``,
}

export default UserHeader
