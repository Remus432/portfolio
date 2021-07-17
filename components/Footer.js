import * as React from "react"
import styles from "../styles/Home.module.sass"
import { motion } from "framer-motion"
import Image  from "next/image"

const Footer = ({ github, linkedin, dev }) => (
  <footer className={styles.footer}>
    <p className={styles.footer__text}>Copyright © 2021. All rights reserved</p>
    <div className={styles.footer__icons}>
      <motion.a whileHover={{ translateY: -10 }} href="https://dev.to/remus432" target="_blank">
        <Image className={styles.footer__icon} src={github} width={40} height={40} />
      </motion.a> 
      <motion.a whileHover={{ translateY: -10 }} href="https://www.linkedin.com/in/remus-buhaianu-25b0a2181/" target="_blank">
        <Image className={styles.footer__icon} src={linkedin} width={40} height={40} />
      </motion.a>
      <motion.a whileHover={{ translateY: -10 }} href="https://dev.to/remus432" target="_blank">
        <Image className={styles.footer__icon} src={dev} width={40} height={40} />
      </motion.a> 
    </div>
  </footer>
)

export default Footer