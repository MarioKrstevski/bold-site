import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || "100vh"};
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || "cover"} !important;
    object-position: ${props => props.position || "50% 50%"} !important;
    font-family: 'object-fit: ${props =>
      props.fit || "cover"} !important; object-position: ${props =>
  props.position || "50% 50%"} !important;'
  }
`

const Hero = props => {
  return (
    <Container>
      <BgImage {...props} />
      <Overlay>{props.children}</Overlay>
    </Container>
  )
}
export default Hero
