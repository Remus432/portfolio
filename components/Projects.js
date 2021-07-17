import * as React from "react"
import Project_Card from "./subcomponents/Project_Card"
import { motion } from "framer-motion"
import styles from "../styles/Home.module.sass"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useInView } from "react-intersection-observer"

const Projects = ({ projects }) => {
  const [state, dispatch] = useContext(ThemeContext)
  const { ref, inView, entry } = useInView({ threshold: 0.2 })

  useEffect(() => {
    inView && dispatch({ payload: { section: "projects" }})
  }, [inView])

  return (
    <motion.div ref={ref} name="projects" className={styles.projects}>
      <h2 className={styles.subheadline}>Projects</h2>
      <div className={styles.projects__grid}>
        { projects.map((project, i) => {
          return <Project_Card key={i} video={project.video} name={project.name} live={project.live} thumbnail={project.thumbnail} code={project.code} />
        }) }
      </div>
    </motion.div>
  )
}

export default Projects