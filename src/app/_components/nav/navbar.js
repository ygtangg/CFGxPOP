import React from "react";
import Link from "next/link";

import "./nav.css";


export default function Navbar() {
  return (
    <>
      <div className="horizontal-navbar-wrapper">
        {/* LOGO */}
        <ul className="horizontal-navbar-list">
          <li>
            <Link className="horizontal-navbar-link" href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-navbar-link" href="/about-the-documentary">
              <p>About The Documentary</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-navbar-link" href="/about-the-organization">
              <p>About The Organization</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-navbar-link" href="/get-involved">
              <p>Get Involved</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-navbar-link" href="/nature-economic-paradigm-shift">
              <p>Nature Economic Paradigm Shift</p>
            </Link>
          </li>
        </ul>
        {/* BUTTON */}
      </div>
    </>
  );
}
