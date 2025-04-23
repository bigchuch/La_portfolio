"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="my-16 grid gap-6 lg:grid-cols-2 ">
      {/* About Text */}
      <div className="p-4 rounded-xl border bg-white/50 dark:bg-white/5 border-black/20 dark:border-white/10 light:border-black/10 light:bg-black/5 hover:-translate-y-1 transition-transform">
        <h2 className="mt-4 text-2xl font-semibold text-amber-500">
          Emmanuel Olawale <span className="text-black dark:text-white">Alawode</span>
        </h2>
        <p className="mt-2  leading-relaxed">
          I am a passionate Full Stack Developer with a knack for crafting scalable web applications.
          With years of hands-on experience, I have honed my skills in front-end technologies like
          React and Next.js, as well as back-end tools like Node.js and MongoDB.
          My goal is to leverage my skills to create innovative solutions that drive business growth
          and deliver the best user experience.
        </p>
      </div>

      {/* About Image */}
      <div className="relative flex items-center justify-center">
        <Image
          src="/Hero.png"
          alt="My Image"
          width={500}
          height={500}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
