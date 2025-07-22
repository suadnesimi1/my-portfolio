import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaReact,FaPhp, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaGitAlt,
  FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaPhone,
  FaUserGraduate, FaUniversity, FaGraduationCap,FaJsSquare,FaEye,FaApple, FaAndroid,FaCode ,FaPlug 
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiSpring, SiJavascript, SiPhp, SiPostman, SiJira,SiExpo, SiSqlite,SiPython,SiTailwindcss
} from "react-icons/si";
import profileImg from './profile.png';
import inntempoLogo from './inntempo-logo.png';
import technoperiaLogo from './technoperia-logo.png';
import hotelKeyLogo from './hotelkey-logo.png';
import swissshoreLogo from './swissshore-logo.png';
import ecologLogo from './ecolog.png';
import { MdEmail } from "react-icons/md";
import { PDFDownloadLink } from '@react-pdf/renderer';
import PortfolioPDF from './PortfolioPDF';



const iconColors = [
  "hover:text-[#007396]", // Java
  "hover:text-[#8892BE]", // PHP
  "hover:text-[#3572A5]", // Python
  "hover:text-[#F7DF1E]", // JavaScript
  "hover:text-[#61DBFB]", // React
  "hover:text-[#E44D26]", // HTML5
  "hover:text-[#264DE4]", // CSS3
  "hover:text-[#6DB33F]", // Spring
  "hover:text-[#00758F]", // MySQL
  "hover:text-[#47A248]", // MongoDB
  "hover:text-[#2496ED]", // Docker
  "hover:text-[#FF9900]", // AWS
  "hover:text-[#F1502F]", // Git
  "hover:text-[#0052CC]", // Jira
  "hover:text-[#FF6C37]"  // Postman
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

const projects = [
  {
    title: "Timekeeper – Smart Labour Rostering & Attendance System",
    description:
      "Timekeeper is a cutting-edge, cloud-based platform developed in collaboration with Swire Hotels to replace outdated manual processes with real-time, secure, and intelligent staff management tools. Purpose-built for the hospitality industry, it streamlines labour rostering and time attendance by eliminating spreadsheets and offering dynamic shift planning, automated attendance tracking (via RFID, fingerprint, or PIN), and powerful reporting features. Timekeeper continues to evolve into a comprehensive staff management solution focused on efficiency, control, and scalability.",
    techIcons: [FaPhp, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, SiMysql],
    github: "https://timekeeper-cloud.com/"
  },
  {
    title: "Timekeeper – Mobile App",
    description:
      "Timekeeper Mobile is the companion app to the cloud-based Timekeeper platform, designed for both iOS and Android. Built with the same principles of real-time accuracy and operational efficiency, the mobile app empowers hospitality teams to manage attendance, shifts, and rosters on the go. Whether clocking in via RFID, fingerprint, or PIN, staff can access their schedules anytime, while managers stay informed through live data and built-in notifications. The app eliminates manual tracking and ensures seamless synchronization with the web platform, delivering a fully mobile, cross-platform solution for modern workforce management.",
   techIcons: [FaReact, SiExpo, FaApple, FaAndroid, SiMysql, SiSqlite],
    github: "https://timekeeper-cloud.com/mobileApp.html"
  },
    {
    title: "Hospitality Consulting & Venture Capital",
    description:
      "This project features custom-built software applications and intelligent algorithms designed to support every phase of operations—including planning, development, project management, supply chain coordination, pre-opening strategies, finance, I.T., marketing, sales, human resources, training, sustainability, and asset management—ensuring seamless integration and data-driven decision-making across all departments.",
   techIcons: [FaCode,FaJava,FaJsSquare,FaHtml5, FaCss3Alt, SiMysql],
    github: "http://inntempo.com/inntempo-hospitality-consulting-venture-capital/"
  },
  {
    title: "ClearSky - Weather Forecasting App",
    description:
      "ClearSky is a lightweight and responsive weather forecasting web application designed to provide users with real-time weather updates for any location worldwide. Developed using pure JavaScript, HTML, and CSS, the app fetches live data from a weather API and displays key information such as temperature, humidity, wind speed, and weather conditions through a clean and intuitive interface. With a focus on performance and usability, ClearSky delivers accurate forecasts with a sleek, modern design—making it both functional and visually appealing across devices.",
   techIcons: [FaJsSquare,FaHtml5, FaCss3Alt,FaPlug],
    github: "https://github.com/suadnesimi1/wether-app"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and professional experience. Built with React and styled using Tailwind CSS for a modern, responsive design. The site includes animated components with Framer Motion, dark mode support, and interactive sections such as About, Projects, Experience, Education, and Contact. It is fully mobile-optimized and deployed on GitHub Pages, serving as a central hub for employers and collaborators to learn more about my work.",
    techIcons: [FaReact, SiTailwindcss],
    github: "https://suadnesimi1.github.io/my-portfolio/"
  }
];


  const toolIcons = [
    FaJava, SiPhp,SiPython, SiJavascript, FaReact, FaHtml5, FaCss3Alt,SiSpring,
    SiMysql, SiMongodb, FaDocker, FaAws, FaGitAlt, SiJira, SiPostman,SiTailwindcss 
  ];

  return (
      <div className={darkMode ? "dark bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}>
    <div className="min-h-screen px-4 sm:px-6 py-6 sm:py-10 max-w-6xl mx-auto font-sans smooth-scroll">

      {/* Theme Toggle - Pinned to Top Right */}
      <div className="flex justify-end mb-6 sm:mb-10">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={toggleTheme}
            checked={!darkMode}
            readOnly
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
        {/* Left column (image, name, about, contact) */}
       <div className="space-y-10">
      {/* Profile Image */}
      <div className="flex justify-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={profileImg}
          alt=""
          className="rounded-full w-36 h-36 object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>

      {/* Name */}
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-center mx-auto text-4xl font-extrabold bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#22C55E] bg-clip-text text-transparent drop-shadow-lg hover:drop-shadow-[0_8px_24px_rgba(6,182,212,0.6)] transition duration-300 cursor-pointer"
      >
        Suad Nesimi
      </motion.h1>

      {/* About Me */}
      <motion.section
        className={`w-full sm:max-w-xs mx-auto rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] cursor-pointer ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500"
            : "bg-white border-gray-300 hover:border-blue-500"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg hover:drop-shadow-[0_6px_16px_rgba(56,189,248,0.4)] transition">
          About Me
        </h2>
        <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          I am a passionate Software Engineer with hands-on experience working on various projects using a wide range of technologies and tools. Problem-solving, clean code, and scalable architecture are core to my approach. Whether building backend systems, crafting user-friendly interfaces, or deploying cloud-based solutions, I bring dedication, adaptability, and a constant drive to learn and deliver high-quality results.
        </p>
      </motion.section>

      {/* Education */}
      <motion.section
        className={`w-full sm:max-w-xs mx-auto rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] cursor-pointer ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500"
            : "bg-white border-gray-300 hover:border-blue-500"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg">
          Education
        </h2>
        <div className={`text-sm leading-relaxed space-y-4 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
          <div className="flex items-start space-x-3">
            <FaGraduationCap className="text-lg text-blue-400 mt-1" />
            <div>
              <strong>Ph.D. in Computer Engineering</strong><br />
              <strong>International Balkan University</strong>, 2024–Present
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaUniversity className="text-lg text-cyan-400 mt-1" />
            <div>
              <strong>M.Sc. in Computer Engineering</strong><br />
              <strong>International Balkan University</strong>, 2022–2023
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaUserGraduate className="text-lg text-teal-400 mt-1" />
            <div>
              <strong>B.Sc. in Computer Engineering</strong><br />
              <strong>Istanbul Commerce University</strong>, 2016–2020
            </div>
          </div>
        </div>
      </motion.section>

      {/* Languages */}
      <motion.section
        className={`w-full sm:max-w-xs mx-auto rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] cursor-pointer ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500"
            : "bg-white border-gray-300 hover:border-blue-500"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg">
          Languages
        </h2>
        <ul className={`text-sm leading-relaxed space-y-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          <li><strong>Albanian</strong> <span className="text-xs font-normal">– Native</span></li>
          <li><strong>English</strong> <span className="text-xs font-normal">– Professional Proficiency</span></li>
          <li><strong>Turkish</strong> <span className="text-xs font-normal">– Professional Proficiency</span></li>
          <li><strong>Macedonian</strong> <span className="text-xs font-normal">– Elementary Proficiency</span></li>
        </ul>
      </motion.section>

      {/* Contact Me */}
      <motion.section
        className={`w-full sm:max-w-xs mx-auto rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] cursor-pointer ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500"
            : "bg-white border-gray-300 hover:border-blue-500"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg">
          Contact Me
        </h2>
        <form className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <MdEmail className="text-xl" />
            <a href="mailto:suadnesimi12@gmail.com" className="hover:underline">suadnesimi12@gmail.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone /> <span>+389 75 312 230</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-xl hover:text-[#333]" />
            <a href="https://github.com/suadnesimi1" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook className="text-xl hover:text-[#1877F2]" />
            <a href="https://facebook.com/suad.nesimi.94" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaInstagram className="text-xl hover:text-[#E1306C]" />
            <a href="https://instagram.com/nesimisuad" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
            <div className="flex items-center space-x-2">
             <FaLinkedin className="text-xl hover:text-[#0077B5]" />
             <a href="https://linkedin.com/in/suad-nesimi" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </div>
         </form>
        </motion.section>
     </div>

          {/* Right Column */}
          <div className="md:col-span-3 space-y-20">
            {/* Theme Toggle */}
          
            
          {/* Experience */}
          <section className="relative mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
              Experience
            </h2>

            <div className="mb-10 h-2 w-full rounded-xl shadow-lg bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-700 dark:to-slate-500"></div>

            <div className="space-y-10 text-sm">

              {/* Job 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-600 "
              >
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-slate-800"></div>
               <motion.div
                className={`rounded-xl shadow-md transition-all duration-300 p-5 ${
                  darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >

                  <h3 className={`font-bold text-lg flex items-center gap-2 flex-wrap ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Software Engineer – 
                    <a href="https://inntempo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-blue-400">
                      Inntempo Limited Solutions
                      <img src={inntempoLogo} alt="Inntempo Logo" className="w-5 h-5 object-contain" />
                    </a>
                  </h3>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>November 2022 – Present</p>
                  <p className={`text-justify leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Leading the development of full-stack web and mobile applications tailored for client needs across industries. Responsibilities include architecting scalable systems using Java, PHP, React, and MySQL, building APIs, managing deployments, and collaborating with cross-functional teams to deliver polished digital products.
                  </p>
                </motion.div>
              </motion.div>

              {/* Job 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-600"
              >
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-slate-800"></div>
             <motion.div
                className={`rounded-xl shadow-md transition-all duration-300 p-5 ${
                  darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >

                  <h3 className={`font-bold text-lg flex items-center gap-2 flex-wrap ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Back End Developer – 
                    <a href="https://technoperia.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-blue-400">
                      Technoperia
                      <img src={technoperiaLogo} alt="Technoperia Logo" className="w-5 h-5 object-contain" />
                    </a>
                  </h3>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>May 2022 – October 2022</p>
                  <p className={`text-justify leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Maintained and enhanced an internal web application for Whirlpool, one of the world’s largest white goods technology companies. Worked on full-stack development and infrastructure using Java, Spring Boot, JavaScript, Python, MySQL, MongoDB, Docker, GitLab, AWS, Google Cloud, and Postman.
                  </p>
                </motion.div>
              </motion.div>

              {/* Job 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-600"
              >
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-slate-800"></div>
              <motion.div
                  className={`rounded-xl shadow-md transition-all duration-300 p-5 ${
                    darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
              >

                  <h3 className={`font-bold text-lg flex items-center gap-2 flex-wrap ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Back End Developer – 
                    <a href="https://swissshore.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-blue-400">
                      SwissShore
                      <img src={swissshoreLogo} alt="SwissShore Logo" className="w-5 h-5 object-contain" />
                    </a>
                  </h3>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>May 2021 – April 2022</p>
                  <p className={`text-justify leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Worked with ABBYY Development Services, a leading technology platform focused on intelligent automation and digital transformation. Contributed to enterprise solutions using Java, Spring Boot, MySQL, and Docker, while leveraging Microsoft Azure. Collaborated within Agile teams and used tools like Postman for API testing and integration.
                  </p>
                </motion.div>
              </motion.div>

              {/* Job 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-600"
              >
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-slate-800"></div>
              <motion.div
                className={`rounded-xl shadow-md transition-all duration-300 p-5 ${
                  darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >

                  <h3 className={`font-bold text-lg flex items-center gap-2 flex-wrap ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Junior Back End Developer – 
                    <a href="https://www.hotelkeyapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-blue-400">
                      HotelKey
                      <img src={hotelKeyLogo} alt="HotelKey Logo" className="w-5 h-5 object-contain" />
                    </a>
                  </h3>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>March 2021 – April 2021</p>
                  <p className={`text-justify leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Worked as a Junior Web Developer (Intern), gaining hands-on experience with web technologies and development tools. Participated in building and testing web applications using Java and MySQL, while working with Docker, Postman, and Git for deployment and version control.
                  </p>
                </motion.div>
              </motion.div>

              {/* Job 5 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-600"
              >
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-slate-800"></div>
                <motion.div
                  className={`rounded-xl shadow-md transition-all duration-300 p-5 ${
                    darkMode ? "bg-slate-800 text-gray-300" : "bg-white text-gray-900"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >

                  <h3 className={`font-bold text-lg flex items-center gap-2 flex-wrap ${darkMode ? "text-white" : "text-gray-900"}`}>
                    Software Development Intern – 
                    <a href="https://ecolog-international.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-blue-400">
                      Ecolog International
                      <img src={ecologLogo} alt="Ecolog Logo" className="w-5 h-5 object-contain" />
                    </a>
                  </h3>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>July 2019 – August 2019</p>
                  <p className={`italic text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>University Internship</p>
                  <p className={`text-justify leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Completed a university internship at Ecolog International, one of the leading global service providers. Gained valuable technical experience, collaborated with industry professionals, and contributed to a fast-paced international working environment.
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </section>
          
            {/* Skills */}
            <section className="relative">
              <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">Programming Languages & Dev Tools</h2>
              <div className="mb-10 h-2 w-full rounded-xl shadow-lg bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-700 dark:to-slate-500"></div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 text-3xl justify-items-center">
                {toolIcons.map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.15 }}
                    className={`transition transform hover:drop-shadow-[0_6px_20px_rgba(56,189,248,0.4)] ${iconColors[index]}`}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects */}
          <section className={`transition duration-300 ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-lg`}>
            <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">
              Projects
            </h2>

            <div className="mb-10 h-2 rounded-full shadow-md bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-700 dark:to-gray-500"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className={`group relative p-6 rounded-xl border transition duration-300 shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col justify-between ${
                    darkMode ? "bg-gray-800 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500"
                  }`}
                  style={{ minHeight: "460px" }} // or adjust to your desired fixed height
                >
                  {/* Project Title */}
                  <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed text-justify mb-6 flex-grow ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex flex-wrap gap-3 text-2xl text-gray-400 mb-3">
                    {project.techIcons.map((Icon, i) => (
                      <Icon key={i} className="hover:text-blue-400 transition duration-200" />
                    ))}
                  </div>

                  {/* View Project Button (always at bottom, appears on hover) */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                    >
                      <FaEye className="text-base" />
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className={`mt-20 py-6 border-t text-center text-sm ${darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"}`}>
        <p>© {new Date().getFullYear()} Suad Nesimi. All rights reserved.</p>
        
        <PDFDownloadLink
  document={<PortfolioPDF projects={projects} />}
  fileName="Suad-Nesimi-Portfolio.pdf"
  className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
>
  {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF Version')}
</PDFDownloadLink>

      </footer>

    </div>
    
  );
}
