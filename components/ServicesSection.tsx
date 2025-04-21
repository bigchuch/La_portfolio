import {services}  from "@/lib/servicesDB";

const ServicesSection = () => {
  return (
    <section className="max-w-5xl w-full mx-auto text-center space-y-12">
      <h1 className="text-4xl font-bold text-white">Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service,index) => (
          <div
            key={index}
            className="p-6 bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:-translate-y-1 transition-transform backdrop-blur"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="text-sm text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
