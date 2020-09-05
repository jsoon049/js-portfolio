import React from "react"
import { Link } from "gatsby"
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
      <div>
        <Link to="/#">
          <FontAwesomeIcon icon={['fas', 'chevron-circle-up']} className={style.upArrow}/>   
        </Link> 
      </div>
      {data.socialLinks.nodes.map(links => (
        <Link key={links.key} href={links.link} className={style.links}>
          <FontAwesomeIcon icon={links.icon} />
        </Link>
      ))}
      <p className={style.copyright}>Designed & built by Jeremy Soong</p>
    </div>
  )
}

export default Footer
