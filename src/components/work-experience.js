import React from "react"
import style from "./work-experience.module.css"

const WorkExperience = props => {
  return (
    <div className={style.job_content}>
      <h2 className={style.companyName}>{props.company}</h2>
      <h3 className={style.jobInfo}>{props.jobTitle} {'\uFF5C'} {props.location}</h3>
      <p>{props.dates}</p>
      <p>{props.jobDescription}</p>
    </div>
  )
}

export default WorkExperience
