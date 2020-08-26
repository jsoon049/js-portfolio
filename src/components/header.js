import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Navbar from "./navbar.js"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "pic1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <h1>Hello gatsby-image</h1>
}

export default Header
