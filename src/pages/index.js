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
  { name: "RESUME", to: '#/' },
];

const IndexPage = ({ data }) => (
  <div id="main">
    <Navbar links={navlinks}/>   
    <BackgroundImage
      className='bg-Image' 
      fluid={data.headerImage.childImageSharp.fluid}
      style={{
        height: "100vh",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
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
      <p>
        Lorem ipsum dolor sit amet, dolorem recteque salutatus cu sit. Oratio
        scripta euismod vis in, debet salutatus vis ei. Nec quis patrioque ex,
        nec ne nostrud adolescens. An eos magna regione pericula, oporteat
        mandamus his cu. Vel at aliquip phaedrum, sea ne iudico nonumes, tantas
        accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem recteque
        salutatus cu sit. Oratio scripta euismod vis in, debet salutatus vis ei.
        Nec quis patrioque ex, nec ne nostrud adolescens. An eos magna regione
        pericula, oporteat mandamus his cu. Vel at aliquip phaedrum, sea ne
        iudico nonumes, tantas accusam appareat vis cu.
      </p>
      <p>
        Lorem ipsum dolor sit amet, dolorem recteque salutatus cu sit. Oratio
        scripta euismod vis in, debet salutatus vis ei. Nec quis patrioque ex,
        nec ne nostrud adolescens. An eos magna regione pericula, oporteat
        mandamus his cu. Vel at aliquip phaedrum, sea ne iudico nonumes, tantas
        accusam appareat vis cu.
      </p>
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
            jobDescription="Vel at aliquip phaedrum, sea ne iudico nonumes,
              tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
              recteque salutatus cu sit. Oratio scripta euismod vis in, debet
              salutatus vis ei. Nec quis patrioque ex, nec ne nostrud adolescens."
          />
        </div>
        <div label="MNP">
          <WorkExperience
            company="MNP LLP"
            jobTitle="Front-End Developer CO-OP"
            // location="Ottawa, ON"
            dates="September - December 2019"
            jobDescription="Nullam venenatis bibendum mauris non ornare. Ut hendrerit 
            nulla mauris. Fusce justo mi, laoreet a eleifend convallis, dictum eu metus. 
            Sed eu dui arcu. Proin at erat ex. Nullam non luctus libero, a finibus arcu. 
            Praesent ornare, nibh eleifend tincidunt sodales, augue nisl aliquam erat, eu 
            convallis libero magna a eros. Nunc fringilla ante non dapibus commodo. Ut id 
            quam id turpis venenatis aliquam. Suspendisse orci felis, tincidunt quis 
            sollicitudin at, mattis ut justo. Vivamus varius, lorem sit amet mattis molestie, 
            odio nulla molestie ligula, posuere dapibus massa quam vitae ante."
          />
          <hr className={style.lineBreak}></hr>
          <WorkExperience
            jobTitle="Analyst Developer CO-OP"
            // location="Ottawa, ON"
            dates="May - September 2019"
            jobDescription="Fusce at sem vulputate, eleifend risus sit amet, 
            imperdiet sem. Vestibulum ante ipsum primis in faucibus orci luctus et 
            ultrices posuere cubilia curae; Vivamus quis arcu nunc. Vestibulum ante 
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Vestibulum mi tortor, suscipit eget leo nec, ullamcorper vehicula risus. 
            Quisque nec ultrices tellus, vitae consequat urna. Integer sit amet odio 
            tempus, sodales lacus sit amet, ultricies mi."
          />
        </div>
        <div label="Harbourfront">
          <WorkExperience
            company="Harbourfront Centre"
            jobTitle="Web Developer Intern"
            // location="Toronto, ON"
            dates="May - August 2018"
            jobDescription="Donec egestas eros eu ultrices rhoncus. Pellentesque 
            lacinia congue risus, pretium sollicitudin mauris dictum at. Nunc 
            pulvinar posuere sagittis. In imperdiet, felis id dictum bibendum, 
            odio metus lobortis sapien, quis placerat eros diam quis ipsum. Nunc 
            tortor augue, fringilla vel faucibus vel, euismod at tellus. Mauris a 
            leo ac orci sodales eleifend eget non lectus. Etiam auctor ornare 
            sollicitudin. Fusce vehicula, dolor vitae varius placerat, urna nunc 
            cursus nulla, ut semper ante arcu at urna. Aenean placerat id lorem a 
            scelerisque. Cras et lorem mauris. Cras ut erat et mauris varius scelerisque ac ac mi. 
            Integer nec dolor mi. Sed interdum viverra est, nec ullamcorper lorem consectetur in. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div> 
      </Tabs>
    </section>
    <section id="projects" className={`${style.groupA} ${style.container}`}>
      <h2>Some Things I've Built</h2>
      <div className={style.projectCardContainer}>
        <ProjectCard
          title="Project1"
          description="Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
          recteque salutatus cu sit. Oratio scripta euismod vis in, debet
          salutatus vis ei. Nec quis patrioque ex, nec ne nostrud adolescens."
          github="https://github.com/jsoon049"
          gitIcon={["fab", "github"]}
          demoLink="https://github.com/jsoon049"
          demoIcon={["fas", "external-link-alt"]}
          techStack={["React", "Node", "Sass"]} 
        />
        <ProjectCard
          title="Project2"
          description="Vel at aliquip phaedrum, sea ne iudico nonumes,
          tantas accusam appareat vis cu.Lorem ipsum dolor sit amet, dolorem
          recteque salutatus cu sit."
          github="https://github.com/jsoon049"
          gitIcon={["fab", "github"]}
          demoLink="https://github.com/jsoon049"
          demoIcon={["fas", "external-link-alt"]}
          techStack={["React", "Node", "Sass"]}
        />
        <ProjectCard
          title="Project3"
          description="Mauris eleifend tempus aliquet. Quisque ac lacus lobortis 
          nibh congue dignissim. Nam eros dolor, ultrices eget imperdiet quis, 
          auctor at ipsum. Pellentesque non risus libero. Quisque ornare odio 
          sit amet augue venenatis, vel faucibus lacus maximus. Cras et nisl posuere, 
          pulvinar ex ac, tristique ipsum. Aenean ultrices suscipit mattis.."
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
    headerImage: file(relativePath: { eq: "pic2.jpg" }) {
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
