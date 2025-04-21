// types/services.ts

import {
  Code,
  Brush,
  Settings,
  Database,
  Smartphone,
  Cloud,
} from "lucide-react";

export type Service = {
  icon: string ;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: `<Code />`,
    title: "Web Development",
    description: "Modern, scalable websites built with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: "<Brush />",
    title: "UI/UX Design",
    description: "Creating clean and user-friendly interfaces with Figma and modern design principles.",
  },
  {
    icon: "<Settings />",
    title: "API Integration",
    description: "Connecting frontend apps to robust APIs and external services.",
  },
  {
    icon: "<Database />",
    title: "Backend Development",
    description: "Secure and scalable server-side apps using Node.js and MongoDB.",
  },
  {
    icon: "<Smartphone />",
    title: "Responsive Design",
    description: "Mobile-first development that ensures seamless experience across all devices.",
  },
  {
    icon:   `<Cloud />`,
    title: "Deployment & Hosting",
    description: "CI/CD pipelines, cloud deployment on platforms like Vercel, Netlify, and more.",
  },
];
