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
        <div class={styles.imageContainer}>
          <picture>
            <img src='\Bonnie with newborn whale 356.jpg' className={styles.backgroundImage} alt=""></img>
          </picture>
          <div class={styles.overlay}></div>
          <div class={styles.titleDiv}>
            <h1 class={styles.title}>Solutions</h1>
          </div>
        </div>
      </div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="dr-sylvia-earle.jpg"></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Dr. Sylvia Earle</h1>
          <p>Marine Biologist, Ocean Explorer & Advocate</p>
          <p><i>"It's a dangerous place to be a sea creature today. But because the problems originate with us, we are the source of solutions."</i></p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Dr. Carl Safina</h1>
          <p>Ecologist & Author</p>
          <p><i>'"It is said that where there's life there's hope, and so no place can inspire us with more hopefulness than that great, life-making sea -that singular, wondrous ocean covering the blue planet."</i></p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/dr-carl-safina.jpg"></img>
        </div>
      </animated.div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="/paul-watson.jpg"></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Paul Watson</h1>
          <p>Conservationist & Environmental Activist</p>
          <p><i>"This is not just a movement to protect whales and sharks, seals and fish, it is a movement to protect humanity and all other species on this planet."</i></p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Person Name</h1>
          <p>Person Description</p>
          <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida. Sed in fermentum tortor, sed sagittis ex. Proin eu nibh ac ipsum luctus pellentesque vel a diam. </i></p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/emptypfp.png"></img>
        </div>
      </animated.div>
    </main >
  );
}