import * as React from "react"
import styles from "../../styles/Home.module.sass"
import Image from "next/image"

const Stats = ({ numb, text, shape }) => (
  <div className={styles.stat}>
    <p className={styles.numb}>{numb}</p>
    <p className={styles.text}>{text}</p>
    <div className={styles.pill} >
      <Image src={shape} width={250} height={200}/>
    </div> 
  </div>
)

export default Stats