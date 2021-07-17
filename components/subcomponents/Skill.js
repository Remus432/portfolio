import * as React from "react"
import styles from "../../styles/Home.module.sass"

const Skill = ({ technology, icon, description }) => (
  <div id={technology} className={styles.skill} >
    <div className={styles.signal}></div>
    <img className={styles.skill__icon} src={icon} />
    <p className={styles.experience}>{description}</p>
  </div>
)

export default Skill