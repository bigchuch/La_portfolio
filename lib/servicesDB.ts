// types/services.ts



export type Service = {
  
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "./Hero1.jpeg",
    title: "Web Development",
    description: "Modern, scalable websites built with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: "./Hero1.jpeg",
    title: "UI/UX Design",
    description: "Creating clean and user-friendly interfaces with Figma and modern design principles.",
  },
  {
    icon: "./Hero1.jpeg",
    title: "API Integration",
    description: "Connecting frontend apps to robust APIs and external services.",
  },
  {
    icon: "./Hero1.jpeg",
    title: "Backend Development",
    description: "Secure and scalable server-side apps using Node.js and MongoDB.",
  },
  {
    icon: "./Hero1.jpeg",
    title: "Responsive Design",
    description: "Mobile-first development that ensures seamless experience across all devices.",
  },
  {
    icon:  "./Hero1.jpeg",
    title: "Deployment & Hosting",
    description: "CI/CD pipelines, cloud deployment on platforms like Vercel, Netlify, and more.",
  },
];
