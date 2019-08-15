import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'

const Card = styled.div`
  width: 320px;
  border-radius: 3px;
  border: 1px solid black;
  background-color: #15457e;
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
const Scholarship = ({
  owner,
  amount,
  fieldOfStudy,
  expirationDate,
  numOfApplicants,
}) => {
  return (
    <Card>
      <ImagePlaceholder></ImagePlaceholder>
      <CardContent>
        <div style={{
            display: 'flex',
            justifyContent:"space-between",
            marginBottom: 5
        }}>
            <Price>${amount}</Price>
            <ExpirationDate>{expirationDate}</ExpirationDate>

        </div>
        <Title>{fieldOfStudy}</Title>
        <Details>
          <NumberApplicants><span role='img'  aria-label="fire">🔥</span>{numOfApplicants} applied</NumberApplicants>
          <Owner>{owner}</Owner>
          <Link to="/login">
          <button> Apply </button>
              
          </Link>
        </Details>
      </CardContent>
    </Card>
  )
}

export default Scholarship
