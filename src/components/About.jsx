import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const About = () => {
  return (
    <div className="border-2 border-custom-sand bg-white rounded-[30px]">
      <div className="px-5 pt-4">
        <h3 className="text-2xl font-bold text-custom-red">About Me</h3>
        <div className="font-semibold text-zinc-500 text-base leading-relaxed text-justify indent-paragraph">
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
        <div className="mt-2 mb-4 flex flex-wrap gap-4" id="skills">
          {renderLink(
            "mailto:jameel.webdev@gmail.com",
            <BiLogoGmail />,
            "Send Email",
            "Gmail"
          )}
          {renderLink(
            "https://github.com/jameel-webdev",
            <FaGithub />,
            "Github",
            "Github"
          )}
          {renderLink(
            "https://linkedin.com/in/jameel-webdev",
            <FaLinkedin />,
            "LinkedIn",
            "LinkedIn"
          )}
          {renderLink(
            "https://drive.google.com/file/d/1sSkjw_tNft8_fGyvcORaMjlInl79yzsV/view?usp=sharing",
            <MdDescription />,
            "Resume",
            "Resume"
          )}
        </div>
      </div>
    </div>
  );
};

function renderLink(href, icon, label, name) {
  return (
    <a
      href={href}
      className="px-3 py-1 flex justify-center items-center gap-2 rounded-full bg-custom-bg text-base"
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
