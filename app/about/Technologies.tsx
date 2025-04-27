import {technologiesDb} from "@/lib/technologiesDb";
import Image from "next/image";


export default function Technologies() {
  return (
    <section className="mt-8 mx-4 rounded-xl border bg-white/50 dark:bg-white/5 border-black/20 dark:border-white/10 p-6">
      <h2 className="text-center text-xl font-bold  mb-6">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologiesDb.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2 group">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              unoptimized={false}
              className="h-12 w-12 transition-transform duration-300 group-hover:-translate-y-1"
            />
            <span className="text-sm ">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
