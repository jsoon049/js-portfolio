import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"


const NotFound = ({ data }) => {
  return (
    <div>
     
      <Error>
        <Img fixed={data.sadImage.childImageSharp.fixed} />
        <h1>404 Error</h1>
        <h1>Uh-oh... The page you're looking for couldn't be found</h1>
        <Link
          to="/"
          style={{
            textAlign: "center",
            border: "2px solid blue",
            borderRadius: "25px",
            padding: "20px 45px",
            color: "blue",
          }}
        >
          RETURN HOME
        </Link>
      </Error>
    </div>
  )
}

const Error = styled.div`
  text-align: center;
  margin-top: 5em;
  color: blue;
`

export default NotFound

export const data = graphql`
  query {
    sadImage: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fixed(width: 230) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
