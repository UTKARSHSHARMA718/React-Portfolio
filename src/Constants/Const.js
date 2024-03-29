import { ABOUT, BLOGS, BOOKS, HOME, RESUME, WORK } from "./routeNames";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";

// Social profile links
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/iking7sharma/";
export const GTIHUB_PROFILE_URL = "https://github.com/UTKARSHSHARMA718";
export const HASHNODE_PROFILE_URL = "https://hashnode.com/@Utkarsh-sharma";
export const LINKEDIN_PROFILE_URL =
  "https://www.linkedin.com/in/utkarsh-sharma-98860520a?challengeId=AQEWdq3hUo66hAAAAYBPQuu6IBFiHYRT63JuuQSAgMLCzVIbqD5btcHpAyWOGbg-gbW_gCT62OlhRxA7WolDOr-erphVDH9zZw&submissionId=7db529c6-6e19-e816-fd26-5434f8d05a22&original_referer=";
export const TWITTER_PROFILE_URL =
  "https://twitter.com/learningbeing18?t=HHau01-onE590wY8CGArIw&s=09";

//API
// export const HASHNODE_API = "https://api.hashnode.com/";
export const HASHNODE_API = "https://gql.hashnode.com/";

export const apiKey = "AIzaSyCUbECFMXyTKSFvtgu-S5OIbestJRc8d4U";

export const GOOGLE_BOOKS_API_END_POINT =
  "https://www.googleapis.com/books/v1/volumes?q=";

// export const booksApiKey = "AIzaSyCUbECFMXyTKSFvtgu-S5OIbestJRc8d4U"; // older but valid API key
export const booksApiKey = "AIzaSyCMhVladzH31_JDJNQUzcwY6T-fm4y9buk";

export const BLOGS_END_POINT = "https://supercomputing.hashnode.dev/";

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
];

export const SOCIAL_ICONS = [
  {
    label: "Github",
    href: GTIHUB_PROFILE_URL,
    icon: faGithub,
  },
  { href: TWITTER_PROFILE_URL, icon: faTwitter, label: "Twitter" },
  { href: LINKEDIN_PROFILE_URL, icon: faLinkedin, label: "LinkedIn" },
  { href: HASHNODE_PROFILE_URL, icon: faHashnode, label: "Hashnode" },
  { href: INSTAGRAM_PROFILE_URL, icon: faInstagram, label: "Instagram" },
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
