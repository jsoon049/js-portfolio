import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import style from "./navbar.module.css"
import MobileMenu from "./mobile-menu.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      scrollPos: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const { scrollPos } = this.state
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    })
  }

  render() {
    const NavLinks = () => (
      <ul className={style.navMenuLinks}>
        {this.props.links.map(link => (
          <li key={link.name}>
            <Link to={link.to} className={style.navLink}>{link.name}</Link>
          </li>
        ))}
      </ul>
    )

    const mobileLinks = this.props.links
    return (
      <Transition>
          {/* <MobileMenu links={mobileLinks}/>    */}
          <div
            className= {` ${style.navbar} ${this.state.show ? "active" : "hidden"}`}
          > 
            <MobileMenu links={mobileLinks}/>  
            <nav className={style.navs}>
              <NavLinks />
            </nav>
          </div>
        
      </Transition>
    ) 
  }
}

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 100ms ease-in;
  }

  .hidden {
    visibility: hidden;
    transition: all 100ms ease-out;
    transform: translate(0, -100%);
  }
`
