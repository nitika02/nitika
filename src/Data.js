import { FaHtml5, FaBootstrap ,FaCss3, FaNodeJs, FaReact,FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import {SiRedux} from "react-icons/si"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [

  {
    id: 1,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nitika-garg-frontend/"
  },
  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/nitika02"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    href: "mailto:garg.nitika1998@gmail.com"
  }

  
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Nitika Garg"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "7888375654"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "garg.nitika1998@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <SiRedux />, <SiNetlify />, <SiExpress /> , <SiVisualstudio/>, <FaBootstrap />,<FaNodeJs />, <FaGithub />, <SiMongodb />, <FaJava />, <FaFigma />, <SiPostman />]

export const experiences = [
  {
    id: 1,
    year: "2022-2023",
    position: "FullStack Web Development",
    company: "Masai School"
  },
  {
    di: 2,
    year: "2022-2022",
    position: "Frontend Development Career Path",
    company: "Scrimba"
  },
  {
    id: 3,
    year: "2020-2022",
    position: "Msc Chemistry",
    company: "Dr. B.R Ambedkar National Institute of Technology, Jalandhar"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1000+',
    itemName: "Hours of Frontend Coding"
  },
  {
    id: 2,
    number: "600+",
    itemName: "OJ and Leetcode Questions Solved"
  },
  {
    id: 3,
    number: "20+",
    itemName: "Projects Done"
  },
  {
    id: 4,
    number: "500+",
    itemName: "Hours of DSA"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    title: "Wizard Game",
    category: "Javascript",
    ghref : "https://github.com/nitika02/wizard-game",
    nhref : "https://wizard-game02.netlify.app",
    tech: "HTML, CSS, Javascript",
    desc : "This is a game built using javascript and contains 3 level which automatically updates after 5 seconds."
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    title: "Drivezy Clone",
    category: "Javascript",
    ghref : "https://github.com/viz404/drivezy-clone",
    nhref : "https://drivezy-clone.netlify.app",
    tech: "HTML, CSS, Javascript",
    desc: "Built in collaboration this is a clone of a real e-commerce website drivezy. It contains all the functionalities from filtering to booking a vehicle."
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    title: "Asos Clone",
    category: "Javascript",
    ghref : "https://github.com/nitika02/Asos",
    nhref : "https://asos-clone-cw.netlify.app/",
    tech: "HTML, CSS, Javascript, Json-server",
    desc: "It is a clone of an e-commerce website which contains Home Page, Login and signup functionality, Search functionality, Product results page with sorting and filtering functionality."
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    title: "Zomato Clone",
    category: "React",
    ghref : "https://github.com/nitika02/zomato-clone",
    nhref : "https://zomato-clone02.netlify.app",
    tech: "HTML, CSS, Javascript, React",
    desc: "This is the clone of products page of zomato clone built using react"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    title: "Meme Generator",
    category: 'React',
    ghref : "https://github.com/nitika02/memeGenerator",
    nhref : "https://memegenerator02.netlify.app",
    tech: "HTML, CSS, Javascript, React",
    desc : "This is a meme generator app built using react where u can choose a pic and add text to it."
  },
  {
    id: 6,
    img: work7,
    name: "project 6",
    title: "Flipkart Clone",
    category: 'React',
    ghref : "https://github.com/nitika02/Flipkart-Clone",
    nhref : "https://flipkart-clone02.netlify.app/",
    tech: "MERN, Material UI, Redux",
    desc : "This is a clone of famous e-commerce website Flipkart built using MERN Stack in integration with Stripe Payment gateway."
  },
  {
    id: 7,
    img: work8,
    name: "project 7",
    title: "Dineout Clone",
    category: 'React',
    ghref : "https://github.com/Abhinavsinha18/DineoutClone",
    nhref : "https://io-dineout.netlify.app/",
    tech: "React, React-Redux, Chakra-UI",
    desc : "This is a clone of Dineout website where user can signup/login and search for a restaurant and book a restaurant."
  }
  
]


export const workNavs = [
  "All", "Javascript", "React"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Faridkot, Punjab"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "garg.nitika1998@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "7888375654"
  }
]
