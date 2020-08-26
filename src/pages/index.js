import React from "react"
import Header from "../components/header.js"
import "./index.module.css"
import BackgroundImage from "gatsby-background-image"
import Navbar from "../components/navbar.js"

const IndexPage = ({ data }) => (
  <div id="main">
    <BackgroundImage
      className="bg-image"
      fluid={data.headerImage.childImageSharp.fluid}
      style={{
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(80%)'
      }}
    >
       <Navbar/>
      <h1>“Choose a job you love, and you will never have to work a day in your life</h1>
    </BackgroundImage>
  </div>
)

export default IndexPage

export const data = graphql`
  query {
    headerImage: file(relativePath: { eq: "pic1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth:500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
