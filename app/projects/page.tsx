// app/portfolio/page.tsx
import { projectsDb } from "@/lib/projectsDb";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="p-4 pt-16 max-w-7xl mx-auto">
        <div className="lg:w-[30%]   mx-auto  text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 z-50 md:mb-10">
          <h1 className="text-4xl font-prata">Projects</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsDb.map((projects) => (
          <ProjectCard key={projects.href} {...projects} />
        ))}
        </div>
      </div>
    </div>
  );
}
