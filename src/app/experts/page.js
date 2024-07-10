/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { useSpring, animated } from 'react-spring';

/* Experts and their quotes */
const experts = [
  { id: 1,
    image: 'expert/dr-sylvia-earle.jpg',
    title: 'Dr. Sylvia Earle',
    profession: 'Marine Biologist, Ocean Explorer & Advocate',
    quote: 'It&apos;s a dangerous place to be a sea creature today. But because the problems \
            originate with us, we are the source of solutions.'
  },
  { id: 2,
    image: 'expert/dr-carl-safina.jpg',
    title: 'Dr. Carl Safina',
    profession: 'Ecologist & Author',
    quote: 'It is said that where there&apos;s life there&apos;s hope, and so no place can \
            inspire us with more hopefulness than that great, life-making sea -that singular, \
            wondrous ocean covering the blue planet.'
  },
  { id: 3,
    image: 'expert/paul-watson.jpg',
    title: 'Paul Watson',
    profession: 'Conservationist & Environmental Activist',
    quote: 'This is not just a movement to protect whales and sharks, seals and fish, it is \
            a movement to protect humanity and all other species on this planet.'
  },
  { id: 4,
    image: 'expert/ralph-chami.jpg',
    title: 'Ralph Chami',
    profession: 'Economist',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies \
            nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra \
            imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida.'
  },
  { id: 5,
    image: 'expert/dr-michael-moore.jpg',
    title: 'Dr. Michael Moore',
    profession: 'Marine Biologist',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies \
            nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra \
            imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida.'
  }
]

export default function Home() {
  /* Scrolling Animation */
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
        <div className={styles.imageContainer}>
          <picture>
            <img src="expert/bonnie_and_whale.jpg"  alt="Bonnie with newborn whale 356" className={styles.backgroundImage}></img>
          </picture>
          <div className={styles.overlay}></div>
          <div className={styles.titleDiv}>
            <h1 className={styles.title}>Hear From Our Experts</h1>
          </div>
        </div>
      </div>
      <div className={styles.experts}>
        {experts.map(item => (
          <div key={item.id}>
            {item.id % 2 === 1 ? (
              <animated.div className={styles.leftPerson} style={introAnimation}>
                <div className={styles.leftPersonImg}>
                  <img src={item.image} alt={item.title} style={{height:200,width:200}}></img>
                </div>
                <div className={styles.leftPersonText}>
                  <h1>{item.title}</h1>
                  <p>{item.profession}</p>
                  <p><i>&quot;{item.quote}&quot;</i></p>
                </div>
              </animated.div>
            ) : (
              <animated.div className={styles.rightPerson} style={introAnimation}>
                <div className={styles.rightPersonText}>
                  <h1>{item.title}</h1>
                  <p>{item.profession}</p>
                  <p><i>&quot;{item.quote}&quot;</i></p>
                </div>
                <div className={styles.rightPersonImg}>
                  <img src={item.image} alt={item.title} style={{height:200,width:200}}></img>
                </div>
              </animated.div>
            )}
          </div>
        ))}
      </div>
    </main >
  );
}