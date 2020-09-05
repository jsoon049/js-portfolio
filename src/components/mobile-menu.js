import React, { Component } from "react"
import style from "./mobile-menu.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSidebarOpen: false,
    }
  }

  handleMenuButtonClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { isSidebarOpen } = this.state
    return (
      <div>
        <div
          className={style.menuButton}
          onClick={this.handleMenuButtonClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon icon={("fas", "bars")} />
        </div>
        <nav className={`${style.nav} ${isSidebarOpen ? `${style.show}` : ""}`}>
          <div
            onClick={this.handleMenuButtonClick}
            className={style.close}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={("fas", "times")} />
          </div>
          <ul className={style.menuList}>
            {this.props.links.map(link => ( 
              <li key={link.name} className={style.menuItem}>
                <a href={link.to} className={style.menuLink} onClick={this.handleMenuButtonClick}>
                    {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default MobileMenu
