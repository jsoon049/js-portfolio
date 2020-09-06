import React from "react"
import Navbar from "./navbar.js"
import Footer from "./footer.js"
import { useStaticQuery, graphql } from "gatsby"
 
export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        publicURL
      }
    }
  `)

  const navlinks = [
    { name: "ABOUT", to: "#about" },
    { name: "EXPERIENCE", to: "#experience" }, 
    { name: "PROJECTS", to: "#projects" },
    { name: "SKILLS", to: "#skills" },
    { name: "CONTACT", to: "#contact" },
    { name: "RESUME", to: data.pdf.publicURL }, 
  ];

  return (
    <div>
      <Navbar links={navlinks}/>
      {children}
      <Footer />
    </div>
  )
} 
