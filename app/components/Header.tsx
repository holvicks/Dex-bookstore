

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegUser, FaBars, FaTimes } from 'react-icons/fa';
import { MdPublish } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import signout from "../logout/actions";
import { AuthButtons } from './AuthButtons';
import HookStates from './hookStates';


const Header = () => {
 

  return (
    <header className="flex justify-between items-center p-4 bg-gray-50 shadow-md z-50 relative">
      <img src="/images/dex-logo.png" alt="Logo" className="h-10" />
      <div className="hidden md:flex items-center space-x-4">
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-[#4338CA]" aria-label="Home">Home</Link>
          <Link href="/about" className="hover:text-[#bebdc7]" aria-label="About">About</Link>
          <Link href="/pages" className="hover:text-[#4338CA]" aria-label="Pages">Pages</Link>
          <Link href="/shop" className="hover:text-[#4338CA]" aria-label="Shop">Shop</Link>
          <Link href="/articles" className="hover:text-[#4338CA]" aria-label="Articles">Articles</Link>
          <Link href="/contact" className="hover:text-[#4338CA]" aria-label="Contact">Contact</Link>
        </nav>
      </div>
      <div className="flex items-center  gap-5">
      <AuthButtons />
      <HookStates />
      </div>
     
    </header>
  );
};

export default Header;




