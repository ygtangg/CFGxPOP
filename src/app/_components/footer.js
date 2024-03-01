import React from "react";
import Link from "next/link";

import "./footer.css";


export default function Footer() {
  return (
    <div className='footer'>
      <hr></hr>
      <a href='https://www.plasticoceanproject.org/'>
      <img
        src="white_logo.png"
        alt="Logo"
        className="logo"
      />
      </a>
    </div>
  );
}
