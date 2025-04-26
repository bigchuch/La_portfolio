
export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  technologies: string[];
};

export const projectsDb: Project[] = [
  {
    title: "Banking App",
    description: "A secure, modern banking app built with Next.js, Tailwind CSS, and shadcn/ui.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/banking-app",
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    title: "E-commerce Platform",
    description: "An online store with full shopping cart, Stripe payments, and admin dashboard.",
    imageUrl:"/Hero.jpeg",
    href: "/portfolio/ecommerce-platform",
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL']
  },
  {
    title: "Portfolio Website",
    description: "A clean, responsive portfolio built with Next.js 15 and MDX integration.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/portfolio-site",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
  {
    title: "Task Management Tool",
    description: "A Trello-style Kanban board app with drag-and-drop and realtime updates via Supabase.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/task-manager",
     technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
  },
  {
    title: "Blog CMS",
    description: "A markdown blog system with MDX support, dynamic routing, and custom themes.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/blog-cms",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
  {
    title: "Chat App",
    description: "A realtime chat app built with Next.js, Socket.IO, and Tailwind CSS.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/chat-app",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
  {
    title: "Chat App",
    description: "A realtime chat app built with Next.js, Socket.IO, and Tailwind CSS.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/chat-app1",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
  {
    title: "Chat App",
    description: "A realtime chat app built with Next.js, Socket.IO, and Tailwind CSS.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/chat-app2",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
  {
    title: "Chat App",
    description: "A realtime chat app built with Next.js, Socket.IO, and Tailwind CSS.",
    imageUrl: "/Hero.jpeg",
    href: "/portfolio/chat-app3",
    technologies: ['Socket.IO', 'Express', 'React', 'Redis'],
  },
];
