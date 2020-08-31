import React from "react"
import Img from "gatsby-image"
import style from "./project-card.module.css"

const ProjectCard = props => {
  return (
    <div className={style.project_card}>
      <Img fluid={props.image} alt={props.caption} />
      <div className={style.project_content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.demo_link} className={style.demo}>
          Demo
        </a>
        <a href={props.source_link}>Source Code</a>
      </div>
    </div>
  )
}

export default ProjectCard
