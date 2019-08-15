import React from "react"
import { Router } from "@reach/router"
import { Link, navigate, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #965418;
  background-color: #83D9C8;

  img {
    width: 36%;
    height: 320px;
    transform: translateX(85%);
    background-size: cover;
  }

  h2{
    margin-top:0;
    text-align:center;
  }
  p {
    padding: 0 20%;
  }
`;


const NOT_FOUND_IMAGE = graphql`
  query NotFoundImage {
    notFoundImage: file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid {
          src
          
        }
      }
    }
  }
`

const NotFound = () => {
  const data = useStaticQuery(NOT_FOUND_IMAGE)
  const notFoundImage = data.notFoundImage.childImageSharp.fluid.src;

  return (<NotFoundContainer>
      <div>
        <img src={notFoundImage} alt="404" />
      </div>
      <h2> Caution! This Page is Cordoned Off</h2>
      <p>
        The earthquake was not good to the bike lane on your way to work. A
        large gap in the pavement (too big to be called a pothole) had swallowed
        three oblivious bikers whole. So the city had put up two pylons and
        yellow caution tape. Pretty frustrating for you given your propensity to
        do 360 jumps over the gap.
      </p>
    </NotFoundContainer>
  )
}

const AppPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Router>
      <NotFound default />
    </Router>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default AppPage
