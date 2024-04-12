'use client';

import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, CollapseBar } from "./navbar";

import "./navbar.css";


function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {width:10000, height:10000}
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { height, width } = useWindowDimensions();

  function render() {
    let choice = (<Navbar/>);
    if (width < 1100) {
      choice = (<CollapseBar isOpen={isOpen} toggle={toggle} />);
    } else {
      if (isOpen) setIsOpen(false);
    }
    return choice;
  };

  return (
    <div className='nav'>
      {render()}
      <hr className='white-bar'/>
    </div>
  );
}
