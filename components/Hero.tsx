"use client";

import Link from "next/link";
import { Github, Slack ,Linkedin   } from "lucide-react";

const Hero = () => {
  return (
    <div className=" w-full  h-[95vh] ">

      <div className="max-w-7xl px-4 flex flex-col md:px-8 md:grid md:grid-cols-1fr-2fr md:h-full  ">

        <div className="border-2 border-white md:flex md:flex-col md:justify-end md:pb-20">
          <div className="mt-16 font-geist-sans ">
            <h1 className="text-4xl ">Emmanuel Olawale <span className="block">Alawode</span> </h1>
            <h2 className="text-md mt-4  ">Software Engineer / Solution Achitech </h2>
            <p className="text-sm mt-4 w-[70%] text-justify">Cuban-born and self-taught, I bring a unique blend of passion and proficiency to development and design. Obsessed with performance and dedicated to crafting clean, impactful designs, my work is a testament to the fusion of skill and creativity.</p>
          </div>

          <hr className="w-50 mt-4 border-1 border-black dark:border-white"/>

          <div className="flex items-center gap-4 mt-4">
            {/* socials links */}
            <Link href="https://github.com/emmabobo" className="flex items-center gap-1 hover:text-gray-900">
              <Github className="w-6 h-6 font-bold " />
            </Link>
            <Link href="httpgithub.com" className="flex items-center gap-1 hover:text-gray-900">
              <Slack className="w-6 h-6 font-bold " />
            </Link>
            <Link href="httpgithub.com" className="flex items-center gap-1 hover:text-gray-900">
              <Linkedin  className="w-6 h-6 font-bold " />
            </Link>
            <Link href="httpgithub.com" className="flex items-center gap-1 hover:text-gray-900">
              <Github className="w-6 h-6 font-bold " />
            </Link>
          </div>
        </div>

        <div className="border-2 border-white  mt-8 font-prata text-6xl flex flex-col gap-8 items-end md:items-start md:text-7xl md:justify-center ">

          {/* navbar link */}
          <div>
            <Link href="/projects" className="flex items-center gap-1 font-prata">
              PROJECT
            </Link>
          </div>
          <div>
            <Link href="/projects" className="flex items-center gap-1 ">
              SERVICES
            </Link>
          </div>

          <div>
            <Link href="/about" className="flex items-center gap-1">
              ABOUT
            </Link>
          </div>
          <div>
            <Link href="/" className="flex items-center gap-1 ">
              CONTACT
            </Link>
          </div>

        </div>
        


      </div>

    </div>
  );
};

export default Hero;
