"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-purple-100 px-6 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-purple-700">SafePark</Link>
        
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link href="#features" className="hover:text-purple-600">Features</Link>
          <Link href="#map" className="hover:text-purple-600">Find Spot</Link>
          <button className="btn-purple">Sign In</button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-700">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full text-purple-600  bg-white p-6 shadow-xl flex flex-col gap-4 md:hidden">
          <Link href="#features">Features</Link>
          <Link href="#map">Find Spot</Link>
          <button className="btn-purple w-fit transition-all duration-300 transform hover:scale-105  p-2  border-2 border-purple-400 rounded-xl hover:bg-purple-200">Sign In</button>
        </div>
      )}
    </nav>
  );
}