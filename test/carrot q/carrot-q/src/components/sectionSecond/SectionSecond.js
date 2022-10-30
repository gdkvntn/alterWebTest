import React from "react"
import * as styles from "./sectionSecond.module.css"
const img = "../../images/video/video.png"
let arr = Array(12).fill({
  url: "static/video.png",
  text: "Как построить эффективный отдел продаж",
})

export default function SectionSecond() {
  const activeVideo = event => {
    const ul = document.querySelector(
      ".sectionSecond-module--playlistItems--bjCpb"
    )
    ul.childNodes.forEach(el => {
      if (el.classList.contains("sectionSecond-module--active--racoY")) {
        el.classList.remove("sectionSecond-module--active--racoY")
      }
    })
    event.currentTarget.classList.add("sectionSecond-module--active--racoY")
  }
  return (
    <section>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.title}>Выпуски</h2>
          <p className={styles.text}>
            Подкаст, в котором обсуждаем, как прекратить войну маркетинга и
            продаж. <br />
            Смотрите интервью с экспертами digital-маркетинга и руководителями
            продаж.
            <br /> Рассказываем реальные истории и практики работы этих двух
            направлений.
          </p>
          <div className={styles.avaWrapper}>
            <div className={styles.img + " " + styles.avaOne}></div>
            <div className={styles.img + " " + styles.avaSec}></div>
            <div className={styles.img + " " + styles.avaThird}></div>s
            <span>
              Для SMO, руководителей Digital-маркетинга, ответственного за
              привлечения лидов
            </span>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <div className={styles.video}></div>
            <div className={styles.bottomVideo}>
              <div className={styles.shareWrapper}>
                <span>Поделиться:</span>
                <div className={styles.imgMin + " " + styles.tel}></div>
                <div className={styles.imgMin + " " + styles.faceb}></div>
                <div className={styles.imgMin + " " + styles.vkSec}></div>
                <div className={styles.imgMin + " " + styles.inst}></div>
              </div>
              <p>23 минуты</p>
            </div>
          </div>
          <div className={styles.videoPlayList}>
            <div className={styles.playlistWrapper}>
              <ul className={styles.playlistItems}>
                {arr.map((el, i) => {
                  return (
                    <li key={i} onClick={event => activeVideo(event)}>
                      <span>{i}</span>
                      <img src={el.url}></img>
                      <p>{el.text}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
