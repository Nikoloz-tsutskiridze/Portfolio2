import { FaXTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "education", name: "education" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "- C#, Styled Components, TypeScript, HTML, CSS, JavaScript, React, Next.js, Supabase, Git, GSAP, Tailwind CSS, .NET";

export const PROJECTS = [
  {
    id: 1,
    title: "Dwell & Decor",
    description:
      "A platform where customers can register, browse, and purchase their favorite products. Features an intuitive admin panel for seamless product management.",
    imgSrc: project1,
    link: "https://dwell-decor.vercel.app/",
  },
  {
    id: 2,
    title: "World-Wize",
    description:
      "An interactive application where users can mark and keep track of places they have visited around the world.",
    imgSrc: project2,
    link: "https://your-world-wize-link.com",
  },
  {
    id: 4,
    title: "Number Game",
    description:
      "A fun number guessing game where players try to guess the correct number.",
    imgSrc: project3,
    link: "https://number-game-ten-iota.vercel.app/",
  },
  {
    id: 3,
    title: "The Wild Oasis - Web",
    description:
      "A web application designed for customers to easily book wooden cabins for their desired dates.",
    imgSrc: project5,
    link: "https://the-wild-oasis-web-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Rainbow Six Siege",
    description:
      "A website that helps users discover Rainbow Six Siege, offering a user-friendly interface. Built with GSAP.",
    imgSrc: project4,
    link: "https://rainbow-six-siegee.vercel.app/",
  },
  {
    id: 9,
    title: "Github - User Checker",
    description:
      "A simple web application that fetches and displays GitHub user information, including repositories, followers, and more.",
    imgSrc: project9,
    link: "https://github-users-checker.vercel.app/",
  },
  {
    id: 7,
    title: "The Wild Oasis - Admin Panel",
    description:
      "An admin panel designed for efficient management of wooden cabin data.",
    imgSrc: project7,
    link: "https://the-woodland-haven.netlify.app/login",
  },
  {
    id: 8,
    title: "Cartify",
    description:
      "A responsive e-commerce platform where users can register and browse a wide selection of products, offering a seamless shopping experience.",
    imgSrc: project8,
    link: "https://cartify-tawny.vercel.app/",
  },
  {
    id: 6,
    title: "Pig Game",
    description:
      "A fun two-player dice game where players take turns rolling the dice to reach 100 points. If a player rolls a 1, their turn ends, and the other player gets a chance to score.",
    imgSrc: project6,
    link: "https://pig-game-eta-ten.vercel.app/",
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2022 - 2023",
    role: "Front-end Developer",
    company: "Freelancers-Team",
    description:
      "As a freelance developer, I collaborated closely with a dynamic team of developers, designers, and project managers to build, enhance, and maintain web applications. This experience helped me shape my path for future development.",
    techStack: [],
  },
  {
    yearRange: "2021 - 2022",
    role: "Heating Sales Consultant",
    company: "Domino",
    description:
      "Developed expertise in HVAC solutions, effectively identifying client needs and recommending tailored heating and cooling systems. Gained valuable technical knowledge and sales experience in a specialized industry.",
    techStack: [],
  },
  {
    yearRange: "2020 - 2021",
    role: "Assistant Manager",
    company: "Tegeta Motors",
    description:
      "Oversaw daily operations and coordinated with staff to ensure efficient workflow. Built strong leadership and communication skills, fostering a collaborative and productive work environment.",
    techStack: [],
  },
  {
    yearRange: "2019 - 2020",
    role: "Lifeguard",
    company: "Gino Paradise",
    description:
      "Ensured the safety of visitors by performing vigilant water monitoring and emergency response. Proficient in CPR, first aid, and water rescue, consistently maintaining a secure environment.",
    techStack: [],
  },
  {
    yearRange: "2016 - 2017",
    role: "Sales Consultant",
    company: "Universami",
    description:
      "Embarked on my professional journey, gaining invaluable early exposure to sales and customer service. Quickly adapted to workplace responsibilities and developed effective communication skills.",
    techStack: [],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Computer Science",
    institution: "Georgian Technical University",
    duration: "2020 - 2025",
    description:
      "Georgian Technical University was where I took my first steps in the Computer Science department. It was here that I learned the basics of web development, along with many other foundational skills.",
  },
  {
    id: 2,
    degree: "Frontend Development - React",
    institution: "Skillwill Neo University",
    duration: "2024 - 2025",
    description:
      "The course provided a fundamental understanding of programming and the web development process, including best practices. I gained not only technical skills but also personal growth, which helped shape my overall development.",
    certificatePDF: "/Skillwill.pdf",
    certificateThumbnail: "/certificate.png",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Nikoloz-tsutskiridze",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/nikoloz-tsutskiridze-990790299/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100009144795747",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/Tsutskiridze11",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I'm always eager to collaborate on exciting and challenging projects. Whether you have a specific idea in mind or just want to explore potential opportunities, let's connect! Together, we can combine our skills and creativity to bring innovative solutions to life. Feel free to reach out, and let's make something amazing happen.",
  email: "nikoloz.tsutskiridze11@gmail.com",
  phone: "+995-574-124-324",
};
