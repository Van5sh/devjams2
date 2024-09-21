import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-300 shadow-lg w-full h-[12vh] flex items-center">
      <div className="max-w-screen-xl mx-auto w-full">
        <ul className="flex justify-end items-center gap-6 sm:gap-8 md:gap-10 list-none">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 md:px-6 text-white font-semibold hover:text-gray-300 transition duration-300 text-sm md:text-lg"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block py-2 px-4 md:px-6 text-white font-semibold hover:text-gray-300 transition duration-300 text-sm md:text-lg"
            >
              SIGN-IN
            </Link>
          </li>
          <li>
            <Link
              href="/main"
              className="block py-2 px-4 md:px-6 text-white font-semibold hover:text-gray-300 transition duration-300 text-sm md:text-lg"
            >
              TEAM
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
