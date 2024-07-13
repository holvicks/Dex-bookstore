"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegUser, FaBars, FaTimes } from 'react-icons/fa';
import { MdPublish } from "react-icons/md";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-50 shadow-md z-50 relative">
      <img src="/images/dex-logo.png" alt="Logo" className="h-10" />
      <div className="hidden md:flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-[#4338CA]" aria-label="Home">Home</Link>
          <Link href="/about" className="hover:text-[#4338CA]" aria-label="About">About</Link>
          <Link href="/pages" className="hover:text-[#4338CA]" aria-label="Pages">Pages</Link>
          <Link href="/shop" className="hover:text-[#4338CA]" aria-label="Shop">Shop</Link>
          <Link href="/articles" className="hover:text-[#4338CA]" aria-label="Articles">Articles</Link>
          <Link href="/contact" className="hover:text-[#4338CA]" aria-label="Contact">Contact</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4 gap-5">
        <Button className='bg-[#4338CA] hover:bg-[#3b31ad]' aria-label="Login/signp">
        <Link href="/login">
        Login/Signup
        </Link>
          
        </Button>
        <Link href="/profile" aria-label="Profile" className="hover:text-[#4338CA]">
          <FaRegUser />
        </Link>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle Menu">
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6 text-black" />
          ) : (
            <FaBars className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
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
    </header>
  );
};

export default Header;
