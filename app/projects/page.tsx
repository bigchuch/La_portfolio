// app/portfolio/page.tsx
import { projectsDb } from "@/lib/projectsDb";
import ProjectCard from "./ProjectCard";


export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="mx-auto py-18 max-w-[1024px] px-2 md:py-24 flex flex-col items-center justify-center md:px-4">
        <div className="lg:w-[30%]  mx-auto  text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 lg:z-50 md:mb-10 ">
          <h1 className="text-4xl font-prata pb-8">Projects</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsDb.map((projects) => (
          
            <ProjectCard key={projects.href} {...projects} />
          
        ))}
        </div>
      </div>
    </div>
  );
}
