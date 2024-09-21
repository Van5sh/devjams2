import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full h-[12vh] flex items-center shadow-md">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <ul className="flex justify-end items-center gap-8 list-none">
          <li>

              <a className="text-white font-semibold hover:text-gray-300 transition duration-300" href="/">HOME</a>

          </li>
          <li>

              <a className="text-white font-semibold hover:text-gray-300 transition duration-300" href="/signin">SIGN-IN</a>

          </li>
          <li>

              <a className="text-white font-semibold hover:text-gray-300 transition duration-300" href="/main">TEAM</a>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
