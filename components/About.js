import * as React from "react"
import Image from "next/image"
import Skill from "./subcomponents/Skill"
import Stats from "./subcomponents/Stats"
import styles from "../styles/Home.module.sass"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const About = ({ stats, profile, skills, dev, github, linkedin, cv }) => {
  const [state, dispatch] = useContext(ThemeContext)
  
  const { ref, inView, entry } = useInView({ threshold: 0.2 })
  
  useEffect(() => {
    inView && dispatch({ payload: { section: "about" }})
  }, [inView])

  return (
    <div ref={ref} name="about" className={styles.about}>
      <h2 className={styles.subheadline}>About</h2>
      <div className={styles.about__container}>
        <div>
          <div className={styles.profile}>
            <Image className={styles.headshot} src={profile} width={550} height={300} />
            <a href="/cv.pdf" rel="noreferrer" download>
              <button className={styles.cv}>DOWNLOAD CV &nbsp;&nbsp;<Image src={cv} height={50} width={50} /></button>
            </a>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} >
              <a href="https://dev.to/remus432" rel="noreferrer" target="_blank">
                <motion.div whileHover={{ translateY: -10 }}>
                  <Image src={dev} height={22} width={55} />
                </motion.div>
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://github.com/Remus432" rel="noreferrer" target="_blank">
                <motion.div whileHover={{ translateY: -10 }}>
                  <Image src={github} height={32} width={55} />
                </motion.div>
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/remus-buhaianu-25b0a2181/" rel="noreferrer" target="_blank">
                <motion.div whileHover={{ translateY: -10 }}>
                  <Image src={linkedin} height={32} width={55} />
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.expertise}>
          <div className={styles.skills}>
            { skills.map((skill, i) => <Skill key={i} description={skill.description} technology={skill.technology} icon={skill.icon} />) }
          </div>
          <div className={styles.stats}>
            { stats.map((stat, i) => <Stats key={i} numb={stat.numb} text={stat.text} shape={stat.shape} /> ) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About