import * as React from "react"
import styles from "../../styles/Home.module.sass"
import { motion } from "framer-motion"

const Project_Card = ({ name, live, thumbnail, code }) => {
  const hoverStart = (e) => {
    e.target.classList.add("hovered")
  }

  const hoverEnd = (e) => {
    e.target.classList.remove("hovered")
  }

  return (
    <motion.div whileHover={{ translateY: -10, boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)" }} className={styles.project}>
      <img className={styles.project__thumbnail} src={thumbnail} />
      <p className={styles.project__name}>{name}</p>
      <div className={styles.project__links}>
        <motion.a onHoverStart={hoverStart} onHoverEnd={hoverEnd} className={styles.btn__reverse} href={code} target="_blank">View Code</motion.a>
        <a className={styles.btn__default} href={live} target="_blank">Live Project</a>
      </div>
  </motion.div>
  )
}

export default Project_Card