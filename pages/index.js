import Nav from "../components/Nav"
import Header from "../components/Header"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import data from "../data/data.json"
import { ThemeContext } from "../context/ThemeContext"
import { useReducer } from "react"
import { reducer } from "../reducer/reducer"

export default function Home() {
  const { images, skills, stats, projects } = data

  return (
    <ThemeContext.Provider value={useReducer(reducer, { activeSection: "" })}>
      <div>
        <Nav logo={images.logo} />
        <Header dots={images.dots} bgImg={images.bgImg} bgShape={images.bgShape} />
        <About stats={stats} skills={skills} cv={images.cv} profile={images.profile} dev={images["dev_dark"]} github={images["github_dark"]} linkedin={images["linkedin_dark"]} />
        <Projects projects={projects} />
        <Contact />
        <Footer github={images.github} linkedin={images.linkedin} dev={images.dev} />
      </div>
    </ThemeContext.Provider>
  )
}
