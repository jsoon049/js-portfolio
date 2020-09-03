import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      socialLinks: allSocialMediaJson {
        nodes {
          icon
          key
          link
        }
      }
    }
  `)

  return (
    <div className={style.footer}>
      {data.socialLinks.nodes.map(links => (
        <a key={links.key} href={links.link} className={style.links}>
          <FontAwesomeIcon icon={links.icon} />
        </a>
      ))}
      <p className={style.copyright}>Designed & built by Jeremy Soong</p>
    </div>
  )
}

export default Footer
