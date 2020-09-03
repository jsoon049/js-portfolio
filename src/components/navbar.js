import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import style from "./navbar.module.css"

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
      <ul>
        {this.props.links.map((link, index) => (
          <li key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    )

    return (
      <Transition>
        <div className={`${this.state.show ? "active" : "hidden"} ${style.navbar}`}>
          <nav>
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
    transition: all 200ms ease-in;
  }

  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`
