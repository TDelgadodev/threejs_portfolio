export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/projects/project-logo1.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/icons/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/icons/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/icons/framer.png",
      },
    ],
    href: "https://live-docs-lime-pi.vercel.app/",
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/projects/project-logo2.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/icons/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/icons/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/icons/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/icons/framer.png",
      },
    ],
    href: "https://imaginify-hub.vercel.app/",
  },
  {
    title: "Budget Tracker - Financial Management App",
    desc: "Budget Tracker is a personal finance management app that enables users to organize their income and expenses, providing an effective tracking system to help reach financial goals.",
    subdesc:
      "Built with Next.js and Prisma, Budget Tracker offers tools for income tracking, expense management, and customized category creation, delivering an intuitive and personalized experience.",
    texture: "/textures/project/budgettracker.mp4",
    logo: "/assets/projects/budget-tracker-logo.png",
    logoStyle: {
      backgroundColor: "#1E2D3D",
      border: "0.2px solid #25354D",
      boxShadow: "0px 0px 60px 0px #3399664D",
    },
    spotlight: "/assets/spotlight-budgettracker.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/icons/next-js.svg",
      },
      {
        id: 2,
        name: "Prisma",
        path: "/assets/icons/prisma.svg",
      },
      {
        id: 3,
        name: "Clerk Authentication",
        path: "/assets/icons/clerk.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/icons/react.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/icons/tailwindcss.png",
      },
    ],
    href: "https://budget-tracker-indol.vercel.app/",
  },
  {
    title: "Refine Dashboard CRM - CRM and Analytics Dashboard",
    desc: "A customer relationship management (CRM) dashboard built using Refine and Ant Design, offering analytics and company management tools.",
    subdesc:
      "This CRM is built with Refine and Ant Design, utilizing advanced data processing tools like GraphQL and DnD-Kit for interactive elements.",
    texture: "/textures/project/refine-dashboard-crm.mp4",
    logo: "/assets/icons/refine.svg",
    logoStyle: {
      backgroundColor: "#23303B",
      border: "0.2px solid #2B3A4C",
      boxShadow: "0px 0px 50px 0px #3366CC4D",
    },
    spotlight: "/assets/spotlight-crm.png",
    tags: [
      { id: 1, name: "Refine", path: "/assets/icons/refine.svg" },
      { id: 2, name: "Ant Design", path: "/assets/icons/ant-design.svg" },
      { id: 3, name: "GraphQL", path: "/assets/icons/graphql.svg" },
      { id: 4, name: "DnD-Kit", path: "/assets/icons/dnd-kit.svg" },
      { id: 5, name: "React", path: "/assets/icons/react.svg" },
    ],
  },
  {
    title: "Apple-Inspired Landing Page - Interactive Product Showcase",
    desc: "A modern landing page inspired by Apple’s iPhone promotion page, featuring advanced animations and 3D graphics.",
    subdesc:
      "Built with technologies like Three.js, GSAP, and React Three Fiber, this landing page provides a visually engaging and dynamic experience. Perfect for showcasing products in an interactive environment, emulating the marketing experiences of leading brands.",
    texture: "/textures/project/apple-landing-page.mp4",
    logo: "/assets/projects/apple.svg",
    logoStyle: {
      backgroundColor: "#2E2E2E",
      border: "0.2px solid #333333",
      boxShadow: "0px 0px 60px 0px #A0A0A0",
    },
    spotlight: "/assets/spotlight-apple.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/icons/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/icons/Threejs.svg",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/icons/gsap.svg",
      },
      {
        id: 4,
        name: "React Three Fiber",
        path: "/assets/icons/r3f.svg",
      },
    ],
    href: "https://iphone15promaxpage.netlify.app/",
  },
  {
    title: "Low Cost - E-commerce Platform",
    desc: "Low Cost is a full-stack e-commerce platform offering a vast catalog of products, from home appliances to tech gadgets, with seamless user experience and secure payment integration.",
    subdesc:
      "Developed with modern web technologies, including Node.js, MySQL, and React, Low Cost integrates Mercado Pago for payments, Cloudinary for image management, and robust authentication using JWT.",
    texture: "/textures/project/low-cost.mp4",
    logo: "/assets/projects/low-cost.png",
    logoStyle: {
      backgroundColor: "#1A202C",
      border: "0.2px solid #2D3748",
      boxShadow: "0px 0px 50px 0px #3182CE4D",
    },
    spotlight: "/assets/spotlight-low-cost.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/icons/nodejs.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/assets/icons/express.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/icons/react.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/icons/mysql.svg",
      },
      {
        id: 5,
        name: "JWT",
        path: "/assets/icons/jwt.svg",
      },
      {
        id: 6,
        name: "Mercado Pago",
        path: "/assets/icons/mercadopago.svg",
      },
      {
        id: 7,
        name: "Cloudinary",
        path: "/assets/icons/cloudinary.svg",
      },
    ],
    href: "https://lowcostarg.com.ar",
  },
];
export const workExperiences = [
  {
    id: 1,
    name: "For It Software Factory",
    pos: "Junior Software Developer",
    duration: "March 2024 - Present",
    title:
      "Contributed to the development of an e-commerce platform for a wholesaler, assisting with both backend and frontend tasks. Played a key role in migrating and setting up SQL database services, writing queries, and developing backend services. Additionally, collaborated on frontend features and bug fixes using React, ensuring a seamless user experience.",
    icon: "/assets/icon-forit.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "For It Software Factory",
    pos: "Junior Software Developer",
    duration: "March 2024 - Present",
    title:
      "Developed a donation platform for the Food Bank Network, focusing on frontend implementation. Integrated third-party API endpoints to replace mock data, making the application fully functional. Leveraged a flexible frontend architecture to progressively implement and update data, facilitating an efficient development process.",
    icon: "/assets/icon-forit.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Freelance Development",
    pos: "Web Developer",
    duration: "July 2023 - Present",
    title:
      "Created and maintained e-commerce platforms using React, JavaScript, and Express. Also developed a web application for student management for an English teacher.",
    icon: "/assets/freelance-logo.svg",
    animation: "salute",
  },
  {
    id: 3,
    name: "Digital House",
    pos: "Capstone Project - Web Developer",
    duration: "August 2022 - June 2023",
    title:
      "Developed 'HyperStore,' an e-commerce application for the capstone project. Focused on layout and styling with HTML, CSS, and Bootstrap. Implemented functionality using JavaScript, Node.js, Express, and MySQL, while adhering to Agile methodologies (SCRUM and Kanban).",
    icon: "/assets/hyperstore-logo.svg",
    animation: "salute",
  },
];
