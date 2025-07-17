import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaGitAlt,
  FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaPhone
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiSpring, SiJavascript, SiPhp, SiPostman, SiJira
} from "react-icons/si";
import { FaUserGraduate, FaUniversity, FaGraduationCap } from "react-icons/fa";
const iconColors = [
  "hover:text-[#007396]", // Java
  "hover:text-[#6DB33F]", // Spring
  "hover:text-[#8892BE]", // PHP
  "hover:text-[#F7DF1E]", // JavaScript
  "hover:text-[#61DBFB]", // React
  "hover:text-[#E44D26]", // HTML5
  "hover:text-[#264DE4]", // CSS3
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
      title: "Timekeeper Web Platform",
      description: "Spring Boot + MySQL app for attendance tracking with admin filtering and reporting.",
      tech: "Java, Spring Boot, MySQL",
      github: "https://github.com/suadnesimi1/timekeeper"
    }
  ];
  const toolIcons = [
    FaJava, SiSpring, SiPhp, SiJavascript, FaReact, FaHtml5, FaCss3Alt,
    SiMysql, SiMongodb, FaDocker, FaAws, FaGitAlt, SiJira, SiPostman
  ];
  return (
    <div className={darkMode ? "dark bg-gray-950 text-white" : "bg-gray-100 text-gray-900"}>
      <div className="min-h-screen px-6 py-10 max-w-6xl mx-auto font-sans smooth-scroll">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left column (name, about, contact) */}
          <div className="space-y-10">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-5xl font-extrabold bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#22C55E] bg-clip-text text-transparent drop-shadow-lg hover:drop-shadow-[0_8px_24px_rgba(6,182,212,0.6)] transition duration-300 cursor-pointer"
            >
              Mr. Suad Nesimi
            </motion.h1>
            {/* About Me */}
            <motion.section
              className={`rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] max-w-xs cursor-pointer ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500"}`}
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
              className={`rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] max-w-xs cursor-pointer ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500"}`}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg">
                Education
              </h2>
              <div className="text-sm leading-relaxed space-y-4 text-gray-300 dark:text-gray-300">
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
            {/* Contact Me */}
            <motion.section
              className={`rounded-2xl p-6 border transition duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] max-w-xs cursor-pointer ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500"}`}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300 drop-shadow-lg">
                Contact Me
              </h2>
              <form className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-300">
                  <span>:e-mail:</span> <a href="mailto:suadnesimi12@gmail.com" className="hover:underline">suadnesimi12@gmail.com</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-300">
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
          <div className="md:col-span-3 space-y-20">
            {/* Theme Toggle */}
            <div className="flex justify-end mb-6">
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" onChange={toggleTheme} checked={!darkMode} readOnly />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            {/* Skills */}
            <section className="relative">
              <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">Languages & Tools</h2>
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
              <h2 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">Projects</h2>
              <div className="mb-10 h-2 rounded-full shadow-md bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-700 dark:to-gray-500"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl border transition duration-300 shadow-md hover:shadow-xl cursor-pointer ${darkMode ? "bg-gray-800 border-gray-700 hover:border-blue-500" : "bg-white border-gray-300 hover:border-blue-500"}`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-300">
                      {project.title}
                    </h3>
                    <p className={`mb-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
                    <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm">GitHub</a>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}