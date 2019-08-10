import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Toggle from "../components/toggle";

const loggedIn = true;

const IndexPage = () => {

  !loggedIn && navigate('/login');
  
  return  (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Toggle></Toggle>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/login/">Login</Link>
    </Layout>
  )
  
}


export default IndexPage
