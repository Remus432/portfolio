import * as React from "react"
import Image from "next/image"
import Form from "./subcomponents/Form"
import styles from "../styles/Home.module.sass"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useInView } from "react-intersection-observer"

const Contact = () => {
  const [state, dispatch] = useContext(ThemeContext)
  
  const { ref, inView, entry } = useInView({ threshold: 0.4 })
  
  useEffect(() => {
    inView && dispatch({ payload: { section: "contact" }})
  }, [inView])

  return (
    <div ref={ref} name="contact" className={styles.contact}>
      <h2 className={styles.subheadline}>Contact</h2>
      <div className={styles.contact__container}>
        <div className={styles.contact__bg}>
          <Image src="https://res.cloudinary.com/dqmcvtuhi/image/upload/v1626427504/40Z_2105.w023.n001.595B.p1.595_mjzpca.jpg" height={605} width={1100} />
        </div>
        <div className={styles.contact__text}>
          <p>Wanna say hi?</p>
          <p>Or perhap you're curious to see if we could work together?</p>
          <p>If so, get in touch by completing the form - I'm one email away ;)</p>
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Contact