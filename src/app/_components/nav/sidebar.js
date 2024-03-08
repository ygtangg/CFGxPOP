import React from "react";
import Link from "next/link";


export default function Sidebar({isOpen, toggle}) {

  function collapse() {
    document.getElementById("menu-button").classList.toggle("change");
    toggle()
  }
  
  function base() {
    return (
      <div className="menu-header">
        <img 
          src="white_logo.png"
          alt="Logo"
          className="logo"
        />
        <div className="collapse-button">
          <div id="menu-button" className="collapse-container" onClick={() => collapse()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    );
  }

  function render() {
    if (isOpen) {
      return (
        <div className="vertical-open">
          { base() }
          <ul className="vertical-list">
            <li>
              <Link className="vertical-link" href="/home">
                <p className="navbar-text">Home</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/about-the-documentary">
                <p className="navbar-text">About The Documentary</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/about-the-organization">
                <p className="navbar-text">About The Organization</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/get-involved">
                <p className="navbar-text">Get Involved</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/nature-economic-paradigm-shift">
                <p className="navbar-text">Nature Economic Paradigm Shift</p>
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="vertical-close">
          { base() }
        </div>
      );
    }
  }

  return (
    <>
      {render()}
    </>
  );
}
