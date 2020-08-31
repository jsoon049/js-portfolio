import React from "react"
import { Link } from "gatsby"

import style from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link to = "/#about">About</Link>
        </li>
        <li>
          <Link to = "/#experience">Experience</Link>
        </li>
        <li>
          <Link to = "/#projects">Projects</Link>
        </li>
        <li>
          <Link to = "/#home">Skills</Link>
        </li>
        <li>
          <Link to = "/#home">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
