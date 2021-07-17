import * as React from "react"
import styles from "../../styles/Home.module.sass"

const Form = () => {
  return (
    <form onClick={(e) => e.preventDefault()} className={styles.form}>
      <input className={styles.input} type="text" placeholder="Your Name" />
      <input className={styles.input} type="email" placeholder="Your Email" />
      <input className={styles.input} type="text" placeholder="Subject" />
      <textarea className={styles.textarea} placeholder="What do you want to talk about?"></textarea>
      <button className={styles.submit}>Let's talk!</button>
  </form>
  )
}

export default Form