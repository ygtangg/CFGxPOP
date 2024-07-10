/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Link from "next/link";
import dynamic from 'next/dynamic';
import 'react-multi-carousel/lib/styles.css';

// Import react-multi-carousel dynamically to prevent SSR issues
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 1
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 1
  }
}

const carouselItems = [
  { id: 1, 
    name: 'Plasitic Ocean Project', 
    discription:<div>
                  <p>We are a 501(c)3 non-profit based out of Wilmington, North Carolina. 
                  Our mission is to attain <i>science-based solutions</i> to the plastic pollution 
                  crisis that <i>inspire all</i> to make <i>informed choices </i> to improve human and 
                  environmental health.</p>
                  <p>POP conducts scientific research to learn about plastic pollution, find solutions, 
                  and educate others.</p>
                  <p>POP works with storytellers, artists, writers, and film-makers to communicate 
                  issues to a wider audience.</p>
                </div>,
    image: 'logo/pop_circular_logo.png',
    link: 'https://www.plasticoceanproject.org/',
    extra: <h3>&quot;We envision a world free of plastic pollution.&quot;</h3>
  },
  { id: 2,
    name: 'Mission Blue',
    discription:<div>
                  <p>Led by legendary oceanographer Dr. Sylvia Earle, Mission Blue is uniting a global 
                  coalition to inspire an upwelling of public awareness, access and support for
                  a worldwide network of marine protected areas called Hope Spots.</p>
                  <p>Under Dr. Earle’s leadership, the  team implements communications campaigns that 
                  elevate Hope Spots to the world stage through documentaries, social media, traditional 
                  media and innovative tools like Google Earth. Mission Blue also embarks on regular oceanic 
                  expeditions that shed light on these vital ecosystems and build support for their 
                  protection.</p>
                  <p>POP has teamed up with Mission Blue to establish
                  Hope Spot Hatteras off the coast of North Carolina.</p>
                </div>,
    image: 'about_part/mission_blue.png',
    link: 'https://missionblue.org/'
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topPage}>
        <div className={styles.topText}>
          <h1>This was a {"\n"} GIANT collaboration</h1>
          <p>We would like to thank all of our partners for sponsoring this project. 
              <br/> Without you guys, we would not be able to accomplish this. </p>
        </div>
        <img src='about_part/sailing.jpg' className={styles.topImage} alt="sailing"></img>
      </div>
      <div className={styles.carousel}>
        <Carousel
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="carousel_container"
          draggable
          infinite
          itemClass="carousel_slide"
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible={false}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          responsive={responsive}
          swipeable
        >
          {carouselItems.map(item => (
            <div key={item.id} className={styles.carouselItem}>
              <div className={styles.carouselText}>
                <h2>{item.name}</h2>
                {item.discription}
                {item.extra}
              </div>
              <Link href={item.link} style={{ textDecoration: 'none' }}>
                <img src={item.image} className={styles.carouselImg} alt={item.name}/>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}