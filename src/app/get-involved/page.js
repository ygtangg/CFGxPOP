"use client";
import styles from "./page.module.css";
import { animateScroll } from 'react-scroll';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to handle smooth scroll
  const scrollToElement = (elementId) => {
    animateScroll.scrollTo(document.getElementById(elementId).offsetTop, {
      duration: 600, 
      smooth: 'easeInOutQuart' 
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div class={styles.imageContainer}>
          <picture>
            <img src='/Aerial of whale 356.jpg' className={styles.backgroundImage} alt=""></img>
          </picture>
          <div class={styles.overlay}></div>
          <h1 class={styles.title}>Support Our Mission</h1>
          <div class={styles.buttonContainer}>
            <button onClick={() => scrollToElement('donate')} class={styles.button}>Donate</button>
            <button onClick={() => scrollToElement('screening')} class={styles.button} >Screening</button>
            <button onClick={() => scrollToElement('volunteer')} class={styles.button}>Volunteer</button>
            <button onClick={() => scrollToElement('sponsor')} class={styles.button}>Sponsor</button>
          </div>
        </div>
        <div class={styles.mainTexts} id="donate">
          <h2>Donate</h2>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
        </div>
        <div class={styles.mainTexts} id='screening'>
          <h2>Organize Screenings</h2>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
        </div>
        <div class={styles.mainTexts} id='volunteer'>
          <h2>Volunteer with an Organization</h2>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
        </div>
        <div class={styles.mainTexts} id='sponsor'>
          <h2>Sponsor Us</h2>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
        </div>
      </div>
    </main>
  );
}
