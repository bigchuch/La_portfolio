import {services}  from "@/lib/servicesDB";

type ServicesCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServicesCard({ icon,title,description}: ServicesCardProps) {
  return (
      <section className="max-w-5xl w-full mx-auto text-center space-y-12">
      <div className="grid gap-6 md:grid-cols-3">
        
        <div
          className="p-6 bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:-translate-y-1 transition-transform backdrop-blur"
        >
          <div className="mb-4">{icon}</div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
        </div>

      </div>
    </section>
  )};



