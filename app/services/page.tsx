import { servicesDB } from "@/lib/servicesDB";
import ServicesCard from "./ServicesCard";

export default function ServicesPage() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-24 h-screen ">
        <div className="lg:w-[30%]   mx-auto  text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 lg:z-50 ">
          <h1 className="text-4xl font-prata">Services</h1>
        </div>
         <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 mx-auto  lg:grid-cols-3 mt-8 lg:px-16">
            {servicesDB.map((service) => (
              <ServicesCard key={service.title}  {...service} />
            ))}
          </div>
      </div>
    </div>
  );
}