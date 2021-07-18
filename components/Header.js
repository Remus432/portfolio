import * as React from "react"
import styles from "../styles/Home.module.sass"
import Image from "next/image"
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
        <div className={styles.flexContainer}>
          <motion.div animate={{ translateX: [-350, 0]}} className={styles.headlineContainer}>
            <div className={styles.dots}>
              <Image src={dots} height={40} width={40} />
            </div>
            <h1 className={styles.headline}>Hej Allihopa!</h1>
          </motion.div>
          <motion.div animate={{ translateX: [-500, 0]}} className={styles.pContainer}>
            <p className={styles.p}>
            I&apos;m Remus, an 19 year old frontend engineer with a passion for building <span className={styles.highlight}>tools of the future</span>
            </p>
          </motion.div>
        </div>
        <div className={styles.bgImg}>
          <Image src={bgImg} height={1250} width={1500} />
        </div>
      </header>
    </div>
  )
}

export default Header