import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-2 md:mt-24  ">
        <div className="lg:w-[30%]   mx-auto  text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 z-50 ">
          <h1 className="text-4xl font-prata">Services</h1>
        </div>
        <ServicesSection />
      </div>
    </div>
  );
}