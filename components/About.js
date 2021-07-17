import * as React from "react"
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
            <img className={styles.headshot} src={profile} />
            <a href="/cv.pdf" download>
              <button className={styles.cv}>DOWNLOAD CV <img src={cv} /></button>
            </a>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} >
              <a href="https://dev.to/remus432" target="_blank">
                <motion.img whileHover={{ translateY: -10 }} src={dev} />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://github.com/Remus432" target="_blank">
                <motion.img whileHover={{ translateY: -10 }} src={github} />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/remus-buhaianu-25b0a2181/" target="_blank">
                <motion.img whileHover={{ translateY: -10 }} src={linkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.expertise}>
          <div className={styles.skills}>
            { skills.map(skill => <Skill description={skill.description} technology={skill.technology} icon={skill.icon} />) }
          </div>
          <div className={styles.stats}>
            { stats.map(stat => <Stats numb={stat.numb} text={stat.text} shape={stat.shape} /> ) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About