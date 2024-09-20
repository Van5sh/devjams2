import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent md:py-5 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex justify-end gap-2 sm:gap-4 md:gap-6 list-none w-full">
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white font-bold hover:text-gray-700 text-sm md:text-base`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white font-bold hover:text-gray-700 text-sm md:text-base`}
            >
              SIGN-IN
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`block py-2 px-2 md:px-3 text-white font-bold hover:text-gray-700 text-sm md:text-base`}
            >
              TEAM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;