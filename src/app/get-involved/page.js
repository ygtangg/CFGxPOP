"use client";
import styles from "./page.module.css";
import { animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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
        <div className={styles.imageContainer}>
          <picture>
            <img src='/Aerial of whale 356.jpg' className={styles.backgroundImage} alt=""></img>
          </picture>
          <div className={styles.overlay}></div>
          <h1 className={styles.title}>Support Our Mission</h1>
          <div className={styles.buttonContainer}>
            <button onClick={() => scrollToElement('donate')} className={styles.button}>Donate</button>
            <button onClick={() => scrollToElement('volunteer')} className={styles.button}>Volunteer</button>
            <button onClick={() => scrollToElement('sponsor')} className={styles.button}>Sponsor</button>
            <button onClick={() => scrollToElement('screening')} className={styles.button} >Screenings</button>
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyRow}>
            <div className={styles.text}>
              <div className={styles.mainTexts} id="donate">
                <h2 className={styles.subTitle}>Donate</h2>
                <p>If you want to help save our oceans and contribute to the cause, please donate to the organizations that worked on the documentary.</p>
              </div>
              <div className={styles.mainTexts} id='volunteer'>
                <h2 className={styles.subTitle}>Volunteer with an Organization</h2>
                <p>One of the ways we bring awareness is through local screenings at film festivals, movie theaters, and other events. To help organize a screening in your area, please <a target="_top" href='mailto:emily@plasticoceanproject.org'>contact us</a> and we can help you figure out details and logistics.</p>
              </div>
              <div className={styles.mainTexts} id='sponsor'>
                <h2 className={styles.subTitle}>Sponsor Us</h2>
                <p>If you are part of an organization or company looking to help make a difference, reach out to us about sponsorship opportunities! The film and all of the organizations who helped create it are looking for sponsors and would love to collaborate with you on current and future projects.</p>
              </div>
              <div className={styles.mainTexts} id='screening'>
                <h2 className={styles.subTitle}>Organize Screenings</h2>
                <p>One of the ways we reach out to the community is through setting up physical screenings in the area. Whether in a movie theater, film festival, or other event, showing people how they can make a difference helps inspire everyone to help change the world for the better.</p>
              </div>
            </div>
            <div className={styles.logos}>
              <p>many organization logos would go here and link to their websites</p>
              <a href="https://plasticoceanproject.org"><img src='/circular_logo.png' alt=""></img></a>
              <a href='https://codeforgoodberkeley.github.io/index.html'><img src='\CFGLogoClear.png' alt=""></img></a>
              <a href="https://google.com"><img src='/emptypfp.png' alt=""></img></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
