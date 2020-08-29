import React from "react"
import { graphql } from "gatsby"
import style from "./index.module.css"
import BackgroundImage from "gatsby-background-image"
import Navbar from "../components/navbar.js"
import ProjectCard from "../components/project-card.js"

const IndexPage = ({ data }) => (
  <div id="main">
    <BackgroundImage
      className="bg-image"
      fluid={data.headerImage.childImageSharp.fluid}
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
      }}
    >
      <Navbar />
      <h1>
        {" "}
        “Choose a job you love, and you will never have to work a day in your
        life
      </h1>
    </BackgroundImage>

    <section className="about">
      <div className={style.container}>
        <p>
          Lorem ipsum dolor sit amet, dolorem recteque salutatus cu sit. Oratio
          scripta euismod vis in, debet salutatus vis ei. Nec quis patrioque ex,
          nec ne nostrud adolescens. An eos magna regione pericula, oporteat
          mandamus his cu. Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
          recteque salutatus cu sit. Oratio scripta euismod vis in, debet
          salutatus vis ei. Nec quis patrioque ex, nec ne nostrud adolescens. An
          eos magna regione pericula, oporteat mandamus his cu. Vel at aliquip
          phaedrum, sea ne iudico nonumes, tantas accusam appareat vis cu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, dolorem recteque salutatus cu sit. Oratio
          scripta euismod vis in, debet salutatus vis ei. Nec quis patrioque ex,
          nec ne nostrud adolescens. An eos magna regione pericula, oporteat
          mandamus his cu. Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, dolorem recteque salutatus cu sit. Oratio
          scripta euismod vis in, debet salutatus vis ei. Nec quis patrioque ex,
          nec ne nostrud adolescens. An eos magna regione pericula, oporteat
          mandamus his cu. Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.
        </p>
      </div>
    </section>
    <section className="projects">
      <div className={style.container}>
        <ProjectCard
          title="Project1"
          description="Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
          recteque salutatus cu sit. Oratio scripta euismod vis in, debet
          salutatus vis ei. Nec quis patrioque ex, nec ne nostrud adolescens."
          image={data.cardImage.childImageSharp.fixed}
          caption="TBD"
        />
        <ProjectCard
          title="Project2"
          description="Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
          recteque salutatus cu sit. Oratio scripta euismod vis in, debet
          salutatus vis ei. Nec quis patrioque ex, nec ne nostrud adolescens."
          image={data.cardImage.childImageSharp.fixed}
          caption="TBD"
        />
      </div>
    </section>
  </div>
)

export default IndexPage

export const data = graphql`
  query {
    headerImage: file(relativePath: { eq: "pic2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImage: file(relativePath: { eq: "pic1.jpg" }) {
      childImageSharp {
        fixed(quality: 100, width: 352) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
