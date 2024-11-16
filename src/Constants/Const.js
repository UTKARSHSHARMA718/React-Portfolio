import {
  ABOUT,
  BLOGS,
  BOOKS,
  CONTACT_ME,
  HOME,
  RESUME,
  WORK,
} from "./routeNames";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiPreact } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//General text
export const GENERAL_ERROR_TEXT = "Something went wrong!";
export const ERROR_OCCURED = "Error Occurred";

// variables for specific purpose
export const CHARACTERS_TO_BE_SHOWN = 100;

//moving particles
export const particlesOptions = {
  particles: {
    number: {
      value: 104,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#42f55d",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export const PROGRAMMING_SKILLS = {
  group1: [
    "React JS",
    "Javascript",
    "Tailwind",
    "Next JS",
    "Typescript",
    "Express JS",
    "Node JS",
    "SQL",
    "Ant design",
    "Material UI",
  ],
  group2: [
    "CSS",
    "C",
    "Docker",
    "Mongo DB",
    "Html",
    "Java",
    "Boostrap",
    "React-Native",
  ],
};

export const NON_TECHNICAL_SKILL = {
  group1: ["Photoshop", "Illustrator"],
};

export const NAV_LINKS = [
  {
    text: "home",
    to: HOME,
  },
  {
    text: "blogs",
    to: BLOGS,
  },
  {
    text: "books_corner",
    to: BOOKS,
  },
  {
    text: "projects",
    to: WORK,
  },
  {
    text: "resume",
    to: RESUME,
  },
  {
    text: "about",
    to: ABOUT,
  },
  {
    text: "contact",
    to: CONTACT_ME,
  },
];

export const SOCIAL_ICONS = [
  {
    label: "Github",
    href: process.env.REACT_APP_GTIHUB_PROFILE_URL,
    icon: faGithub,
  },
  { href: process.env.REACT_APP_TWITTER_PROFILE_URL, icon: faTwitter, label: "Twitter" },
  { href: process.env.REACT_APP_LINKEDIN_PROFILE_URL, icon: faLinkedin, label: "LinkedIn" },
  { href: process.env.REACT_APP_HASHNODE_PROFILE_URL, icon: faHashnode, label: "Hashnode" },
  { href: process.env.REACT_APP_INSTAGRAM_PROFILE_URL , icon: faInstagram, label: "Instagram" },
  // { href: GTIHUB_PROFILE_URL, icon: faYoutube }, // might be needed later
];

export const BOOK_SEARCH_QUERY = "book-search";

export const LANGUAGES = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Spanish",
    value: "sp",
  },
  {
    label: "Mandarin",
    value: "man",
  },
];

export const LANGUAGE = "i18nextLng";

export const PROJECTS_SIDEBAR = [
  { label: "Javascript", icon: IoLogoJavascript },
  { label: "React JS", icon: FaReact },
  { label: "React Native", icon: SiPreact },
  { label: "Node Js", icon: FaNode },
  { label: "Next JS", icon: SiNextdotjs },
];

export const EXPERIENCE_DATA = [
  {
    title: "smartIndiaHackathon_name",
    description: "smartIndiaHackathon_desc",
    image: "https://im.rediff.com/news/2016/dec/26smart-india.jpg",
    date: "4-2022 to 7-2022",
  },
  {
    title: "netcamp_name",
    description: "netcamp_desc",
    image:
      "https://th.bing.com/th/id/R.0c78ba74f61b7195124e160cb6e13c27?rik=cFZwhiBKkkKdow&riu=http%3a%2f%2fwww.netcamp.in%2fapplication%2fassets%2fimg%2fnetcamp-logo.jpg&ehk=%2fQ0oVz3MWoAP3AfP%2fEsPdUDRmUmhlGgU6ybAb2u%2faUw%3d&risl=&pid=ImgRaw&r=0",
    date: "8-2022 to 9-2022",
  },
  {
    title: "unthinkableSolutions_name",
    description: "unthinkableSolutions_desc",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQEawcpuMBGTFg/company-logo_200_200/0/1630636440658/unthinkable_software_logo?e=1720656000&v=beta&t=3fZXK51Jy0du9ePEGzP1Om8zbGhOQa9h58kOhaMVuEo",
    date: "4-2023 to 2-2024",
  },
];

export const CONTACT_DETAILS = [
  {
    label: "email",
    value: "utkarsh79sharma@gmail.com",
    isEmail: true,
    icon: MdEmail,
  },
  {
    label: "address",
    value: "personalAddress",
    icon: FaAddressCard,
  },
  {
    label: "linkedIn",
    value: "utkarshsharma",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/utkarsh-sharma-98860520a/",
  },
];
