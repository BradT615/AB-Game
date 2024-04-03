// Header.js
import React, { useState } from 'react';
import InstructionsModal from '../components/instructionsModal';
import Logo from '../assets/logo.png';
import { GrGithub } from "react-icons/gr";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="Sticky top-0 flex w-full justify-between px-5 py-3 bg-zinc-700 bg-opacity-90 backdrop-blur-sm">
      <InstructionsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <div className='flex gap-2 items-center no-select'>
        <img src={Logo} className='w-8 h-8 md:w-10 md:h-10' alt="Personal Log" />
        <h1 className="hidden sm:block text-xl md:text-2xl font-semibold">AB Game</h1>
      </div>
      <div className='flex gap-3 items-center'>
        <div className='border-2 border-gray-300 px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-zinc-500 hover:border-gray-200 hover:text-gray-200'>
          <button onClick={() => setModalOpen(true)}>Instructions</button>
        </div>
        <div className='transition hover:scale-105 hover:text-gray-200'>
          <a href="https://github.com/BradT615/AB-Game" target="_blank" rel="noopener noreferrer">
            <GrGithub className='w-10 h-10 md:w-12 md:h-12' />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;