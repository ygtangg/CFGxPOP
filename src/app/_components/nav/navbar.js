import React from "react";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <div className="horizontal-wrapper">
        <img 
          src="white_logo.png"
          alt="Logo"
          className="logo"
        />
        <ul className="horizontal-list">
          <li>
            <Link className="horizontal-link" href="/home">
              <p style={{ fontSize: '18px'}}>Home</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-link" href="/about-the-documentary">
              <p style={{ fontSize: '18px'}}>About The Documentary</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-link" href="/about-the-organization">
              <p style={{ fontSize: '18px'}}>About The Organization</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-link" href="/get-involved">
              <p style={{ fontSize: '18px'}}>Get Involved</p>
            </Link>
          </li>
          <li>
            <Link className="horizontal-link" href="/nature-economic-paradigm-shift">
              <p style={{ fontSize: '18px'}}>Nature Economic Paradigm Shift</p>
            </Link>
          </li>
        </ul>
        {/* BUTTON */}
      </div>
      <hr />
    </>
  );
}
