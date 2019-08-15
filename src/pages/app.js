import React from "react"
import { Router } from "@reach/router"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Router>

      This is the app part
      <Link to="/">Homepage</Link>
    </Router>
  </Layout>
)

export default AppPage
