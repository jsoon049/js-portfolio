import React from "react"
import { graphql } from "gatsby"
import style from "./index.module.css"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Navbar from "../components/navbar.js"
import ProjectCard from "../components/project-card.js"
import WorkExperience from "../components/work-experience.js"
import Tabs from "../components/tabs.js"
import Footer from "../components/footer.js"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resume from '/Users/jeremysoong/Desktop/js-portfolio/static/resume.pdf'  
library.add(fas, fab)



if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const navlinks = [
  { name: "ABOUT", to: "#about" },
  { name: "EXPERIENCE", to: "#experience" }, 
  { name: "PROJECTS", to: "#projects" },
  { name: "SKILLS", to: "#skills" },
  { name: "CONTACT", to: "#contact" },
  { name: "RESUME", to: resume }, 
];

const IndexPage = ({ data }) => (
  <div id="main">
    <Navbar links={navlinks}/>   
    <BackgroundImage
      className='bg-Image' 
      fluid={data.headerImage.childImageSharp.fluid}
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat" 
      }}
    >
      <h1 className={style.title}>Aspire To Inspire Before We Expire</h1> 
      <div className={style.downArrowDiv}>
        <Link to='/#about'>
            <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} className={style.downArrow}/>
        </Link>
      </div>
    </BackgroundImage> 
    <section id="about" className={`${style.groupA} ${style.container}`}>
      <h2>About Me</h2>
      <div>
        <p>
          Hi there! I'm Jeremy, a fourth year student studying <strong>Computer Science at University of Ottawa.</strong> I am 
          an autodidact with a passion for gaining a deeper understanding of how the world truly works. It is my passion to 
          be able to apply this knowledge to create software that not only functions efficiently under the hood, 
          but also provides intuitive, pixel-perfect user experiences.
        </p>
        <p>
          I've been fortunate to have been given the opportunity to work for different organizations from one of the largest non-profit
          organizations in Canada in Harbourfront Centre, to one of Canada's top mid-market technology consulting firms 
          in MNP, and most recently I had the chance to intern at Mitel Networks Corporation, one of Canada's largest
          telecomuncations company. Throughout all my experiences, I've acknowledged the value of keeping an open mind 

          {/* I've had vast opportunities to work for different organizations; from non-profit to consulting to most recently tech. */}
        </p>
        <p>
          I thrive on discovering novel methods to create seamless user experiences with clean, efficient, and scalable code. 
          I consider work an ongoing education, and I'm always looking for opportunities to work with those who are 
          willing to share their knowledge with me. At the end of the day, my primary goal is to create something beautiful 
          with people that bring out the best in me. 
        </p>
      </div>
    </section>
    <section id="experience" className={`${style.groupB} ${style.container}`}>
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
    <section id="projects" className={`${style.groupA} ${style.container}`}>
      <h2>Some Things I've Built</h2>
      <div className={style.projectCardContainer}>
        <ProjectCard
          title="Project1"
          description="Morbi neque diam, interdum eget varius dignissim, gravida et libero. 
          Nulla id ultricies velit. Fusce ut massa quis odio interdum auctor vitae a nisl. 
          Pellentesque ut nulla sed mi cursus egestas. Etiam ut tincidunt tortor."
          github="https://github.com/jsoon049"
          gitIcon={["fab", "github"]}
          demoLink="https://github.com/jsoon049"
          demoIcon={["fas", "external-link-alt"]}
          techStack={["React", "Node", "Sass"]} 
        />
        <ProjectCard
          title="Project2"
          description="Morbi neque diam, interdum eget varius dignissim, gravida et libero. 
          Nulla id ultricies velit. Pellentesque ut nulla sed mi cursus egestas. Etiam ut tincidunt tortor."
          github="https://github.com/jsoon049"
          gitIcon={["fab", "github"]}
          demoLink="https://github.com/jsoon049"
          demoIcon={["fas", "external-link-alt"]}
          techStack={["React", "Node", "Sass"]}
        />
        <ProjectCard
          title="Project3"
          description="Morbi neque diam, interdum eget varius dignissim, gravida et libero. 
          Nulla id ultricies velit. Fusce ut massa quis odio interdum auctor vitae a nisl. 
          Pellentesque ut nulla sed mi cursus egestas. Etiam ut tincidunt tortor. 
          Vestibulum id sem ut turpis convallis varius non sit amet risus. "
          github="https://github.com/jsoon049"
          gitIcon={["fab", "github"]}
          demoLink="https://github.com/jsoon049"
          demoIcon={["fas", "external-link-alt"]}
          techStack={["React", "Node", "Sass", "React"]}
        />
      </div>
    </section>
    <section id="skills" className={`${style.groupB} ${style.container}`}>
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
    <section id="contact" className={`${style.groupA} ${style.container}`}>
      <h2 className={style.contactHeader}>What's Next?</h2>
      <div className={style.contactContainer}>
      <h3 className={style.contactTitle}>Get In Touch</h3>
      <p className={style.contactText}>
        Whether you have an idea for a project, a possible internship
        opportunity, or just want to chat, feel free to shoot me an email!
      </p>
        <a href="mailto:jsoon049@uottawa.ca" className={style.contactLink}>Say Hello</a>
      </div>
    </section>
    <Footer/>
  </div>
)

export default IndexPage

export const data = graphql` 
  query {
    headerImage: file(relativePath: { eq: "pic1.jpg" }) { 
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
