import {
  BoltIcon,
  Cog8ToothIcon,
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  PlusCircleIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import {
  UserIcon,
  DocumentIcon,
  BriefcaseIcon,
  FolderOpenIcon,
  IdentificationIcon,
  PhoneIcon,
  InboxIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";

export const menuItems = [
  {
    id: 1,
    label: "About",
    icon: <UserIcon />,
    active: true,
    url: "/",
  },
  {
    id: 2,
    label: "Resume",
    icon: <DocumentIcon />,
    active: false,
    url: "/resume",
  },
  {
    id: 3,
    label: "Works",
    icon: <BriefcaseIcon />,
    active: false,
    url: "/works",
  },
  {
    id: 4,
    label: "Projects",
    icon: <FolderOpenIcon />,
    active: true,
    url: "/projects",
  },
  {
    id: 1,
    label: "Contact Me",
    icon: <IdentificationIcon />,
    active: true,
    url: "/contact",
  },
];

export const homeContactDetails = [
  {
    id: 1,
    name: "Phone",
    icon: <PhoneIcon />,
    content: "8989440516",
  },
  {
    id: 2,
    name: "Email",
    icon: <InboxIcon />,
    content: "vinichimania98@gmail.com",
  },
  {
    id: 3,
    name: "Location",
    icon: <GlobeAsiaAustraliaIcon />,
    content: "Bangalore",
  },
  {
    id: 4,
    name: "DOB",
    icon: <CakeIcon />,
    content: "28 May,1998",
  },
];

export const connectionDetails = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    name: "Github",
    link: "https://github.com/vchimania",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    name: "Linkedin",
    link: "https://www.linkedin.com/in/vini-chimania/",
  },
];

export const techStats = [
  {
    img:'https://www.kindpng.com/picc/m/348-3487784_the-react-logo-react-native-icon-png-transparent.png',
    id: 1,
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png",
    id: 2,
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-256/free-html5-2474813-2056052.png",
    id: 3,
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    id: 4,
  },
  {
    img: "https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png",
    id: 5,
  },
  {
    img: "https://css-tricks.com/wp-content/uploads/2021/12/1200x627-Lightsvg-1.svg",
    id: 6,
  },
];

export const whatIDo = [
  {
    id: 1,
    title: "Ui/Ux Design",
    description:
      "I create visually engaging and user-friendly interfaces, ensuring a seamless and enjoyable experience for users across different devices and platforms",
    icon: <BoltIcon />,
  },
  {
    id: 2,
    title: "Product Requirement",
    description:
      "I excel at understanding and translating product requirements into well-structured and scalable code, delivering intuitive and responsive user interfaces that align perfectly with the project's vision and objectives",
    icon: <PlusCircleIcon />,
  },
  {
    id: 3,
    title: "Managment",
    description:
      "As a frontend developer with a strong background in project management, I adeptly coordinate cross-functional teams, streamline workflows, and ensure timely delivery of high-quality projects. I thrive in driving collaboration, fostering communication, and achieving successful outcomes that exceed client expectations.",
    icon: <Cog8ToothIcon />,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Specialize in crafting visually appealing and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and React, I create responsive and interactive websites that deliver seamless navigation and engage users effectively. My passion for innovation drives me to stay updated with the latest web development trends and technologies.",
    icon: <GlobeAltIcon />,
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "I am well-versed in the deployment process, ensuring that my web applications are efficiently launched and accessible to users across different platforms and devices. I strive to optimize performance and implement secure deployment strategies to deliver a smooth and reliable user experience.",
    icon: <SwatchIcon />,
  },
  {
    id: 6,
    title: "Maintance",
    description:
      "Actively engage in ongoing maintenance and updates of web applications, ensuring seamless functionality, fixing bugs, and enhancing user experience, to keep the websites running smoothly and up-to-date.",
    icon: <WrenchScrewdriverIcon />,
  },
];

export const eductaion = [
  {
    id: 1,
    year: "2016-2020",
    branch: "CSE",
    college: "Truba Institute of Engineering and IT",
    marks: "75.8%",
    location: "Bhopal",
  },
  {
    id: 2,
    year: "2016",
    branch: "High School",
    college: "Silver Bells H.S School",
    marks: "65.5%",
    location: "Bhopal",
  },
];

export const experience = [
  {
    id: 1,
    year: "Oct,2021 - till date",
    organisation: "OTO Capital",
    desgination: "SDE-1",
    techStack: "ReachJS, HTML, CSS, Tailwind, Remix",
    location: "Bangalore",
  },
  {
    id: 2,
    year: "August,2022 - till date",
    organisation: "Newton School",
    desgination: "Mock Interviewer",
    techStack: "ReachJS, HTML, CSS",
    location: "Bangalore",
  },
  {
    id: 3,
    year: "March,2021 - August,2021",
    organisation: "Trukker Technologies",
    desgination: "SDE-1",
    techStack: "ReachJS, VueJs",
    location: "Bangalore",
  },
  {
    id: 4,
    year: "August,2020 - March,2021",
    organisation: "Newton School",
    desgination: "Intern",
    techStack: "ReachJS, HTML, CSS",
    location: "Bangalore",
  },
];

export const boxColors = [
  'bg-[#fcf4ff]',
  'bg-[#fefaf0]',
  'bg-[#fcf4ff]',
  'bg-[#fff4f4]',
  'bg-[#fff0f8]',
  'bg-[#f3faff]',
];
