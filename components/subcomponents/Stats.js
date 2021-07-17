import * as React from "react"
import styles from "../../styles/Home.module.sass"

const Stats = ({ numb, text, shape }) => (
  <div className={styles.stat}>
    <p className={styles.numb}>{numb}</p>
    <p className={styles.text}>{text}</p>
    <img className={styles.pill} src={shape} />
  </div>
)

export default Stats