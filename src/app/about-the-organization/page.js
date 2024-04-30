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

  // var intervalID = window.setInterval(myCallback, 3000);
  // function myCallback() {
  //   setindex((index + 1) % 4);
  // }

  function preloadImage() {
    var img;

    img=new Image();
    img.src="Screen Shot 2023-06-30 at 7.24.43 AM.png";

    img=new Image();
    img.src="otter_1.jpg";

    img=new Image();
    img.src="dolphin_1.jpg";
  }

  function ImageChange() {
    if (index === 0) {
      return (
        <img src="whale_1.jpg" className={styles.backgroundImage} alt=""></img>
      );
    }
    else if (index === 1) {
      return (
        <img src="Screen Shot 2023-06-30 at 7.24.43 AM.png" className={styles.backgroundImage} alt=""></img>
      );
    }
    else if (index === 2) {
      return (
        <img src="otter_1.jpg" className={styles.backgroundImage} alt=""></img>
      );
    }
    return (
      <img src="dolphin_1.jpg" className={styles.backgroundImage} alt=""></img>
    );
  }
  
  preloadImage()
  return (
    <div className={styles.imageContainer}>
      <ImageChange/>
      <div className={styles.overlay}>
        <div className={styles.leftButton} onClick={handleDecrement}>
          <div className={styles.transparentButton}><img src='/arrow_left.png' className={styles.imageButton} alt=""></img></div>
        </div>
        <div className={styles.middleText}>
          <img src="POP logo.png" className={styles.logo} alt=""></img>
          <h1>Plastic Ocean Project</h1>
          <p>&quot;This environmental organization is a favorite of mine, not only because of the importance of its mission and the passion of its leaders, but also because the culture of the organization is to try to support other worthy environmental organizations. So it is the exact opposite of too many silo environmental organizations.&quot; - Jack Spruill, Spruill Farm Conservation Project</p>
        </div>
        <div className={styles.rightButton} onClick={handleIncrement}>
          <div className={styles.transparentButton}><img src='/arrow_right.png' className={styles.imageButton} alt=""/></div>
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
        <img src='uncw-marine-mammal-lab.jpg' className={styles.rightImage} alt=""></img>
      </div>
      <ImageButton />
    </div>
  );
}
