import React from "react"
import { Link, navigate, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/index/layout"
import SEO from "../components/seo"
import Hero from "../components/index/Hero"
import HeroText from "../components/index/HeroText"
import HeroButton from "../components/index/HeroButton"
import ScholarshipPreview from "../components/ScholarshipPreview"

// import {scholarships} from '../utils/scholarships-database.js'

const loggedIn = true

const HERO_IMAGE = graphql`
  query HeroImage {
    heroImage: file(relativePath: { eq: "students.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// console.log(scholarships);

const IndexPage = () => {
  const data = useStaticQuery(HERO_IMAGE)
  !loggedIn && navigate("/login")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero fluid={data.heroImage.childImageSharp.fluid}>
        <HeroText />
        <Link to="/login/">
          <HeroButton>Sign Up Today</HeroButton>
        </Link>
      </Hero>
      <ScholarshipPreview />
    </Layout>
  )
}

export default IndexPage
