import React from "react"
import style from "./project-card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectCard = props => {
  return (
    <div className={style.projectCard}>
      <FontAwesomeIcon icon={["fas", "folder-open"]} className={style.projectIcon}/>
      <div className={style.projectLinksWrapper}>
        <a href={props.github} className={style.gitLink}>
          <FontAwesomeIcon icon={props.gitIcon} />
        </a>
        <a href={props.demoLink} className={style.demoLink}>
          <FontAwesomeIcon icon={props.demoIcon} />
        </a>
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul>
        {props.techStack.map((tool, index) => (<li key={index}>{tool}</li>))}
      </ul>
    </div>
  )
}

export default ProjectCard
