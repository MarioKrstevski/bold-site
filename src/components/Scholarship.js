import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import AuthContext from "../context/AuthContext"

const Card = styled.div`
  width: 320px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: #15457e;
  min-width: 300px;
  margin:5px;
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 260px;
  background-color: lightgray;
`
const Price = styled.div`
  color: lightgreen;
`
const CardContent = styled.div`
  height: 270px;
  padding: 20px;
`

const Title = styled.h3``
const Details = styled.div`
  display: flex;
  align-self: end;
  justify-content: space-around;
`
const NumberApplicants = styled.div`
  align-self: flex-end;
  width: 60px;
`
const ExpirationDate = styled.div`
  align-self: flex-end;
`
const Owner = styled.div`
  align-self: flex-end;
`
const Scholarship = props => {
  console.log("[Scholarship props]", props)
  const { user } = useContext(AuthContext)
  const {
    owners,
    applicants,
    amount,
    fieldOfStudy,
    expirationDate,
    numOfApplicants,
  } = props
  return (
    <Card>
      <ImagePlaceholder></ImagePlaceholder>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Price>${amount}</Price>
          <ExpirationDate>{expirationDate}</ExpirationDate>
        </div>
        <Title>{fieldOfStudy}</Title>
        <Details>
          <NumberApplicants>
            <span role="img" aria-label="fire">
              🔥
            </span>
            {numOfApplicants} applied
          </NumberApplicants>
          <Owner>{owners[0]}</Owner>

          {user.role === "donor" ? (
            applicants.includes(user.name) ? (
              <button> Exit </button>
            ) : (
              <button> Join </button>
            )
          ) : applicants.includes(user.name) ? (
            <button> Cancel </button>
          ) : (
            <button> Apply </button>
          )}
        </Details>
      </CardContent>
    </Card>
  )
}

export default Scholarship
