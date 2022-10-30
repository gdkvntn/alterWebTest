import React from "react"
import * as styles from "./footer.module.css"

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLeft}>
          <h3>Слушайте и читайте, где удобно</h3>
          <div className={styles.imgContainer}>
            <div className={styles.img + " " + styles.tel}>
              <a href="#"></a>
            </div>
            <div className={styles.img + " " + styles.face}>
              <a href="#"></a>
            </div>
            <div className={styles.img + " " + styles.vk}>
              <a href="#"></a>
            </div>
            <div className={styles.img + " " + styles.yt}>
              <a href="#"></a>
            </div>
            <div className={styles.img + " " + styles.inst}>
              <a href="#"></a>
            </div>
          </div>
          <div className={styles.heart}></div>
        </div>
        <div className={styles.footerRight}>
          <h3>
            Подпишитесь на уведомления
            <br /> о выходе новых материалов
          </h3>
          <input
            type="email"
            className={styles.mail}
            placeholder="Введите ваш e-mail"
          />
          <input type="submit" className={styles.sub} value="Подписаться" />

          <div className={styles.footerStarOne}></div>
          <div className={styles.footerStarSec}></div>
        </div>
      </div>
    </section>
  )
}
