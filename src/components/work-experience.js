import React from "react"
import style from "./work-experience.module.css"

const WorkExperience = props => {
  return (
    <div className={style.job_content}>
      <h3 className={style.companyName}>{props.company}</h3>
      <h4 className={style.jobInfo}>{props.jobTitle}</h4>
      <p className={style.jobDates}>{props.dates}</p>
      <p>{props.jobDescription}</p>
    </div>
  )
}

export default WorkExperience
