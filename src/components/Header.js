// Header.js
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { GrGithub } from "react-icons/gr";

function Header() {
  return (
    <header className="Sticky top-0 flex w-full justify-between px-5 py-3 bg-zinc-700 bg-opacity-90 backdrop-blur-sm">
      <div className='flex gap-2 items-center no-select'>
        <img src={Logo} className='w-8 h-8 md:w-10 md:h-10' alt="Personal Log" />
        <h1 className="hidden sm:block text-xl md:text-2xl font-semibold">AB Game</h1>
      </div>
      <div className='flex gap-3 items-center'>
        <div className='transition hover:scale-105 hover:text-zinc-50'>
          <a href="https://github.com/BradT615/AB-Game" target="_blank" rel="noopener noreferrer">
            <GrGithub className='w-10 h-10 md:w-12 md:h-12' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;