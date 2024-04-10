"use client"
import React from 'react';
import {useState} from 'react';
import styles from "./page.module.css";
// Edward Zhang
function ImageButton(){
  const [index, setindex] =useState(0);
  function handleIncrement(){
    setindex((index+1)%3);
  }
  function handleDecrement(){
    setindex((index+2)%3);
  }
  function ImageChange(){
    if(index === 0){
      return(
        <div className={styles.imageContainer}>
        <img src="Bonnie with newborn whale 356.jpg" className={styles.backgroundImage}></img>
        <div className={styles.overlay}>
          <h1>hahahah</h1>
        </div>
      </div>
      );
    }
    else if (index === 1){
      return(
        <div className={styles.imageContainer}>
          <img src="Screen Shot 2023-06-30 at 7.24.43 AM.png" className={styles.backgroundImage}></img>
          <div className={styles.overlay}>
            <h1>hahahah</h1>
          </div>
        </div>
      );
    }
    return(
      <div className={styles.imageContainer}>
          <img src="N Core Banks we found 356.jpg" className={styles.backgroundImage}></img>
          <div className={styles.overlay}>
            <h1>hahahah</h1>
          </div>
      </div>
    );
  }
  return(
    <div>
      <div className={styles.arrowContainer}>
        <button onClick = {handleDecrement} className={styles.transparentButton}><img src='/arrow_left.png' className={styles.imageButton}/></button>
        <button onClick = {handleIncrement} className={styles.transparentButton}><img src='/arrow_right.png' className={styles.imageButton}/></button>
      </div>
      <ImageChange/>
    </div>
  );
}
export default function Profile(){
  return (
    <div>
      <div className={styles.topPage}>
        <div className={styles.leftText}>
          <h1>This was a {"\n"} GIANT collaboration</h1>
          <h3>We would like to thank... for sponsoring this project. {"\n"} Without you guys, we would not be able to...</h3>
        </div>
        <img src='/6267ddaeab-poster.jpeg' className={styles.rightImage}></img>
      </div>
      <ImageButton/>
    </div>
  );
}
