import * as React from "react"
import styles from "../styles/Home.module.sass"
import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useInView } from "react-intersection-observer"

const Header = ({ dots, bgImg, bgShape }) => {
  const [state, dispatch] = useContext(ThemeContext)
  const { ref, inView, entry } = useInView({ threshold: 0.2 })

  useEffect(() => {
    inView && dispatch({ payload: { section: "" }})
  }, [inView])

  return (
    <div ref={ref} name="home" className={styles.container}>
      <header className={styles.header}>
        <img className={styles.shape} src={bgShape} />
        <div className={styles.flexContainer}>
          <motion.div animate={{ translateX: [-350, 0]}} className={styles.headlineContainer}>
            <img className={styles.dots} src={dots} />
            <h1 className={styles.headline}>Hej Allihopa!</h1>
          </motion.div>
          <motion.div animate={{ translateX: [-500, 0]}} className={styles.pContainer}>
            <p className={styles.p}>
            I'm Remus, an 19 year old frontend engineer with a passion for building <span className={styles.highlight}>tools of the future</span>
            </p>
          </motion.div>
        </div>
        <img className={styles.bgImg}  src={bgImg} />
      </header>
    </div>
  )
}

export default Header