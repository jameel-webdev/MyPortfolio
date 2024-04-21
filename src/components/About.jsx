import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const About = () => {
  return (
    <div
      className="border-2 border-custom-sand bg-white rounded-[30px]"
      id="about"
    >
      <div className="px-5 py-3">
        <h3 className="text-2xl font-bold text-custom-red">About Me</h3>
        <div className="font-semibold text-zinc-500 text-base leading-relaxed text-justify indent-paragraph pt-1">
          <p>
            Hello, I&apos;m Jameel Ahmed. With a keen interest in technology,
            I&apos;ve recently transitioned into web development, where I&apos;m
            honing my skills in both front-end and back-end development.
            I&apos;ve worked on various projects, from basic websites to more
            complex web applications, always prioritizing clean code and
            user-friendly design.
          </p>
          <p>
            Now, I&apos;m eager to bring my enthusiasm for development and my
            proficiency in technologies like React, MongoDB, Express.js, and
            Node.js to a dynamic team. I am actively seeking opportunities to
            contribute to innovative projects and collaborate with like-minded
            professionals who value quality and performance. Joining a team that
            supports continuous learning and growth will not only help me
            achieve my professional goals but also add value through my
            dedication and fresh perspectives.
          </p>
        </div>
        <div className="my-2 flex flex-wrap gap-4">
          {renderLink(
            "mailto:jameel.webdev@gmail.com",
            <BiLogoGmail />,
            "Send Email",
            "Gmail",
            "testing"
          )}
          {renderLink(
            "https://github.com/jameel-webdev",
            <FaGithub />,
            "Github",
            "Github",
            "bg"
          )}
          {renderLink(
            "https://linkedin.com/in/jameel-webdev",
            <FaLinkedin />,
            "LinkedIn",
            "LinkedIn",
            "cloud"
          )}
          {renderLink(
            "https://drive.google.com/file/d/1Tb2T3u_-iiNxCIiVwQXPaB1VqkBB2Olx/view?usp=sharing",
            <MdDescription />,
            "Resume",
            "Resume",
            "teal"
          )}
        </div>
      </div>
    </div>
  );
};

function renderLink(href, icon, label, name, color) {
  return (
    <a
      href={href}
      className={`px-4 py-2 flex justify-center items-center gap-2 bg-custom-${color} rounded-full text-base font-semibold hover:text-custom-red hover:bg-custom-bg`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {name}
    </a>
  );
}

export default About;
