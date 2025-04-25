"use client";

import Link from "next/link";
import { Github, Slack ,Linkedin   } from "lucide-react";

const Hero = () => {
  return (
    <div className=" w-full  h-[95vh]  ">

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:px-8 md:grid md:grid-cols-5 md:h-full gap-8 lg:gap-24 ">

        <div className="e md:flex md:flex-col col-span-2 md:justify-end md:pb-20">
          <div className="mt-16 font-geist-sans sm:w-fit pt-2  ">
            <h1 className="text-4x font-bold md:text-2xl lg:text-3xl  font-prata">Emmanuel Olawale <span className="block">Alawode</span> </h1>
            <h2 className="text-md mt-4  md:text-sm lg:text-md ">Software Engineer / Solution Achitech </h2>
            <p className="text-sm mt-4 w-[70%] text-justify md:w-[90%] md:text-sm lg:text-md">Drogo, Na self-taught, I bring a unique blend of passion and proficiency to development and design. Obsessed with performance and dedicated to crafting clean, impactful designs, my work is a testament to the fusion of skill and creativity.</p>
          </div>

          <hr className="w-50 mt-4 md:w-[80%] border-1 border-black dark:border-white"/>

          <div className="flex items-center gap-4 mt-4">
            {/* socials links */}
            <Link href="https://github.com/emmabobo" className="flex items-center gap-1 hover:text-blue-700">
              <Github className="w-6 h-6 font-bold " />
            </Link>
            <Link href="httpgithub.com" className="flex items-center gap-1 hover:text-blue-700">
              <Slack className="w-6 h-6 font-bold " />
            </Link>
            <Link href="www.linkedin.com/in/emmanuel-alawode-b13a241b4" className="flex items-center gap-1 hover:text-blue-700">
              <Linkedin  className="w-6 h-6 font-bold " />
            </Link>
          </div>
        </div>

        <div className="  mt-8 font-prata text-6xl flex flex-col gap-8 items-end md:items-start md:text-7xl lg:text-8xl xl:text-9xl md:justify-center md:col-span-3 overflow-clip ">

          {/* navbar link */}
          <div className="">
            <Link href="/projects" className="flex items-center gap-1 hover:italic transition-all duration-300">
              PROJECT
            </Link>
          </div>
          <div>
            <Link href="/services" className="flex items-center gap-1 hover:italic transition-all duration-300  ">
              SERVICES
            </Link>
          </div>

          <div>
            <Link href="/about" className="flex items-center gap-1 hover:italic transition-all duration-300">
              ABOUT
            </Link>
          </div>
          <div>
            <Link href="/contact" className="flex items-center gap-1 hover:italic transition-all duration-300 ">
              CONTACT
            </Link>
          </div>

        </div>
        


      </div>

    </div>
  );
};

export default Hero;
