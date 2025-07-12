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
    name: 'Projects',
    href: '#projects',
  },


];

export const myProjects = [
  {
    title: 'Clash of Clans Landing Page',
    desc: 'A React and GSAP-powered landing page for Clash of Clans with advanced animations.',
    subdesc: 'Built to showcase expertise in React and GSAP animations, creating an immersive user experience.',
    href: 'https://readytoclash.vercel.app/',
    texture: '/textures/project/clashofclans.webm',
    logo: '/assets/clashofclanslogo.webp',
    logoStyle: {
      backgroundColor: '#000',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'GSAP', path: '/assets/gsap.svg' },
    ],
  },
  {
    title: 'linkedOut',
    desc: 'A full-stack web application designed to help users prepare for technical interviews.',
    subdesc: 'Built with Next.js, Tailwind CSS, and Firebase for seamless user experience and secure data management.',
    href: 'https://linkedout-sable.vercel.app/',
    texture: '/textures/project/linkedout.webm',
    logo: '/assets/linkedoutlogo.png',
    logoStyle: {
      backgroundColor: '#00000000',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Three.js', path: '/assets/threejs.svg' },
      { id: 3, name: 'Drei', path: '/assets/drei.svg' },
      { id: 4, name: 'TailwindCSS', path: '/assets/tailwind.svg' },
    ],
  },

  {
    title: 'Brainwave',
    desc: 'A React and Tailwind CSS website that includes animations about Brainwave: a Generative AI software.',
    subdesc: 'Information about Brainwave, what they do, how they work.',
    href: 'https://brainwave-vishesh.vercel.app/',
    texture: '/textures/project/brainwave.webm',
    logo: '/assets/brainwavelogo.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwind.svg' },
    ],
  },
];

export const myAppProjects = [
  {
    title: 'Manache 5 Ganapati App',
    desc: 'An Android app providing real-time updates about the Manache Ganpati in Pune, built using Java and Google Maps API. 🏛📍',
    subdesc: 'Developed in Android Studio using Java, this app allows users to view live updates on the 5 Manache Ganpati locations in Pune. It features Google Maps integration for real-time navigation, ensuring devotees can easily locate and visit each Ganpati pandal during the festival.',
    href: 'https://github.com/vishesh2201/Manache-5',
    texture: '/textures/project/manache_demo.webm',
    logo: '/assets/manache.svg',
    logoStyle: {
      backgroundColor: '#320707',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Java', path: '/assets/java.svg' },
      { id: 3, name: 'Google Maps API', path: '/assets/googlemaps.svg' },
    ],
  },
  {
    title: 'Tic-Tac-Two',
    desc: 'An advanced version of Tic-Tac-Toe where your first move vanishes when you make your fourth move. ♟📱',
    subdesc: 'Developed in Android Studio using Java, this game introduces a new level of strategy where only the last three moves of each player remain visible, eliminating the possibility of a tie. The game features smooth animations and an intuitive UI for a competitive experience.',
    href: 'https://github.com/vishesh2201/Tic-Tac-Two',
    texture: '/textures/project/ttt_demo.webm',
    logo: '/assets/tictactwo.png',
    logoStyle: {
      backgroundColor: '#ffffff',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Java', path: '/assets/java.svg' },
      { id: 3, name: 'Google Firebase', path: '/assets/firebase.svg' },
    ],
  },
  {
    title: 'SwipeFlix',
    desc: 'A movie-matching app like Tinder, helping groups decide on a movie to watch. 🎥🔥',
    subdesc: 'Built in Kotlin with Firebase as the backend, this app allows friends to join a session, swipe on movies they like or dislike, and select a final movie based on majority votes. It integrates the TMDB API for fetching real-time movie data and features an engaging swipe-based UI.',
    href: 'https://github.com/vishesh2201/SwipeFlix',
    texture: '/textures/project/swipeflix_demo.webm',
    logo: '/assets/swipeflix.svg',
    logoStyle: {
      backgroundColor: '#005E7C',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Kotlin', path: '/assets/kotlin.svg' },
      { id: 3, name: 'Google Firebase', path: '/assets/firebase.svg' },
      { id: 4, name: 'TMDB API', path: '/assets/tmdb.svg' },
    ],
  },
  {
    title: 'Guess The Flag',
    desc: 'A fun quiz game where you identify country flags, featuring a hint system and score tracking. 🚩🧠',
    subdesc: 'This interactive Kotlin-based quiz game tests users on their knowledge of world flags. Players get four multiple-choice options per question, with a hint system to assist them. The app maintains a scorekeeping system and features a simple, engaging UI for an enjoyable learning experience.',
    href: 'https://github.com/vishesh2201/GuessTheFlag-App',
    texture: '/textures/project/guesstheflag_demo.webm',
    logo: '/assets/guesstheflag.jpg',
    logoStyle: {
      backgroundColor: '#8eb5f0',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'Android Studio', path: '/assets/android.svg' },
      { id: 2, name: 'Kotlin', path: '/assets/kotlin.svg' },
    ],
  },
  {
    title: 'Polo',
    desc: 'A digital turf booking app that brings the traditional offline reservation process online. ⚽📲',
    subdesc: 'Built using Java and integrated with Firebase, Polo enables users to view available time slots and book sports turfs in real time. Designed as a college frontend project, it features a responsive UI and dynamic booking updates via Firebase.',
    href: 'https://github.com/vishesh2201/polo',
    texture: '/textures/project/polo.webm',
    logo: '/assets/polologo.png',
    logoStyle: {
      backgroundColor: '#32CD9F',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #444444',
    },
    tags: [
      { id: 1, name: 'React Native', path: '/assets/android.svg' },
      { id: 2, name: 'Javascript', path: '/assets/javascript.png' },
      { id: 3, name: 'Supabase', path: '/assets/supabase.png' },
    ],
  },
];



