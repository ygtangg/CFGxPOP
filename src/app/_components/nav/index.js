'use client';

import React from 'react';
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import "./nav.css";


function getWindowDimensions() {
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
    let choice = (<Navbar toggle={toggle} />);
    if (width < 800) {
      choice = (<Sidebar isOpen={isOpen} toggle={toggle} />);
    }
    return choice;
  };

  return (
    <div className='nav'>
      {render()}
    </div>
  );
}
