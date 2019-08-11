import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    This is the app
    <Link to="/">Homepage</Link>
  </Layout>
)

export default AppPage
