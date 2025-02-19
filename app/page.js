  "use client";
  import Image from "next/image";
  import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
  import { BsArrowUpRight } from "react-icons/bs";
  import { useState, useEffect } from "react";
  import "./hover.css";
  import "./globals.css";
  import RedditImage from "../public/images/reddit2.png";
  // import AWSLogo from '../public/images/amazon_web_services_logo.jpg'
  import BoxOffice from "../public/images/boxoffice.png";
  import Radar from "../public/images/radar.png";
  import Link from 'next/link';


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
        description: "Developed and styled interactive components for a social media app, including critical components like attaching external content while messaging other parties. Conducted rigorous testing on iOS and Android devices, gathering feedback to identify pain points and areas for improvement on the design to enhance usability.",
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
        description: "Revamped the entire application's front-end, translating designs into user-friendly interfaces using Tailwind, HTML, CSS, JavaScript, and Ruby. Architected the back-end model and controller to seamlessly integrate data into the front-end, utilizing Chart.js for dynamic presentation of real-time data visualization.",
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
        description: "Designed, launched, and managed new products, including an address book application. Facilitated cross-functional teams, including Billing, ERP, Marketing, and Communication \& Technology Support departments, to develop and implement retail requirements for corporate and agent stores as well as lead a digitization proposal to reduce paper usage and costs, which improved customer experience and streamlined processes for retail staff and employees.",
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
        description: "Established a continuous integration infrastructure for the NEMO prediction model using GitLab CI and parallel programs in a high performance computing environment with Linux and Bash. Implemented features like scheduling Cron jobs and proactively identified/resolved pipeline, environment, setup, and code issues through testing and troubleshooting, enhancing system reliability and user experience in the long term.",
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
        description: "Composed a document library, technical and non-technical for client and internal facing. Generated analytics for each account to address predominant issues and trend analysis as quarterly reports, increasing ticket completion by 5%. Collaborated with IT Services, Finance \& Operations, and other cross functional teams to address security issues.",
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
        ],
        image: RedditImage,
      },
      {
        title: 'Movies Database',
        link: 'https://github.com/sm0hasan/movies-database',
        description: "Architected a MySQL database to hold movie information that can be used for data mining and client applications. Developed a GUI for a client application using Python to allow users to carry out available queries.",
        stack: [
          "Python",
          "MySQL",
        ],
        image: BoxOffice,
      },
      {
        title: 'TCP/UDP Network Simulation',
        link: 'https://github.com/sm0hasan/tcp-udp-networks',
        description: "Simulated TCP and UDP networks to optimize performance, evaluating latency, throughput, and reliability metrics. Integrated Postman for protocol testing and analysis, ensuring scalability and robustness through comprehensive API endpoint testing and load testing.",
        stack: [
          "Python",
          "Postman",
        ],
        image: null,
      },
      {
        title: 'Real-time Operating System (RTX)',
        link: null,
        description: "Designed and implemented an RTX on Intel DE1-SoC board with a multi-programming environment for dynamic memory management, inter-task communications, and console I/O. Developed a scheduling algorithm for dynamic task management, supporting task preemption, creation, and deletion through an implemented version of malloc \& dealloc.",
        stack: [
          "C",
        ],
        image: null,
      },
      {
        title: 'Proximity Radar System',
        link: null,
        description: "Built a objection detection system utilizing an ultrasonic radar and STM32CubeIDE in C to scan for obstacles and provide various measurements.",
        stack: [
          "C",
          "PCB Designing"
        ],
        image: Radar,
      },
    ];

    const certification = [
      {
        title: 'AWS Certified Cloud Practitioner',
        org: 'Amazon Web Service (AWS)',
        issued: 'Dec 2024',
        expires: 'Dec 2027',
        link: 'https://www.credly.com/badges/8391c42f-ed2e-43d2-bc9e-416bdf8514c6/linked_in_profile',
        // image: AWSLogo,
      },
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

    return (
      <main
        className="bg-[#060a11] flex justify-center h-full w-auto background"
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        }}
      >
        <section className="sticky left-0 top-0 h-screen w-2 bg-[#d5bdaf] vanish">
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
          <p className="loop-text">Open To Work — New Grad 2025 |</p>
        </section >
        <div className="md:flex md:flex-row md:justify-end w-[100%] lg:w-[78rem] h-full z-10">
          
          {/* Top */}
          <section className=" static md:sticky md:top-14 md:z-40 md:w-1/2 py-8 px-12 flex flex-col justify-start md:justify-between md:h-[90vh] sm:mr-10">
            <div className="shift">
              <h1
                className={`${interBold.className} md:text-5xl text-2xl text-slate-200 text-nowrap w-fit tracking-tight name px-2`}
              >
                Mustafa Hasan
              </h1>
              <h2
                className={`${interMedium.className} text-xl text-slate-200 mt-4 mb-1 tracking-tight`}
              >
                4th Year Computer Engineering
              </h2>
              <h2
                className={`${interMedium.className} text-xl text-slate-200 mt-0 mb-6 tracking-tight`}
              >
                University of Waterloo
              </h2>
              <h3
                className={`${inter.className} text-base mt-3 text-slate-400 max-w-xs`}
              >
                Welcome to my website! I use this to show some of my projects off as well as my past experiences.
              </h3>
              <div className="mt-20 flex flex-col gap-5 hide">
                <a href="#about" onClick={() => handleLinkClick("about")}>
                  <div className={`${interMedium.className} ${chosenLink === "about" ? "chosenLink" : ""} w-fit flex shrink subLink text-xs uppercase tracking-widest text-slate-200`}>
                    About
                  </div>
                </a>
                <a href="#experience" onClick={() => handleLinkClick("experience")}>
                  <div className={`${interMedium.className} ${chosenLink === "experience" ? "chosenLink" : ""} w-fit flex shrink subLink text-xs uppercase tracking-widest text-slate-200`}>
                    Experience
                  </div>
                </a>
                <a href="#projects" onClick={() => handleLinkClick("projects")}>
                  <div className={`${interMedium.className} ${chosenLink === "projects" ? "chosenLink" : ""} w-fit flex shrink subLink text-xs uppercase tracking-widest text-slate-200`}>
                    Projects
                  </div>
                </a>
                <a href="#cert" onClick={() => handleLinkClick("cert")}>
                  <div className={`${interMedium.className} ${chosenLink === "cert" ? "chosenLink" : ""} w-fit flex shrink subLink text-xs uppercase tracking-widest text-slate-200`}>
                    Certs
                  </div>
                </a>
              </div>
            </div>
            <div className="py-8 md:text-4xl text-3xl flex gap-5 text-slate-400 shift flex-wrap">
              <a href="https://github.com/sm0hasan" target="_blank">
                <AiFillGithub className="hover:text-slate-200"/>
              </a>
              <a href="https://www.linkedin.com/in/syed-mustafa-hasan/" target="_blank">
                <AiFillLinkedin className="hover:text-slate-200"/>
              </a>
              <a href="mailto:sm8hasan@uwaterloo.ca" target="_blank">
                <AiOutlineMail className="hover:text-slate-200"/>
              </a>
              <Link href={'/MustafaResume.pdf'} locale="false" target="_blank" alt="Resume" className="flex" rel="noopener noreferrer" aria-label="Downlod Resume">
                <div className={`${inter.className} md:text-base text-base border-slate-400 text-slate-400 px-3 border-[3px] flex flex-col justify-center hover:text-[#a8dadc] hover:border-[#a8dadc]`}>
                  Resume
                </div>
              </Link>
              
            </div>
          </section>

          {/* Content */}
          <section className="md:w-1/2 md:mt-12 md:py-12 pb-12 pt-8 px-10">
            {/* About */}
            <div className="pb-4" id="about">
              <div className="px-2 py-2 sticky top-0 w-full backdrop-blur">
                <h3 className={`${interBold.className} text-sm uppercase tracking-widest text-slate-200`}>
                  About
                </h3>
              </div>
              <div className="px-2 pb-4">
                <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                  My first take at engineering was in elementary school, where I somehow landed myself in the Vex/Lego Robotics club. Although my memory is faint of it, I know I loved the building, the creation of weird/unique solutions to problems, and having fun with my teammates. Fast-forward to today, and I have had the opportunity of
                  <span className={`${interMedium.className} text-slate-200`}> building software</span>, <span className={`${interMedium.className} text-slate-200`}>designing products</span>, <span className={`${interMedium.className} text-slate-200`}>creating a pipeline</span>, a <span className={`${interMedium.className} text-slate-200`}>documentation library</span>, and <span className={`${interMedium.className} text-slate-200`}>assisting customers</span>.
                  
                  {/* <a className={`${interMedium.className} text-slate-200 hover:text-[#a8dadc]`}>
                    incididunt
                  </a> */}
                </p>
                <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                  As of now, I am currently studying <span className={`${interMedium.className} text-slate-200`}>Computer Engineering at the University of Waterloo</span> where I have had the privelege of learning a variety of topics, like <span className={`${interMedium.className} text-slate-200`}>Computer Networks</span>, <span className={`${interMedium.className} text-slate-200`}>Database Systems</span>, and <span className={`${interMedium.className} text-slate-200`}>Real-time operating Systems</span>. My main focus is developing my current skillset and learning new skills to create unqie projects that might end up solving a problem for someone out there.
                </p>
                <p className={`${inter.className} text-base mt-3 text-slate-400 pb-1`}>
                  When I&apos;m not at the computer, I&apos;m usually playing basketball, reading, hanging out with my family, or finding new tools to make my life easier.
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
                    key={index}
                  >
                    <h5 className={`${interMedium.className} min-w-fit mr-6 text-xs uppercase tracking-wide text-slate-500`}>
                      {item.date}
                    </h5>
                    <div>
                      <a href={item.link} target="_blank" className="outerDiv w-fit flex text-slate-200 hover:text-[#a8dadc]">
                        <h4 className={`${interMedium.className} dateCard mt-2 text-[0.93rem] tracking-wide`}>
                          <span className="uppercase">{item.position}</span> · {item.company}
                        </h4>
                        <BsArrowUpRight className="mt-2 ml-1 innerDiv" />
                      </a>
                      
                      <p className={`${inter.className} text-sm mt-2 text-slate-400 pb-1`}>{item.description}</p>
                      <div className="py-1 flex flex-wrap">
                        {item.skills.map((skills, index) => (
                          <div key={index} className={`${inter.className} text-xs text-[#fff] px-3 py-1 rounded-full bg-[#58514d] min-w-fit mr-1 mb-1`}>
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
                  // <div className="pb-6">
                  <div
                    className={`projectContainer md:mb-3 md:pt-3 md:pb-2 md:pl-6 md:pr-5 md:rounded-lg mb-6 md:hover:shadow-2xl md:hover:bg-slate-800/50 ${
                      hoveredProjectIndex !== null && hoveredProjectIndex !== index
                        ? "opacity-50"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() => setHoveredProjectIndex(null)}
                    key={index}
                  >
                    <div className="mt-2">
                      { item.link != null ? (
                        <a href={item.link} target="_blank" className="outerDiv w-fit flex text-slate-200 hover:text-[#a8dadc]">
                          <h4 className={`${interMedium.className} text-[0.93rem] tracking-wide uppercase`}>
                            {item.title}
                          </h4>
                          <BsArrowUpRight className="ml-1 innerDiv" />
                        </a>
                      ) : (
                        <div className="outerDiv w-fit flex text-slate-200 ">
                          <h4 className={`${interMedium.className} text-[0.93rem] tracking-wide uppercase`}>
                            {item.title}
                          </h4>
                        </div>
                      )}
                      <p className={`${inter.className} text-sm mt-2 text-slate-400 pb-1`}>{item.description}</p>
                      <div className="py-1 flex flex-wrap">
                        {item.stack.map((item, index) => (
                          <div key={index} className={`${inter.className} text-xs text-[#fff] px-3 py-1 rounded-full bg-[#58514d] min-w-fit mr-1 mb-1`}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            
            {/* Certification form */}
            <div className="pb-4" id="cert">
              <div className="p-2 mb-8 sticky top-0 w-full backdrop-blur">
                <h3 className={`${interBold.className} text-sm uppercase tracking-widest text-slate-200`}>
                  Certifications
                </h3>
              </div>
              <div className="px-2">
                {certification.map((item, index) => (
                  <div
                    className={`projectContainer items-start flex flex-col md:mb-3 md:pt-3 md:pb-2 md:pl-6 md:pr-5 md:rounded-lg mb-6 md:hover:shadow-2xl md:hover:bg-slate-800/50 ${
                      hoveredProjectIndex !== null && hoveredProjectIndex !== index
                        ? "opacity-50"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() => setHoveredProjectIndex(null)}
                    key={index}
                  >
                    <div className="mt-2 flex flex-row-col">
                      <div className="outerDiv w-fit flex flex-col text-slate-200 self-start">
                        <a href={item.link} target="_blank" className="outerDiv w-fit flex text-slate-200 hover:text-[#a8dadc]">
                          <h4 className={`${interMedium.className} text-[0.93rem] tracking-wide uppercase`}>
                            {item.title}
                          </h4>
                          <BsArrowUpRight className="ml-1 innerDiv" />
                        </a>
                        <h6 className={`${interMedium.className} text-sm mt-2 tracking-wide`}>
                          {item.org}
                        </h6>
                        <p className={`${inter.className} text-sm mt-2 text-slate-400 pb-1`}>
                          {"Issued "}
                          {item.issued}
                          {"· Expires "}
                          {item.expires}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Footer */}
            <div className="">
              <div>
                <p className={`${inter.className} text-sm mt-12 text-slate-400 pb-1`}>I&apos;m interested in developing myself further, free to
                  <a href="mailto:sm8hasan@uwaterloo.ca" target="_blank" className={`${interMedium.className} text-slate-200 hover:text-[#a8dadc]`}> contact me </a>
                  if you want to work on a project together!</p>
              </div>
            </div>
            
          </section>
        </div>
      </main>
    );
  }
