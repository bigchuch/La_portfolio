const ExperienceSection = () => {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-4">
        {/* 🎓 Education */}
        <div className="p-4 rounded-xl border bg-white/50 dark:bg-white/5 border-black/20 dark:border-white/10  hover:-translate-y-1 transition-transform">
          <h3 className="text-center text-xl font-bold mb-4">🎓 Education</h3>
          <ul className="list-disc list-inside  space-y-2">
            <li>
              <strong>B.Sc. in Computer Science</strong> — LAUTECH (2015 – 2021)
            </li>
            <li className="text-sm">
              Relevant Coursework: Data Structures, Algorithms, Web Development, Cloud Computing, Software Engineering
            </li>
            <li className="text-sm">
              Final Year Project: Built a decentralized voting system using React, Solidity & Firebase
            </li>
          </ul>
        </div>

        {/* 💼 Experience */}
        <div className=" relative p-4 rounded-xl border bg-white/50 dark:bg-white/5 border-black/20 dark:border-white/10 hover:-translate-y-1 transition-transform">
          <h3 className=" lg:sticky lg:top-0 lg:left-0 lg:right-0 text-center text-xl font-bold  mb-4">💼 Experience</h3>
          <div className="space-y-4 ">
            <div>
              <h4 className="font-semibold">
                Frontend Developer — Scout Startup (Remote) · 2022 – Present
              </h4>
              <p className="text-sm">
                Led UI implementation using Next.js, Tailwind CSS, and shadcn/ui for an MVP SaaS platform. Integrated REST APIs, optimized performance, and maintained reusable component libraries.
              </p>
            </div>

            <div>
              <h4 className="font-semibold ">
                Software Engineering Intern — TechBridge Innovations · 2021 – 2022
              </h4>
              <p className="text-sm">
                Collaborated with senior engineers to build and test frontend modules with React. Contributed to Agile sprints, UI bug fixes, and wrote unit tests with Jest.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Web Developer Intern — DEF Digital Labs · 2019
              </h4>
              <p className="text-sm">
                Assisted in building responsive interfaces and integrated third-party APIs. Gained hands-on experience in Git workflows and team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
