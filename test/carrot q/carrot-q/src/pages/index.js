import React from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import * as styles from "../components/index.module.css"
import SectionOne from "../components/sectionOne/SectionOne"
import SectionSecond from "../components/sectionSecond/sectionSecond"

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <Header />

        <SectionOne />
        <SectionSecond />
      </div>
      <Footer />
    </>
  )
}
