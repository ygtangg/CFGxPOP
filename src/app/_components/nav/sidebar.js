import React from "react";
import Link from "next/link";


export default function Sidebar({isOpen, toggle}) {

  function render() {
    if (isOpen) {
      return (
        <div className="vertical-open">
          <img 
            src='https://www.plasticoceanproject.org/files/theme/images/POP_long.png' 
            alt="Logo"
            className="logo"
          />

          <button className="" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          </button>

          <ul className="vertical-list">
            <li>
              <Link className="vertical-link" href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/about-the-documentary">
                <p>About The Documentary</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/about-the-organization">
                <p>About The Organization</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/get-involved">
                <p>Get Involved</p>
              </Link>
            </li>
            <li>
              <Link className="vertical-link" href="/nature-economic-paradigm-shift">
                <p>Nature Economic Paradigm Shift</p>
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="vertical-close">
          <img 
            src='https://www.plasticoceanproject.org/files/theme/images/POP_long.png' 
            alt="Logo"
            className="logo"
          />

          <button className="" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          </button>
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
