/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import AuthContext from "../../context/AuthContext"

import UserHeader from "./UserHeader"

const UserLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
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
      {user.role && user.role === "visitor" ? (
        <Link to="/">Go back to homepage</Link>
      ) : (
        <UserHeader siteTitle={data.site.siteMetadata.title} />
      )}
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserLayout
