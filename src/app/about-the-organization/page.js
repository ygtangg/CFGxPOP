/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./page.module.css";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <><div className={styles.topPage}>
      <div className={styles.leftText}>
        <h1>This was a {"\n"} GIANT collaboration</h1>
        <h3>We would like to thank... for sponsoring this project. {"\n"} Without you guys, we would not be able to...</h3>
      </div>
      <img src='uncw-marine-mammal-lab.jpg' className={styles.rightImage} alt=""></img>
    </div><div>
      <h2>Plastic Ocean Project</h2>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <img src='whale_1.jpg' alt='slide 2'/>
          </div>
          <div className={styles.embla__slide}>
            <img src='otter_1.jpeg' alt='slide 2'/>
          </div>
          <div className={styles.embla__slide}>
            <img src='dolphin_1.jpg' alt='slide 3'/>
          </div>
        </div>
        <button className={styles.embla__prev} onClick={scrollPrev}>&#8249;</button>
        <button className={styles.embla__next} onClick={scrollNext}>&#8250;</button>
      </div>
    </div></>
  );
}

/*
import Image from 'next/image';
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

  function preloadImages() {
    var images = []; // Array to store image objects

    // Create image objects and set their src properties
    var img1 = new Image();
    img1.src = "Screen Shot 2023-06-30 at 7.24.43 AM.png";
    images.push(img1); // Add image object to the array

    var img2 = new Image();
    img2.src = "otter_1.jpg";
    images.push(img2); // Add image object to the array

    var img3 = new Image();
    img3.src = "dolphin_1.jpg";
    images.push(img3); // Add image object to the array

    // Return the array of preloaded images
    return images;
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
  
  preloadImages()
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
*/
