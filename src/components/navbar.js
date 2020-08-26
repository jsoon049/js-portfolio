import React from "react"
import { Link } from "gatsby"

import style from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link to = "/#home">ABOUT</Link>
        </li>
        <li>
          <Link to = "/#home">PROJECTS</Link>
        </li>
        <li>
          <Link to = "/#home">EXPERIENCE</Link>
        </li>
        <li>
          <Link to = "/#home">SKILLS</Link>
        </li>
        <li>
          <Link to = "/#home">RESUME</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
