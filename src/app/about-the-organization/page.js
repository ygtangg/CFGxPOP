"use client"
import React from 'react';
import { useState } from 'react';
import styles from "./page.module.css";
// Edward Zhang
function ImageButton() {
  const [index, setindex] = useState(0);
  function handleIncrement() {
    setindex((index + 1) % 4);
  }
  function handleDecrement() {
    setindex((index + 3) % 4);
  }
  function ImageChange() {
    if (index === 0) {
      return (
        <img src="whale_1.jpg" className={styles.backgroundImage}></img>
      );
    }
    else if (index === 1) {
      return (
        <img src="Screen Shot 2023-06-30 at 7.24.43 AM.png" className={styles.backgroundImage}></img>
      );
    }
    else if (index === 2) {
      return (
        <img src="otter_1.jpg" className={styles.backgroundImage}></img>
      );
    }
    return (
      <img src="dolphin_1.jpg" className={styles.backgroundImage}></img>
    );
  }
  return (
    <div className={styles.imageContainer}>
      <ImageChange />
      <div className={styles.overlay}>
        <div className={styles.leftButton}>
          <button onClick={handleDecrement} className={styles.transparentButton}><img src='/arrow_left.png' className={styles.imageButton} /></button>
        </div>
        <div className={styles.middleText}>
          <img src="POP logo.png"></img>
          <h1>Plastic Ocean Project</h1>
          <h3>"This environmental organization is a favorite of mine,</h3>
          <h3>not only because of the importance of its mission and</h3>
          <h3>the passion of its leaders, but also because the culture</h3>
          <h3>of the organization is to try to support other worthy</h3>
          <h3>environmental organizations. So it is the exact opposite</h3>
          <h3>of too many silo environmental organizations." - Jack Spruill,</h3>
          <h3>Spruill Farm Conservation Project</h3>
        </div>
        <div className={styles.rightButton}>
          <button onClick={handleIncrement} className={styles.transparentButton}><img src='/arrow_right.png' className={styles.imageButton} /></button>
        </div>
      </div>
    </div>
  );
}
export default function Profile() {
  return (
    <div>
      <div className={styles.topPage}>
        <div className={styles.leftText}>
          <h1>This was a {"\n"} GIANT collaboration</h1>
          <h3>We would like to thank... for sponsoring this project. {"\n"} Without you guys, we would not be able to...</h3>
        </div>
        <img src='uncw-marine-mammal-lab.jpg' className={styles.rightImage}></img>
      </div>
      <ImageButton />
    </div>
  );
}
