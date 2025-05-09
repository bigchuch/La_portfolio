import Image from "next/image";

type ServicesCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServicesCard({ icon,title,description}: ServicesCardProps) {
  return (
    <section className=" text-center space-y-12">
        
        <div className="py-6 bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:-translate-y-1 transition-transform backdrop-blur">
          <div className="mb-4 overflow-clip h-60">
            <Image
              src={icon}
              alt={title}
              width={200}
              height={250}
              className="rounded-t-xl w-full object-cover"
            />
                    </div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-300 mt-2">{description}</p>
        </div>

    </section>
  )};



