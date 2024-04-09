"use client";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import "./hover.css";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const interMedium = Inter({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});
const interBold = Inter({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [chosenLink, setChosenLink] = useState("about");

  const handleLinkClick = (link) => {
    setChosenLink(link);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: window.scrollY + e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  const experience = [
    {
      date: 'Jan. 2024 — April. 2024',
      position: 'Software Developer',
      company: 'Semper8',
      link: 'https://semper8.com/',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.",
      skills: [
        "React Native",
        "Javascript",
        "Figma",
      ]
    },
    {
      date: 'May. 2023 — Aug. 2023',
      position: 'Software Developer',
      company: 'Lawbrokr',
      link: 'https://www.lawbrokr.com/',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.",
      skills: [
        "Ruby on Rails",
        "SaaS",
        "MVC",
        "Ruby",
        "Javascript",
        "Tailwind CSS",
        "Docker",
      ]
    },
    {
      date: 'Sep. 2022 — Dec. 2022',
      position: 'Product Manager',
      company: 'Purolator',
      link: 'https://www.purolator.com/en',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.",
      skills: [
        "Process Improvement",
        "Microsoft Excel",
        "Data Analytics",
        "Agile Methodologies",
        "Confluence",
        "Firebase",
        "Jira",
      ]
    },
    {
      date: 'Jan. 2022 — Apr. 2022',
      position: 'CI Infrastructure Intern',
      company: 'Environment and Climate Change Canada',
      link: 'https://www.canada.ca/en/environment-climate-change.html',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.",
      skills: [
        "Git",
        "Linux",
        "CI/CD",
        "Bash",
      ]
    },
    {
      date: 'May. 2021 — Sep. 2021',
      position: 'Customer Success Support',
      company: 'FSET',
      link: 'https://fset.inc/',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.",
      skills: [
        "Project Planning and Coordination",
        "Analytics",
        "Communication",
        "Data Analysis",
        "Microsoft Excel",
        "Documentation",
        "Customer Support",
      ]
    },
  ];

  const projects = [
    {
      title: 'Reddit-ish',
      link: 'https://github.com/sm0hasan/reddit-blogging-website',
      description: "Developed a feature-rich blog platform with user authentication via Devise, enabling seamless registration, post creation/editing, image uploads, and interactive features like voting, commenting, and searching. Utilized Tailwind for front-end design, integrated Pagy for pagination, and implemented custom CSS to ensure the development of a user-friendly, modern, and responsive blog interface within an MVC framework",
      stack: [
        "Ruby on Rails",
        "Ruby",
        "Javascript",
        "Tailwind CSS",
      ]
    },
    {
      title: 'Reddit-ish',
      link: 'https://github.com/sm0hasan/reddit-blogging-website',
      description: "Developed a feature-rich blog platform with user authentication via Devise, enabling seamless registration, post creation/editing, image uploads, and interactive features like voting, commenting, and searching. Utilized Tailwind for front-end design, integrated Pagy for pagination, and implemented custom CSS to ensure the development of a user-friendly, modern, and responsive blog interface within an MVC framework",
      stack: [
        "Ruby on Rails",
        "Ruby",
        "Javascript",
        "Tailwind CSS",
      ]
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main
      className="bg-slate-900 flex justify-center h-full w-auto background"
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      }}
    >
      <section className="sticky left-0 top-0 h-screen w-2 bg-slate-700 vanish">
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      <p class="loop-text">Open To Work — Fall 2024 |</p>
      </section >
      <div className="md:flex md:flex-row md:justify-end w-[100%] lg:w-[78rem] h-full py-12 px-10 z-10">
        
        {/* Top */}
        <section className=" static md:sticky md:top-14 md:z-40 md:w-1/2 py-8 flex flex-col justify-start px-2 md:justify-between md:h-[90vh] sm:mr-10">
          <div className="shift">
            <h1
              className={`${interBold.className} text-5xl text-slate-200 text-nowrap w-fit tracking-tight name px-2`}
            >
              Mustafa Hasan
            </h1>
            <h2
              className={`${interMedium.className} text-xl text-slate-200 mt-3 tracking-tight`}
            >
              4th Year Computer Engineering
            </h2>
            <h3
              className={`${inter.className} text-base mt-3 text-slate-400 max-w-xs`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <div className="mt-20 flex flex-col gap-5 hide">
              <a href="#about" onClick={() => handleLinkClick("about")}>
                <div className={`${interMedium.className} ${chosenLink === "about" ? "chosenLink" : ""} w-fit subLink text-xs uppercase tracking-widest text-slate-200`}>
                  About
                </div>
              </a>
              <a href="#experience" onClick={() => handleLinkClick("experience")}>
                <div className={`${interMedium.className} ${chosenLink === "experience" ? "chosenLink" : ""} w-fit subLink text-xs uppercase tracking-widest text-slate-200`}>
                  Experience
                </div>
              </a>
              <a href="#projects" onClick={() => handleLinkClick("projects")}>
                <div className={`${interMedium.className} ${chosenLink === "projects" ? "chosenLink" : ""} w-fit subLink text-xs uppercase tracking-widest text-slate-200`}>
                  Projects
                </div>
              </a>
              <a href="#contact" onClick={() => handleLinkClick("contact")}>
                <div className={`${interMedium.className} ${chosenLink === "contact" ? "chosenLink" : ""} w-fit subLink text-xs uppercase tracking-widest text-slate-200`}>
                  Contact
                </div>
              </a>
            </div>
          </div>
          <div className="py-8 text-4xl flex gap-5 text-slate-400 shift">
            <a href="https://github.com/sm0hasan">
              <AiFillGithub className="hover:text-slate-200"/>
            </a>
            <a href="https://www.linkedin.com/in/syed-mustafa-hasan/">
              <AiFillLinkedin className="hover:text-slate-200"/>
            </a>
            <a href="#" target="_blank" className="flex hover:text-teal-300">
              <div className={`${inter.className} text-base border-slate-400 text-slate-400 px-3 border-[3px] flex flex-col justify-center hover:text-teal-300 hover:border-teal-300`}>
                Resume
              </div>
            </a>
            
          </div>
        </section>

        {/* Content */}
        <section className="md:w-1/2 mt-12">
          {/* About */}
          <div className="pb-4" id="about">
            <div className="px-2 py-2 sticky top-0 w-full backdrop-blur">
              <h3 className={`${interBold.className} text-sm uppercase tracking-widest text-slate-200`}>
                About
              </h3>
            </div>
            <div className="px-2 pb-4">
              <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a className={`${interMedium.className} text-slate-200 hover:text-teal-300`}>
                  incididunt
                </a> ut labore et dolore magna aliqua.
              </p>
              <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                <a className={`${interMedium.className} text-slate-200 hover:text-teal-300`}>
                  {' '}commodo
                </a> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                Vitae justo eget magna fermentum. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Hendrerit dolor magna eget est lorem. Tristique et egestas quis ipsum suspendisse.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="pb-4" id="experience">
            <div className="p-2 mb-8 sticky top-0 w-full backdrop-blur">
              <h3 className={`${interBold.className} text-sm uppercase tracking-widest text-slate-200`}>
                Experience
              </h3>
            </div>
            <div className="">
              {experience.map((item, index) => (
                // <div className="md:mb-3 md:pt-3 md:pb-2 md:pl-6 md:pr-5 md:rounded md:hover:shadow-2xl md:hover:!opacity-100 mb-6">
                <div
                  className={`cardContainer md:mb-3 md:pt-3 md:pb-2 md:pl-6 md:pr-5 md:rounded-lg mb-6 md:hover:shadow-2xl md:hover:bg-slate-800/50 ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-50"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h5 className={`${interMedium.className} min-w-fit mr-6 text-xs uppercase tracking-wide text-slate-500`}>
                    {item.date}
                  </h5>
                  <div>
                    <a href={item.link} target="_blank" className="outerDiv w-fit flex text-slate-200 hover:text-teal-300">
                      <h4 className={`${interMedium.className} dateCard mt-2 text-[0.93rem] tracking-wide`}>
                        <span className="uppercase">{item.position}</span> · {item.company}
                      </h4>
                      <BsArrowUpRight className="mt-2 ml-1 innerDiv" />
                    </a>
                    
                    <p className={`${inter.className} text-sm mt-2 text-slate-400 pb-1`}>{item.description}</p>
                    <div className="py-1 flex flex-wrap">
                      {item.skills.map((skills, index) => (
                        <div className={`${inter.className} text-xs text-teal-300 px-3 py-1 rounded-full bg-teal-950 min-w-fit mr-1 mb-1`}>
                          {skills}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Projects */}
          <div className="pb-4" id="projects">
            <div className="p-2 mb-8 sticky top-0 w-full backdrop-blur">
              <h3 className={`${interBold.className} text-sm uppercase tracking-widest text-slate-200`}>
                Projects
              </h3>
            </div>
            <div className="px-2">
              {projects.map((item, index) => (
                <div className="pb-6">
                  <a href={item.link} target="_blank" className="outerDiv w-fit flex text-slate-200 hover:text-teal-300">
                    <h4 className={`${interMedium.className} mt-2 text-[0.93rem] tracking-wide uppercase`}>
                      {item.title}
                    </h4>
                    <BsArrowUpRight className="mt-2 ml-1 innerDiv" />
                  </a>
                  <p className={`${inter.className} text-sm mt-2 text-slate-400 pb-1`}>{item.description}</p>
                  <div className="py-1 flex flex-wrap">
                    {item.stack.map((item, index) => (
                      <div className={`${inter.className} text-xs text-teal-300 px-3 py-1 rounded-full bg-teal-950 min-w-fit mr-1 mb-1`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
          
          {/* Contact form */}
          <div id="contact">

          </div>
        </section>
      </div>
    </main>
  );
}
