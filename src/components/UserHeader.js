import { Link } from "@reach/router"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"

const Header = ({ siteTitle }) => {
  const { user, setUser } = useContext(AuthContext)
  const logout = () => {
    setUser({
      name: "Visitor",
      token: null,
      role: "visitor",
      isAuthenticated: false,
    })

    navigate("/")
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
      <span style={{ color: "white" }}> Hello, you are a {user.name} </span>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
