/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./page.module.css";
import Link from "next/link";
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
        <div className={styles.imageContainer}>
          <picture>
            <img src='Aerial of whale 356.jpg' className={styles.backgroundImage} alt=""></img>
          </picture>
          <div className={styles.overlay}></div>
          <h1 className={styles.title}>Support Our Mission</h1>
          <div className={styles.buttonContainer}>
            <button onClick={() => scrollToElement('donate')} className={styles.button}>Donate</button>
            <button onClick={() => scrollToElement('screening')} className={styles.button} >Screenings</button>
            <button onClick={() => scrollToElement('volunteer')} className={styles.button}>Volunteer</button>
            <button onClick={() => scrollToElement('sponsor')} className={styles.button}>Sponsor</button>
          </div>
        </div>

        {/* Main body sections */}
        <div className={styles.bodyContainer}>
          <div className={styles.bodyRow}>
            <div className={styles.text}>
              {/* donate */}
              <div className={styles.mainTexts} id="donate">
                <h2 className={styles.subTitle}>Donate</h2>
                <p>Want to help make an ocean of difference? We&apos;re raising money to help breathe life 
                  back into a newborn right whale in our documentary, If The Ocean Could Talk: A Voice 
                  For the North Atlantic. This promises to be a heart-stopping cinematic journey narrated 
                  by Plastic Ocean Project founder Bonnie Monteleone with composer and accomplished double 
                  bass player Garth Stevenson as they journey parts of the North Atlantic Ocean. This video, 
                  called 356, made it into 8 film festivals, 3 international! It now serves as our trailer 
                  to &quot;If the Ocean Could Talk - A Voice for the North Atlantic.&quot;</p>
                <Link className={styles.buttonLink} href="https://www.gofundme.com/f/if-the-ocean-could-talk-documentary-trailer?utm_campaign=p_cp+share-sheet&utm_medium=referral&utm_source=widget">
                  <button type="button">
                      Support the Film 
                  </button>
                </Link>
                <p>If you want to help save our oceans and contribute to the cause, please donate to the organizations 
                  that worked on the documentary.</p>
                <Link className={styles.buttonLink} href="https://www.flipcause.com/secure/cause_pdetails/MTMxMTUy">
                  <button type="button">
                      Make a Donation 
                  </button>
                </Link>
              </div>
              
              {/* screening */}
              <div className={styles.mainTexts} id='screening'>
                <h2 className={styles.subTitle}>Organize Screenings</h2>
                <p style={{color: "rgb(67, 130, 178)"}}><i>The Ocean Is Calling, Are You Listening?</i></p>
                <p>Be a part of the movement to save our oceans! We are looking for passionate individuals and 
                  organizations to help us bring our documentary, If The Ocean Could Talk: A Voice For the North 
                  Atlantic, to audiences around the world. Whether it&apos;s at a film festival, a movie theater, or a 
                  community event, your support can make a huge difference. To organize a screening in your area, 
                  please contact POP for assistance with details and logistics. Let&apos;s work together to share this 
                  heart-stopping cinematic journey and amplify the voice for the North Atlantic right whale.</p>
                <button type="button" onClick={() => router.push('mailto:contact@plasticoceanproject.org')}>
                  Organize a Screening
                </button>
              </div>

              {/* volunteer */}
              <div className={styles.mainTexts} id='volunteer'>
                <h2 className={styles.subTitle}>Volunteer with an Organization</h2>
                <p>One of the ways we bring awareness is through local screenings at film festivals, movie 
                  theaters, and other events. To help organize a screening in your area, 
                  please <a target="_top" href='mailto:emily@plasticoceanproject.org'>contact us</a> and we 
                  can help you figure out details and logistics.</p>
                <Link className={styles.buttonLink} href="https://www.plasticoceanproject.org/volunteer.html">
                  <button type="button">
                      Become a Volunteer
                  </button>
                </Link>
              </div>

              {/* sponsor */}
              <div className={styles.mainTexts} id='sponsor'>
                <h2 className={styles.subTitle}>Sponsor Us</h2>
                <p>If you are part of an organization or company looking to help make a difference, reach out 
                  to us about sponsorship opportunities! The film and all of the organizations who helped create 
                  it are looking for sponsors and would love to collaborate with you on current and future projects.</p>
                <button type="button" onClick={() => router.push('mailto:bonnie@plasticoceanproject.org')}>
                  Become a Sponsor
                </button>
              </div>

            </div>
            <div className={styles.logos}>
              <a href="https://plasticoceanproject.org"><img src='circular_logo.png' alt=""></img></a>
              <a href='https://codeforgoodberkeley.github.io/index.html'><img src='CFGLogoClear.png' alt=""></img></a>
              <a href="https://google.com"><img src='emptypfp.png' alt=""></img></a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
