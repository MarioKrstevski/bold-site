import React from "react"
import Scholarship from "../components/Scholarship"
import styled from "styled-components"

// these should be pulled from DB or Contentful
const scholarships = [
  {
    owner: "Diane Donor",
    company: "RecyCorp",
    amount: 30000,
    fieldOfStudy:
      "Innovative research in sustainable energy, recycling and or other impactful environmental causes",
    expirationDate: "21.09.2020",
    numOfApplicants: 100,
  },
  {
    owner: "Mario Krstevski",
    company: "JobFinder",
    amount: 50000,
    fieldOfStudy: "digital marketing, computer science, machine learning",
    expirationDate: "25.09.2021",
    numOfApplicants: 122,
  },
  {
    owner: "Bojan Krstevski",
    company: "Barmen",
    amount: 10000,
    fieldOfStudy: "gastronomy",
    expirationDate: "30.10.2019",
    numOfApplicants: 22,
  },
]

const ScholarshipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  algin-items: center;
`

const Container = styled.div`
  padding: 30px 15px;
  text-align: center;
  background-color: #777;
`

const ScholarshipPreview = ({outsideScholarships}) => {
  const scholarshipsArray = outsideScholarships || scholarships;
  const scholarshipList = scholarshipsArray.map(scholarship => {
    return (
      <Scholarship
        key={scholarship.owner + scholarship.expirationDate }
        owner={scholarship.owner}
        numOfApplicants={scholarship.numOfApplicants}
        expirationDate={scholarship.expirationDate}
        amount={scholarship.amount}
        fieldOfStudy={scholarship.fieldOfStudy}
      />
    )
  })

  return (
    <Container>
      <h2>Top Scholarships</h2>
      <ScholarshipContainer>{scholarshipList}</ScholarshipContainer>
    </Container>
  )
}
export default ScholarshipPreview
