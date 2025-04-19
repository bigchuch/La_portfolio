"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Github , Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full z-50 relative ">

      <nav className=" mx-auto max-w-7xl  flex items-center justify-between p-4 border-b">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          La.dev
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:justify-center gap-6 text-sm  ">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1 ">
              <Home className="w-4 h-4 font-bold " />
            </Link>
          </div>
          
          <div>
            <Link href="/projects" className="flex items-center gap-1 ">
              Projects
            </Link>

          </div>
          <div>
            <Link href="/about" className="flex items-center gap-1">
              About
            </Link>

          </div>
          <div className=" rounded-full p-1">
            <ThemeToggle  />
          </div>
        </div>

        

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-center items-center gap-4" >
          <div>
            <ThemeToggle />
          </div>
          <div onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </div>
        </div>

        {/* mobile Nav Links */}
        <div  onClick={toggleMenu} className={`absolute -z-10 top-0 left-0 w-full h-screen bg-white dark:bg-black   transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col items-center justify-center gap-6 text-sm md:hidden`}>
          
          <Link href="/" className="flex items-center gap-1 hover:text-gray-900">
            <Home className="w-4 h-4 font-bold" />
          </Link>
          
          <Link href="/projects" className="flex items-center gap-1 hover:text-gray-900">
            Projects
          </Link>
          <Link href="/about" className="flex items-center gap-1 hover:text-gray-900">
            About
          </Link>

          <Link href="httpgithub.com" className="flex items-center gap-1 hover:text-gray-900">
            <Github className="w-6 h-6 font-bold " />
          </Link>

          <ThemeToggle />

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
