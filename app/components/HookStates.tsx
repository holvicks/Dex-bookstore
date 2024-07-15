"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const HookStates = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className='w-full h-screen z-50 absolute'>
    <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle Menu">
        {isMenuOpen ? (
          <FaTimes className="h-6 w-6 text-black" />
        ) : (
          <FaBars className="h-6 w-6 text-black" />
        )}
      </button>

    </div>
 

<div className='w-full h-screen z-50 absolute bg-black' >
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-1 p-5 w-full h-screen max-w-md bg-gray-50 shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-gray-600" onClick={toggleMenu} aria-label="Home Mobile">Home</Link>
            <Link href="/about" className="hover:text-gray-600" onClick={toggleMenu} aria-label="About Mobile">About</Link>
            <Link href="/pages" className="hover:text-gray-600" onClick={toggleMenu} aria-label="Pages Mobile">Pages</Link>
            <Link href="/shop" className="hover:text-gray-600" onClick={toggleMenu} aria-label="Shop Mobile">Shop</Link>
            <Link href="/articles" className="hover:text-gray-600" onClick={toggleMenu} aria-label="Articles Mobile">Articles</Link>
            <Link href="/contact" className="hover:text-gray-600" onClick={toggleMenu} aria-label="Contact Mobile">Contact</Link>
          </nav>
        </div>
      )}
</div>


    </>
  );
};

export default HookStates;
