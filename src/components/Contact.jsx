import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact">
      <h3 className="text-2xl font-bold text-custom-red">
        Get in touch with me anytime
      </h3>
      <div className="hidden text-5xl md:block">&#8592;</div>
      <div className="my-4 md:hidden block">
        {renderLink("https://github.com/jameel-webdev", <FaGithub />, "Github")}
        {renderLink(
          "https://linkedin.com/in/jameel-webdev",
          <FaLinkedin />,
          "LinkedIn"
        )}
        {renderLink(
          "mailto:jameel.webdev@gmail.com",
          <BiLogoGmail />,
          "Send Email"
        )}
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        I&apos;m an Indian Full Stack Web Developer working on technologies like
        React JS, Typescript, Next JS, Node JS, Express JS, etc.
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        Outside of work, I enjoy staying active by playing badminton and table
        tennis, and I unwind by catching up on the latest series.
      </div>
      <div className="text-justify md:text-base font-semibold py-2 my-2 text-zinc-600">
        I strive for a balance between professional achievements and personal
        development.
      </div>
      <div className="text-balance font-semibold py-2 my-2">
        <div className="flex flex-row text-custom-red gap-4 underline">
          <div className="flex items-center flex-wrap">
            dev
            <IoIosLink />
          </div>
          <div className="flex items-center">
            polywork
            <IoIosLink />
          </div>
          <div className="flex items-center">
            npmprofile
            <IoIosLink />
          </div>
        </div>
      </div>
    </div>
  );
};

function renderLink(href, icon, label) {
  return (
    <a
      href={href}
      className="mr-5 p-4 border-2 border-custom-red rounded-lg inline-block text-3xl bg-custom-testing/40 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
export default Contact;
