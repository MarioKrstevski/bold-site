import React from "react"
import SearchFilter from "./student/SearchFilter"
import styled from 'styled-components'
import { connect } from "react-redux"

import { addScholarship, getScholarships } from "../../state/scholarships"
import ScholarshipList from "./student/ScholarshipList";
import Pagination from './student/Pagination'

const StudentPageContainer = styled.div`
  
`

function StudentPage({ scholarships, dispatch }) {
  console.log("From STUDENTS PAGE", { scholarships })

  return <StudentPageContainer>
    <SearchFilter />
    <ScholarshipList scholarships={scholarships} />
    <Pagination size={5} />
  </StudentPageContainer>
}

const mapStateToProps = ({ scholarships }) => ({
  scholarships,
})

export default connect(
  mapStateToProps,
  null
)(StudentPage)
