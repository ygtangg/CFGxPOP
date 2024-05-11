"use client";
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { useTrail, useSpring, animated } from 'react-spring';

function LeftPic() {

}

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
            <img src='\Bonnie with newborn whale 356.jpg'  alt="" className={styles.backgroundImage}></img>
          </picture>
          <div className={styles.overlay}></div>
          <div className={styles.titleDiv}>
            <h1 className={styles.title}>Solutions</h1>
          </div>
        </div>
      </div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="dr-sylvia-earle.jpg" alt="Picture of Dr. Sylvia Earle" style={{height:200,width:200}}></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Dr. Sylvia Earle</h1>
          <p>Marine Biologist, Ocean Explorer & Advocate</p>
          <p><i>&quot;It&apos;s a dangerous place to be a sea creature today. But because the problems originate with us, we are the source of solutions.&quot;</i></p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Dr. Carl Safina</h1>
          <p>Ecologist & Author</p>
          <p><i>&quot;It is said that where there&apos;s life there&apos;s hope, and so no place can inspire us with more hopefulness than that great, life-making sea -that singular, wondrous ocean covering the blue planet.&quot;</i></p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/dr-carl-safina.jpg"  alt="Picture of Dr. Carl Safina"style={{height:200,width:200}}></img>
        </div>
      </animated.div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="/paul-watson.jpg"  alt="Picture of Paul Watson"  style={{height:200,width:200}}></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Paul Watson</h1>
          <p>Conservationist & Environmental Activist</p>
          <p><i>&quot;This is not just a movement to protect whales and sharks, seals and fish, it is a movement to protect humanity and all other species on this planet.&quot;</i></p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Ralph Chami</h1>
          <p>Economist</p>
          <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida.</i></p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/ralph-chami.jpg" alt="Picture of Ralph Chami" style={{height:200,width:200}}></img>
        </div>
      </animated.div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="/dr-michael-moore.jpg"  alt="Picture of Dr. Michael Moore" style={{height:200,width:200}}></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Dr. Michael Moore</h1>
          <p>Marine Biologist</p>
          <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida.</i></p>
        </div>
      </animated.div>
    </main >
  );
}