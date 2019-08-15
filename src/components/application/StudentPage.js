import React from "react"
import ScholarshipPreview from "../ScholarshipPreview"
import { connect } from "react-redux"

import { addScholarship, getScholarships } from "../../state/scholarships"

function StudentPage({ scholarships, dispatch }) {
  console.log("From STUDENTS PAGE", { scholarships })

  return <ScholarshipPreview outsideScholarships={scholarships}/>
}

const mapStateToProps = ({ scholarships }) => ({
  scholarships,
})

const mapDispatchToProps = dispatch => {
  return {
    addScholarship: () => {
      dispatch({ type: "ADD_SCHOLARSHIP" })
    },
  }
}

export default connect(
  mapStateToProps,
  null
)(StudentPage)
