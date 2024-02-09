import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* LOGO */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about-the-documentary">
                  <p>About The Documentary</p>
                </Link>
              </li>
              <li>
                <Link href="/about-the-organization">
                  <p>About The Organization</p>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <p>Get Involved</p>
                </Link>
              </li>
              <li>
                <Link href="/nature-economic-paradigm-shift">
                  <p>Nature Economic Paradigm Shift</p>
                </Link>
              </li>
            </ul>
            {/* BUTTON */}
          </div>
        </div>
      </div>
    </>
  );
}
