"use client";
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { useTrail, useSpring, animated } from 'react-spring';

export default function Home() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200 && !animationComplete) { // Change 200 to the scroll threshold you desire
        setScrolledPast(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationComplete]);

  const items = [
    'Evans Hall - 6/8/2024',
    'Main Stacks - 6/9/2024',
    'Unit 2 Basement - 7/11/2024',
    'Soda Hall Showers - 7/28/2024',
    'Moffit 409 - 8/1/2024',
    'Dwinelle 145 - 8/31/2024',
    'Evans Hall - 6/8/2024',
    'Main Stacks - 6/9/2024',
    'Unit 2 Basement - 7/11/2024',
    'Soda Hall Showers - 7/28/2024',
    'Moffit 409 - 8/1/2024',
    'Dwinelle 145 - 8/31/2024'
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0 },
    to: { opacity: scrolledPast ? 1 : 0 },
    config: { duration: 500 },
    onRest: () => {
      if (!animationComplete) {
        setAnimationComplete(true);
      }
    }
  });

  const introAnimation = useSpring({
    opacity: scrolledPast ? 1 : 0,
    config: { duration: 2000 },
    onRest: () => {
      if (!animationComplete) {
        setAnimationComplete(true);
      }
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='trailer'>
          <video width="100%" autoPlay muted controls alt="Documentary Trailer">
            <source src="\356_trailer__2160p__730.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.title}>
          <h1>If the Ocean Could Talk:</h1>
          <h1>A Voice for the North Atlantic</h1>
        </div>
        <animated.div className={styles.intro} style={introAnimation}>
          <p><i>If the Ocean Could Talk</i> is a documentary about plastic pollution in the Atlantic Ocean filmed through the lens of saving <i>356</i>, a newborn right whale killed and found on the shores of Cape Hatteras, NC. The full length documentary explores the death of <i>356</i>, the inspiration for its namesake short film, and various human activities that may have caused it, as well as the impact those human activities have on aquatic wildlife and the Coastal Atlantic ecosystem as a whole. Through the story of <i>356</i>, we hope that viewers take away a better understanding of what they can do to help save the whales, and in doing so, save the marine ecosystem as a whole.</p>
        </animated.div>
        <img src='/circular_logo.png' style={{maxHeight:'200px'}} alt=""></img>
        <div className={styles.movie_row}>
          <div className={styles.movie_poster}>
            <img src='/6267ddaeab-poster.jpeg' alt="Promotional Poster"></img>
          </div>
          <div className={styles.showings}>
            <div className={styles.showings_title}>
              <h1>On Screen: <b>6/8/2024</b></h1>
            </div>
            <div className={styles.showings_list}>
              {trail.map((style, index) => (
                <animated.div key={index} style={style}>
                  <ul>
                    <li><h3>{items[index]}</h3></li>
                  </ul>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}