import React from "react"
import * as styles from "./sectionOne.module.css"

export default function SectionOne() {
  return (
    <section className={styles.SectionOne}>
      <div className={styles.wrapper}>
        <div className={styles.columnOne}>
          <div className={styles.subscribe}>
            <p>
              Бизнес-шоу, в котором общаемся с экспертами <br />
              digital-маркетинга и руководителями продаж
              <br /> о том, как совместно достигать потрясающих результатов.
            </p>
            <button className={styles.subscribeBtn}>Подписаться</button>
            <div className={styles.subscribeImg}></div>
          </div>

          <div>
            <p>Слушайте нас, где удобно</p>
            <div className={styles.imgContainer}>
              <div className={styles.img + " " + styles.music}>
                <a href="#"></a>
              </div>
              <div className={styles.img + " " + styles.spotify}>
                <a href="#"></a>
              </div>
              <div className={styles.img + " " + styles.share}>
                <a href="#"></a>
              </div>
              <div className={styles.img + " " + styles.vk}>
                <a href="#"></a>
              </div>
              <div className={styles.img + " " + styles.yt}>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className={styles.avatarOne}></div>
        </div>
        <div className={styles.avatarSecond}>
          <div className={styles.avatarSecondName}>
            <p>Дима Сергеев</p>
            <p>CEO Carrot quest</p>
          </div>
        </div>
        <div className={styles.columnThird}>
          <div className={styles.columnThirdTop}>
            <div className={styles.imgThird}></div>
            <div className={styles.avatarThird}></div>
          </div>
          <div className={styles.columnThirdMid}>
            <a href="#">новый выпуск</a>
          </div>
          <div className={styles.columnVideo}></div>
        </div>
      </div>
    </section>
  )
}
