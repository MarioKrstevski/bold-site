/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AuthContext from "../../context/AuthContext"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log("[Data:]", data)
  const { user } = useContext(AuthContext)
  console.log("[AuthContext:] ", user)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <footer
        style={{
          height: 60,
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "#333",
          color: "white",
          margin: 0,
          paddingRight: 70,
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>
          © {new Date().getFullYear()}, Bold.org - a platform to help students
          fulfill their dreams
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
