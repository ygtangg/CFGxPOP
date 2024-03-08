import React from "react";
import Link from "next/link";


function renderLogo() {
  return (
    <img 
      src="white_logo.png"
      alt="Logo"
      className="logo"
    />
  );
}

function renderList(normal) {
  let list_class = "horizontal-list";
  let link_class = "horizontal-link";
  if (!normal) {
    list_class = "vertical-list";
    link_class = "vertical-link";
  }
  
  return (
    <>
      <ul className={list_class}>
        <li>
          <Link className={link_class} href="/home">
            <p className="navbar-text">Home</p>
          </Link>
        </li>
        <li>
          <Link className={link_class} href="/about-the-documentary">
            <p className="navbar-text">About The Documentary</p>
          </Link>
        </li>
        <li>
          <Link className={link_class} href="/about-the-organization">
            <p className="navbar-text">About The Organization</p>
          </Link>
        </li>
        <li>
          <Link className={link_class} href="/get-involved">
            <p className="navbar-text">Get Involved</p>
          </Link>
        </li>
        <li>
          <Link className={link_class} href="/nature-economic-paradigm-shift">
            <p className="navbar-text">Nature Economic Paradigm Shift</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

export function Navbar() {
  return (
    <>
      <div className="horizontal-wrapper">
        { renderLogo() }
        { renderList(true) }
      </div>
    </>
  );
}


export function CollapseBar({isOpen, toggle}) {

  function collapse() {
    document.getElementById("menu-button").classList.toggle("change");
    toggle()
  }
  
  function renderCollapseBase() {
    return (
      <div className="menu-header">
        { renderLogo() }
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
          { renderCollapseBase() }
          { renderList(false) }
        </div>
      );
    } else {
      return (
        <div className="vertical-close">
          { renderCollapseBase() }
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
