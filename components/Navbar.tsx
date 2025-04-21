"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Home, Github ,Linkedin , Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = usePathname() === "/";
  const isAboutPage = usePathname() === "/about";
  const isProjectsPage = usePathname() === "/projects";
  const isServicesPage = usePathname() === "/services";
  const isContactPage = usePathname() === "/contact";

  return (
    <div className="w-full z-10 fixed top-0 left-0 bg-white dark:bg-black shadow-md transition-transform duration-500 ease-in-out">

      <nav className=" mx-auto max-w-7xl  flex items-center justify-between p-4 border-b">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold z-20">
          La.dev
        </Link>

        {/* Desktop Nav Links */}
        <div className="z-20 hidden md:flex md:items-center md:justify-center gap-6 text-sm  ">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1 ">
              <Home className="w-4 h-4 font-bold " />
            </Link>
          </div>
          
          {(!isHomePage && !isProjectsPage) && (
            <div>
              <Link href="/projects" className="flex items-center gap-1 ">
                PROJECTS
              </Link>
            </div>)}
          
          {(!isHomePage && !isAboutPage) && (
            <div>
              <Link href="/about" className="flex items-center gap-1 ">
                ABOUT
              </Link>
            </div>)}

          {(!isHomePage && !isServicesPage) && (
            <div>
              <Link href="/services" className="flex items-center gap-1 ">
                SERVICES
              </Link>
            </div>)}
          
          {(!isHomePage && !isContactPage) && (
            <div>
              <Link href="/contact" className="flex items-center gap-1 ">
                CONTACT
              </Link>
            </div>)}

          <div className=" rounded-full p-1">
            <ThemeToggle  />
          </div>
        </div>

        

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-center items-center gap-4" >
          <div>
            <ThemeToggle />
          </div>

          {!isHomePage && (
            <div onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </div>)}
          
        </div>

        {/* mobile Nav Links */}
        {!isHomePage && (
          <div  onClick={toggleMenu} className={`absolute -z-10 top-0 left-0 w-full h-screen bg-white dark:bg-black   transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col items-center justify-center gap-6 text-sm md:hidden`}>
            
            <div>
            <Link href="/" className="flex items-center gap-1 ">
              <Home className="w-4 h-4 font-bold " />
            </Link>
          </div>
          
          {(!isHomePage && !isProjectsPage) && (
            <div>
              <Link href="/projects" className="flex items-center gap-1 ">
                PROJECTS
              </Link>
            </div>)}
          
          {(!isHomePage && !isAboutPage) && (
            <div>
              <Link href="/about" className="flex items-center gap-1 ">
                ABOUT
              </Link>
            </div>)}

          {(!isHomePage && !isServicesPage) && (
            <div>
              <Link href="/services" className="flex items-center gap-1 ">
                SERVICES
              </Link>
            </div>)}
          
          {(!isHomePage && !isContactPage) && (
            <div>
              <Link href="/contact" className="flex items-center gap-1 ">
                CONTACT
              </Link>
            </div>)}
          </div>
          )}

      </nav>
    </div>
  );
};

export default Navbar;
