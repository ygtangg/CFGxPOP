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
          <h1 class={styles.title}>Solutions</h1>
        </div>
      </div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="/emptypfp.png"></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Person Name</h1>
          <p><i>Organization Name</i></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida. Sed in fermentum tortor, sed sagittis ex. Proin eu nibh ac ipsum luctus pellentesque vel a diam. </p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Person Name</h1>
          <p><i>Organization Name</i></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida. Sed in fermentum tortor, sed sagittis ex. Proin eu nibh ac ipsum luctus pellentesque vel a diam. </p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/emptypfp.png"></img>
        </div>
      </animated.div>
      <animated.div className={styles.leftPerson} style={introAnimation}>
        <div className={styles.leftPersonImg}>
          <img src="/emptypfp.png"></img>
        </div>
        <div className={styles.leftPersonText}>
          <h1>Person Name</h1>
          <p><i>Organization Name</i></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida. Sed in fermentum tortor, sed sagittis ex. Proin eu nibh ac ipsum luctus pellentesque vel a diam. </p>
        </div>
      </animated.div>
      <animated.div className={styles.rightPerson} style={introAnimation}>
        <div className={styles.rightPersonText}>
          <h1>Person Name</h1>
          <p><i>Organization Name</i></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultricies nisl, vel mattis erat sollicitudin quis. Cras euismod tellus eget quam pharetra imperdiet sed sit amet lacus. Curabitur tincidunt arcu nec eleifend gravida. Sed in fermentum tortor, sed sagittis ex. Proin eu nibh ac ipsum luctus pellentesque vel a diam. </p>
        </div>
        <div className={styles.rightPersonImg}>
          <img src="/emptypfp.png"></img>
        </div>
      </animated.div>
    </main >
  );
}