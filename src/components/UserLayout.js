/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AuthContext from '../context/AuthContext'

import UserHeader from "./UserHeader"
import "./layout.css"

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
  const { user } = useContext(AuthContext);
    console.log("[AuthContext:] ", user)
  return (
    <>
      <UserHeader siteTitle={data.site.siteMetadata.title} />
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
