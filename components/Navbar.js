// components/Navbar.js

'use client';

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f9f6f2] border-b border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          WeddingCard
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-pink-700">
          <Link href="/" className="hover:font-bold">Home</Link>
          <Link href="/about" className="hover:font-bold">About</Link>
          <Link href="/gallery" className="hover:font-bold">Gallery</Link>
          <Link href="/generator" className="hover:font-bold">Create</Link>
        </div>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center border border-pink-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none bg-transparent w-[120px] sm:w-[150px]"
            />
            <button className="px-3 text-pink-600 hover:text-pink-800">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-pink-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-pink-50 text-pink-700">
          <Link href="/" className="block hover:font-bold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:font-bold" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/gallery" className="block hover:font-bold" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/generator" className="block hover:font-bold" onClick={() => setIsOpen(false)}>Create</Link>
        </div>
      )}
    </nav>
  );
}