export const calculateSizes = (isSmall, isMobile) => {
  return {
    cubeScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    cubePosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,  
    company_name: 'Frick Incognito',
    title: 'Front End Developer',
    date: '2024 - Present',
    description: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/work.svg',
    iconBg: "#ff0000",
    points: [
      "Creating interactive three.js websites.",
      "Collaborating with designers and developers for UI.",
      "Bringing designs to life before actual development."
    ],
  },
  {
    id: 2,
    company_name: "Artist's Cut",
    title: 'Video Editor',
    date: '2022 - 2023',
    description: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.",
    icon: '/assets/work.svg',
    iconBg: "#000000",
    points: [
      "Started a youtube channel that gained 30,000 Subscribers.",
      "Used SEO Tricks to get 50 Million Total Views.",
      "Edited engaging youtube shorts."
    ],
  },
  {
    id: 3,
    company_name: 'Aphro-D',
    title: 'Video/3D Artist',
    date: '2021 - 2022',
    description: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to implementation details is well-documented.",
    icon: '/assets/work.svg',
    iconBg: "#000000",
    points: [
      "Made 3D renders and models for this supliment company.",
      "Editing workout and talking head videos.",
      "Created a brand identity and guidelines."
    ],
  },
];
export const EducationExperiences = [
  {
    id: 1,  
    company_name: 'Pune University',
    title: 'AIML',
    date: '2022 - 2026',
    description: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/school.svg',
    iconBg: "#ff0000",
    points: [
      "Currently in 3rd Year of AIML Branch.",
      "Empulse Artilect Event Design Head for the year 2023",
      "Working hard to handle a good pointer while doing an Internship."
    ],
  },
  {
    id: 2,
    company_name: "SSVM Jr College",
    title: 'Science',
    date: '2020 - 2022',
    description: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations.",
    icon: '/assets/school.svg',
    iconBg: "#000000",
    points: [
      "Completed my 12th in Science with Electronics.",
      "Learned higher level mathematics while studying for JEE.",
    ],
  },
  {
    id: 3,
    company_name: 'KHS Aundh',
    title: 'Highschool',
    date: '2008 - 2020',
    description: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to implementation details is well-documented.",
    icon: '/assets/school.svg',
    iconBg: "#000000",
    points: [
      "Completed my highschool at Kalmadi Shamrao Highschool, Aundh.",
      "Always in the computer lab either working on a school project or my own projects.",
    ],
  },
];

export const techStack = [
  { name: 'React', image: 'assets/react.svg' }, 
  { name: 'React Native', image: 'assets/react.svg' },
  { name: 'Tailwind', image: 'assets/tailwind.svg' },
  { name: 'Android', image: 'assets/android.svg' },
  { name: 'Git', image: 'assets/git.svg' },
  { name: 'Firebase', image: 'assets/firebase.svg' },
  { name: 'Java', image: 'assets/java.svg' },
  { name: 'Kotlin', image: 'assets/kotlin.svg' },
];