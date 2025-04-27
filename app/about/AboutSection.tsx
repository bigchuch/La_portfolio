"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className=" my-8 p-4 md:grid md:grid-cols-2 md:gap-16 lg: rounded-xl border bg-white/50 dark:bg-white/5 border-black/20 dark:border-white/10 light:border-black/10 light:bg-black/5 hover:-translate-y-1 transition-transform" >
      {/* About Text */}
      <div className="mb-4 lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
        <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-500 ">
          Emmanuel Olawale <span className="text-black dark:text-white">Alawode</span>
        </h2>
        <p className="text-justify  pt-2 ">
          I am a passionate Full Stack Developer with a knack for crafting scalable web applications.
          With years of hands-on experience, I have honed my skills in front-end technologies like
          React and Next.js, as well as back-end tools like Node.js and MongoDB.
          My goal is to leverage my skills to create innovative solutions that drive business growth
          and deliver the best user experience.
        </p>
      </div>

      {/* About Image */}
      <div className=" h-[400px] lg:h-[500px] overflow-clip border-2 rounded-xl ">
        <Image
          src="/Hero.jpeg"
          alt="My Image"
          width={500}
          height={500}
          className="shadow-lg overflow-clip  object-top w-full lg:object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSection;
