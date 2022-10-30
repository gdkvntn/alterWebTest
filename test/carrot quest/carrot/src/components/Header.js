import React from "react"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div>
      <button onClick={() => console.log(styles.header)}>asd</button>
    </div>
  )
}
