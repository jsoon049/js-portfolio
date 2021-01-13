import React from "react"
import { graphql } from "gatsby"
import style from "./index.module.css"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import ProjectCard from "../components/project-card.js"
import WorkExperience from "../components/work-experience.js"
import Tabs from "../components/tabs.js"
import Layout from "../components/layout.js"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fas, fab)

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = ({ data }) => (
  <div id="main">
    <meta name="google-site-verification" content="NSkRFvmki8mqdpsAV7-lubMPjfvXmuVtbuNKrx6MlE8"/>
    <Layout>
      <BackgroundImage
        className="bg-Image"
        fluid={data.headerImage.childImageSharp.fluid}
        style={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className={style.title}>Aspire To Inspire Before You Expire</h1>
        <div className={style.downArrowDiv}>
          <Link to="/#about">
            <FontAwesomeIcon
              icon={["fas", "chevron-circle-down"]}
              className={style.downArrow}
            />
          </Link>
        </div>
      </BackgroundImage>
      <section id="about" className={`${style.about} ${style.container}`}>
        <h2>Background</h2>
        <div>
          <p>
            Hi there! I'm Jeremy, a fourth year student studying{" "}
            <strong>Computer Science at University of Ottawa.</strong> I am an
            autodidact who is constantly trying to gain a deeper understanding
            of how the world truly works. It is my passion to be able to apply
            this knowledge to create software that not only functions
            efficiently under the hood, but also provides intuitive,
            pixel-perfect user experiences.
          </p>
          <p>
            I have been very fortunate and grateful, to have been given the
            opportunity to work for different organizations such as{" "}
            <strong>Harbourfront Centre</strong>, one of the largest and
            renowned non-profit organizations in Canada, to a top mid-market
            technology consulting firm in <strong>MNP LLP </strong>and most
            recently at <strong>Mitel Networks Corporation</strong>, one of
            Canada’s largest telecommunications companies. The valuable work
            experiences have allowed me to utilize and hone my skills, gain a
            thorough understanding of the contrasting work environments and the
            importance of keeping an open mind.
          </p>
          <p>
            I thrive on discovering novel methods to write clean, efficient, and
            scalable code. I consider work an ongoing education, and I'm always
            looking for opportunities to work with those who are willing to
            share their knowledge with me. At the end of the day, my primary
            goal is to be able to work with people that bring out the best in
            me.
          </p>
        </div>
      </section>
      <section
        id="experience"
        className={`${style.experience} ${style.container}`}
      >
        <h2>Where I've Worked</h2>
        <Tabs>
          <div label="Mitel">
            <WorkExperience
              company="Mitel"
              jobTitle="Software Developer CO-OP"
              // location="Kanata, ON"
              dates="January - April 2020"
              jobDescription=" Developed a REST API with Elixir's Phoenix framework to integrate Application-to-Person 
            functionality to Mitel's Cloudlink SMS microservice. Implemented a wrapper class around Erlang's PO Box 
            library to protect Elixir processes from becoming overloaded. Designed unit tests with the ExUnit framework
            to increase the microservice’s code coverage by 10%. "
            />
          </div>
          <div label="MNP">
            <WorkExperience
              company="MNP LLP"
              jobTitle="Front-End Developer CO-OP"
              // location="Ottawa, ON"
              dates="September - December 2019"
              jobDescription=" Developed mobile-first components in an Agile environment to rebrand and modernize 
            the MNP Debt website. Participated in code reviews and fixed bugs to ensure thoughtful and coherent user 
            experience across the website. Collaborated with the head front-end developer, UX designer, 
            and client stakeholders to develop technical solutions for business cases.
            "
            />
            <hr className={style.lineBreak}></hr>
            <WorkExperience
              jobTitle="Analyst Developer CO-OP"
              // location="Ottawa, ON"
              dates="May - September 2019"
              jobDescription=" Assisted developing a plugin for internal use within Enterprise Architect 
            using the .NET framework for CRM architects to better manage the design, configuration and 
            development of Microsoft Dynamics solutions. Developed and maintained code for client 
            websites using HTML, Sass, Bootstrap 4, JavaScript, and jQuery. Performed Microsoft Dynamics 
            365 customization activities based on client needs.
            "
            />
          </div>
          <div label="Harbourfront">
            <WorkExperience
              company="Harbourfront Centre"
              jobTitle="Web Developer Intern"
              // location="Toronto, ON"
              dates="May - August 2018"
              jobDescription=" Developed an internal Employee & Equipment Directory web application for the IT department
            using HTML, CSS, JavaScript, and PHP. Generated queries with SQL to store and access information 
            from the SQL Server database."
            />
          </div>
        </Tabs>
      </section>
      <section id="projects" className={`${style.projects} ${style.container}`}>
        <h2>Some Things I've Built</h2>
        <div className={style.projectCardContainer}>
          <ProjectCard
            title="Booking Event App"
            description="Under construction. Stay tuned!"
            // github="https://github.com/jsoon049"
            // gitIcon={["fab", "github"]}
            // demoLink="https://github.com/jsoon049"
            // demoIcon={["fas", "external-link-alt"]}
            techStack={["React", "Node.js", "Sass", "GraphQL"]}
          />
          <ProjectCard
            title="Movie Database App"
            description="App to search for movies using the OMDb API."
            github="https://github.com/jsoon049"
            gitIcon={["fab", "github"]}
            demoLink="https://movie-app-js.netlify.app"
            demoIcon={["fas", "external-link-alt"]}
            techStack={["React", 'Sass']}
          />
          <ProjectCard
            title="15 Puzzle Game"
            description="Implementation of the 15 Puzzle game using HTML, CSS, and Javascript."
            github="https://github.com/jsoon049/15PuzzleGame"
            gitIcon={["fab", "github"]}
            // demoLink="https://github.com/jsoon049"
            // demoIcon={["fas", "external-link-alt"]}
            techStack={["HTML", "CSS", "Javascript"]}
          />
        </div>
      </section>
      <section id="skills" className={`${style.skills} ${style.container}`}>
        <h2>Skills</h2>
        <div className={style.skills_container}>
          <div>
            <h3>Languages</h3>
            <ul>
              {data.languages.nodes.map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Frameworks</h3>
            <ul>
              {data.frameworks.nodes.map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Tools</h3>
            <ul>
              {data.tools.nodes.map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="contact" className={`${style.contact} ${style.container}`}>
        <h2 className={style.contactHeader}>What's Next?</h2>
        <div className={style.contactContainer}>
          <h3 className={style.contactTitle}>Get In Touch</h3>
          <p className={style.contactText}>
            Whether you have an idea for a project, a possible internship
            opportunity, or just want to chat, feel free to shoot me an email!
          </p>
          <a href="mailto:jsoon049@uottawa.ca" className={style.contactLink}>
            Say Hello
          </a>
        </div>
      </section>
    </Layout>
  </div>
)

export default IndexPage

export const data = graphql`
  query {
    headerImage: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    languages: allSkillsJson(filter: { type: { eq: "language" } }) {
      nodes {
        type
        name
      }
    }
    frameworks: allSkillsJson(filter: { type: { eq: "framework" } }) {
      nodes {
        type
        name
      }
    }
    tools: allSkillsJson(filter: { type: { eq: "tools" } }) {
      nodes {
        type
        name
      }
    }
  }
`
