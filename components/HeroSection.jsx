"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between pt-28 md:pt-40">
      {/* Left text section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
          Hi, I’m <span className="text-blue-400">Suhani</span>
        </h1>

        <h2 className="text-2xl text-gray-300">
          I’m a{" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Full Stack Developer", "UI/UX Enthusiast", "Open Source Contributor"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-gray-400 max-w-lg">
          I specialize in building fast, responsive, and visually stunning web applications
          using <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Next.js</span>, and{" "}
          <span className="text-blue-400">Tailwind CSS</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 pt-6 text-2xl">
          <a href="https://github.com/suhani5267" target="_blank" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/suhani-kaushik-1057a6293/" target="_blank" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/su.hani5267/" target="_blank" className="hover:text-blue-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right image section */}
      <div className="flex-1 mb-10 md:mb-0 flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
          <Image
            src="/profile.jpeg" // 👉 Place your image in public/profile.jpg
            alt="Suhani Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
