
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  lungcancer,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  textrecognition,
  chatbot,
  vuejs,
  springboot,
  mivada,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java Springboot",
    icon: springboot,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Mivada",
    icon: mivada,
    iconBg: "#383E56",
    date: "Aug 2024 - present",
    points: [
      "Develop and maintain full-stack applications using React, Node.js, Vue, and Spring Boot.",
      "Collaborate with business analysts and clients to gather requirements, refine use cases, and deliver scalable, user-friendly solutions that align with business goals.",
      "Optimize CI/CD pipelines on Bitbucket and AWS, handling deployments, versioning, and release automation with Maven/JReleaser.",
      "Participate in code reviews and contribute to improving coding standards, maintainability, and best practices across projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Lung Cancer Detection",
    description:
      "Developed a lung cancer detection model using Convolutional Neural Networks (CNNs) trained on a Kaggle dataset. The model extracts spatial features from CT scan images to improve early detection accuracy and assist in diagnosis.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
 
    ],
    image: lungcancer,
    source_code_link: "https://github.com/khajamoinuddin26/Lung-Cancer-Detection-using-CNN",
  },
  {
    name: "Text Recognition",
    description:
      "Built a text recognition system using Optical Character Recognition (OCR) with PyTesseract to extract text from images. The solution enables accurate conversion of printed text into editable digital content for document digitization.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: textrecognition,
    source_code_link: "https://github.com/khajamoinuddin26/TextRecognition",
  },
  {
    name: "Computer Science Bot",
    description:
      "Developed an intelligent chatbot for answering computer science-related queries using NLP techniques. The bot was trained on curated datasets to provide accurate responses, assisting users in learning and problem-solving across various CS topics.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/khajamoinuddin26/Computer-Science-Bot",
  }
];

export { services, technologies, experiences, testimonials, projects };
