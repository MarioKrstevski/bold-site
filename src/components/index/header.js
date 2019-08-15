import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
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
      <div
        style={{
          margin: `0 auto`,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          flexWrap: "nowrap",
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle || "Bold.org"}
          </Link>
        </h1>

        <div
          className="logins"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: "10px 20px",
              marginRight: 30,
              border: "1px solid red",
              backgroundColor: "#4F4F4F",
            }}
          >
            {" "}
            Sign in as a Student
          </Link>
          <Link
            to="/login"
            style={{
              color: `white`,
              padding: "10px 20px",
              border: "1px solid red",
              textDecoration: `none`,
            }}
          >
            {" "}
            Sign in as a Donor
          </Link>
        </div>
      </div>
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
