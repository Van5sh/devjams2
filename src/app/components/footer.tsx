import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 w-full py-6">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center space-x-8 text-white">
        <FaFacebook size={30} />
        <FaInstagram size={30} />
        <FaPhone size={30} />
        <FaReact size={30} />
      </div>
    </footer>
  );
};

export default Footer;
