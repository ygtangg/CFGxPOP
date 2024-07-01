/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { SocialIcon } from 'react-social-icons'
import { useRouter } from 'next/navigation'
import "./footer.css"; 

export default function Footer() {
  const router = useRouter()

  return (
    <div className='footer'>
      <hr className='white-bar'/>
        <div className='container'>
          <div>
            <Link href='https://www.plasticoceanproject.org/' style={{ textDecoration: 'none' }}>
              <p className='popname'>Plastic Ocean Project, Inc.</p>
            </Link>
            <p className='address'>
            5598 Marvin K. Moss Lane<br />
            Suite 2009<br />
            Wilmington, NC 28409<br />
            910-660-8090 (access code: 19)<br />
            a 501(c)(3) non-profit</p>
          </div>
          <div className="social_contact">
            <div className="socials">
              {/* Facebook */}
              <SocialIcon network="facebook" url="https://www.facebook.com/plasticoceanproject.inc" bgColor='white' fgColor="rgb(48,106,149)" />
              {/* Instagram */}
              <SocialIcon network="instagram" url="https://www.instagram.com/plasticoceanproject.inc/" bgColor='white' fgColor="rgb(48,106,149)" />
              {/* LinkedIn */}
              <SocialIcon network="linkedin" url="https://www.linkedin.com/company/plasticoceanproject/" bgColor='white' fgColor="rgb(48,106,149)" />
            </div>
            <div className="contact">
              <Link href="https://www.flipcause.com/secure/cause_pdetails/MTMxMTUy">
                <button type="button">
                  Donate
                </button>
              </Link>
              <button type="button" onClick={() => router.push('mailto:emily@plasticoceanproject.org')}>
                Contact
              </button>
            </div>
            <p className='copyright'>© Plastic Ocean Project. All rights reserved.</p>
          </div>
          <div>
            <Link href="https://codeforgoodberkeley.github.io/index.html">
            <img
              src="cfglogo_white_transparent.png"
              alt="cfg logo"
              className="cfglogo"
            />
            </Link>
          </div>
        </div>
    </div>
  );
}
