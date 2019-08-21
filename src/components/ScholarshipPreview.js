import React from "react"
import Scholarship from "../components/Scholarship"
import styled from "styled-components"

// these should be pulled from DB or Contentful
const scholarships = [
  {
      owners: ["Diane Donor"],
      applicants:[],
      id:'a',
      company: "RecyCorp",
      amount: 30000,
      fieldOfStudy: "Innovative research in sustainable energy, recycling and or other impactful environmental causes",
      exparationDate: "21.09.2020",
      numOfApplicants: 100,
  },
  {
      owners:["Mario Krstevski"],
      applicants:[],
      id:'b',
      company:"JobFinder",
      amount: 50000,
      fieldOfStudy: "digital marketing, computer science, machine learning",
      exparationDate: "25.09.2021",
      numOfApplicants: 122,
  },
  {
      id:'c',
      applicants:[],
      owners:["Bojan Krstevski"],
      company:"Barmen",
      amount: 10000,
      fieldOfStudy: "gastronomy",
      exparationDate: "30.10.2019",
      numOfApplicants: 22,
  }
]

const ScholarshipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  algin-items: center;
  max-width: 1224px;
  left:50%;
  transform:translateX(-50%);
  position: relative;

`

const Container = styled.div`
  padding: 30px 15px;
  text-align: center;
  background-color: #777;
`

const ScholarshipPreview = ({outsideScholarships, title}) => {
  console.log({outsideScholarships})
  const scholarshipsArray = outsideScholarships || scholarships;
  const scholarshipList = scholarshipsArray.map(scholarship => {
    return (
      <Scholarship
        key={scholarship.id}
        owners={scholarship.owners}
        applicants={scholarship.applicants}
        numOfApplicants={scholarship.numOfApplicants}
        expirationDate={scholarship.expirationDate}
        amount={scholarship.amount}
        fieldOfStudy={scholarship.fieldOfStudy}
      />
    )
  })

  return (
    <Container>
      <h2> {title || "Top Scholarships"}</h2>
      <ScholarshipContainer>{scholarshipList}</ScholarshipContainer>
    </Container>
  )
}
export default ScholarshipPreview
