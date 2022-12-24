import React from "react";

import Logo from "images/logo.svg";
import HireMe from "images/hire-me.svg";
import Link from "next/link";

function Navbar() {
  return (
    <div className="absolute z-10 w-full py-12">
      <header className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-52 mr-24">
              <Logo />
            </div>
            <div className="w-20">
              <HireMe />
            </div>
          </div>
          <div>
            <ul className="flex items-center flex-row">
              <li className="">
                <Link href="" className="uppercase text-sm text-gray-800 pl-5">
                  portofolio
                </Link>
              </li>
              <li className="">
                <Link href="/" className="uppercase text-sm text-gray-800 pl-5">
                  blog
                </Link>
              </li>
              <li className="">
                <Link href="" className="uppercase text-sm text-gray-800 pl-5">
                  cv
                </Link>
              </li>
              <li className="">
                <Link href="" className="uppercase text-sm text-gray-800 pl-5">
                  store
                </Link>
              </li>
              <li className="">
                <Link href="" className="uppercase text-sm text-gray-800 pl-5">
                  freelance
                </Link>
              </li>
              <li className="">
                <Link
                  href="/about"
                  className="uppercase text-sm text-gray-800 pl-5"
                >
                  about me
                </Link>
              </li>
              <li className="">
                <Link href="" className="uppercase text-sm text-gray-800 pl-5">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
