import * as React from "react"
import Image from "next/image"
import styles from "../../styles/Home.module.sass"

const Skill = ({ technology, icon, description }) => (
  <div id={technology} className={styles.skill} >
    <div className={styles.signal}></div>
      <div className={styles.skill__icon_container}>
        <Image className={styles.skill__icon} src={icon} width={55} height={55} />
      </div>
    <p className={styles.experience}>{description}</p>
  </div>
)

export default Skill