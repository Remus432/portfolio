import * as React from "react"
import Image from "next/image"
import { useState, useEffect, useContext } from "react"
import styles from "../styles/Home.module.sass"
import { motion } from "framer-motion"
import { Link, animateScroll as scroll } from "react-scroll"
import { ThemeContext } from "../context/ThemeContext"

const Nav = ({ logo }) => {
  const [scrollPos, setScroll] = useState(0)
  const [state] = useContext(ThemeContext)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY)
    })
  }, [scrollPos])


  return (
    <div>
      <motion.nav animate={{ translateY: [-100, 0] }} className={
        scrollPos < 150 ? styles.nav : styles.fixed
      }>
        <Link to="home" smooth={true} duration={800}>
          <Image src={logo} alt="Remus Buhaianu Logo" width={80} height={80} />
        </Link>
        <ul>
          <li>
            <Link className={state.activeSection == "about" ? styles.active : ""} to="about" smooth={true} duration={800} offset={-40}>about</Link>
          </li>
          <li>
            <Link className={state.activeSection == "projects" ? styles.active : ""} to="projects" smooth={true} duration={800} offset={-40}>projects</Link>
          </li>
          <li>
            <Link className={state.activeSection == "contact" ? styles.active : ""} to="contact" smooth={true} duration={800} offset={-40}>contact</Link>
          </li>
        </ul>
      </motion.nav>
  </div>
  )
}

export default Nav