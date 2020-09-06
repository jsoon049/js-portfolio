import React from "react"
import Navbar from "./navbar.js"
import Footer from "./footer.js"
import resume from '/Users/jeremysoong/Desktop/js-portfolio/static/resume.pdf'  

const navlinks = [
  { name: "ABOUT", to: "#about" },
  { name: "EXPERIENCE", to: "#experience" }, 
  { name: "PROJECTS", to: "#projects" },
  { name: "SKILLS", to: "#skills" },
  { name: "CONTACT", to: "#contact" },
  { name: "RESUME", to: resume }, 
];
 
export default function Layout({ children }) {
  return (
    <div>
      <Navbar links={navlinks}/>
      {children}
      <Footer />
    </div>
  )
}
