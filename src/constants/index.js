export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/icons/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/icons/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/icons/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/icons/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/icons/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/icons/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/icons/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/icons/framer.png',
      },
    ],
  },
  {
    title: 'Budget Tracker - Financial Management App',
    desc: 'Budget Tracker is a personal finance management app that enables users to organize their income and expenses, providing an effective tracking system to help reach financial goals.',
    subdesc:
      'Built with Next.js and Prisma, Budget Tracker offers tools for income tracking, expense management, and customized category creation, delivering an intuitive and personalized experience.',
    texture: '/textures/project/budgettracker.mp4',
    logo: '/assets/budgettracker-logo.png',
    logoStyle: {
      backgroundColor: '#1E2D3D',
      border: '0.2px solid #25354D',
      boxShadow: '0px 0px 60px 0px #3399664D',
    },
    spotlight: '/assets/spotlight-budgettracker.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/icons/nextjs.svg',
      },
      {
        id: 2,
        name: 'Prisma',
        path: '/assets/icons/prisma.svg',
      },
      {
        id: 3,
        name: 'Clerk Authentication',
        path: '/assets/icons/clerk.svg',
      },
      {
        id: 4,
        name: 'React',
        path: '/assets/icons/react.svg',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: '/assets/icons/tailwindcss.png',
      },
    ],
  },
];