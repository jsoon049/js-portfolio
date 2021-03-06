import React, { Component } from "react"
import PropTypes from "prop-types"
import style from "./tab.module.css"

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this

    let tabState = "tab-list-item"
    if (activeTab === label) {
      tabState = " tab-list-active"
    }

    return (
      <li
        className={style.tabHeader}
      >
        <button
          onClick={onClick}
          className={style.tabButton}
        > 
          <span 
            style={{
              color: tabState === " tab-list-active" ? "#373333" : "rgb(55, 51, 51, 0.5)",
              fontWeight: tabState === " tab-list-active" ? "bold" : ""
            }}
            className={style.tabText}
          >
            {label}
          </span>
        </button>
      </li>
    )
  }
}

export default Tab
