import React from "react"
import styled from "styled-components"
import ScholarshipPreview from "../../ScholarshipPreview"
const ScholarshipListContainer = styled.div`
    
`

const ScholarshipList = ({ scholarships }) => {
  return (
    <ScholarshipListContainer>
      <ScholarshipPreview
        scholarships={scholarships}
        title="All Scholarships"
      ></ScholarshipPreview>
    </ScholarshipListContainer>
  )
}

export default ScholarshipList
