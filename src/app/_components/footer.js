import React from "react";
import Link from "next/link";

import "./footer.css";


export default function Footer() {
  return (
    <div className='footer'>
      <hr className='white-bar'/>
      <Link href='https://www.plasticoceanproject.org/'>
        <img
          src="white_logo.png"
          alt="Logo"
          className="logo"
        />
      </Link>
      <p className='copyright'>© Plastic Ocean Project. All rights reserved.</p>
    </div>
  );
}
