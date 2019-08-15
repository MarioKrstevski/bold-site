import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #444;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 10px 20px;
  color: white;

  :hover {
    background-color: #4a4a4a;
  }
`

const HeroButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default HeroButton
