import React from "react"
import * as styles from "./header.module.css"

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <span>Бизнес-шоу:</span>
        </div>
        <div className={styles.starContainer}>
          <span className={styles.text + " " + styles.textRight}>
            <span>Маркетинг </span>
            <span>vs</span> <span>продажи</span>
          </span>
          <span className={styles.star}></span>
        </div>
      </div>
    </section>
  )
}
