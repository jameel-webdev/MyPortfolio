import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import pfp from "../assets/profile-pic.png";

const Sidebar = () => {
  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 4 && hour < 12) return "Good Morning";
    else if (hour >= 12 && hour < 17) return "Good Afternoon";
    else if (hour >= 17 && hour < 22) return "Good Evening";
    else return "Good Night";
  };

  return (
    <div className="bg-custom-red h-full md:h-[calc(100vh+7.2%)] md:sticky md:top-0 md:left-0">
      <div className="p-6">
        <div className="text-right">
          <span className="p-3 rounded-lg font-bold bg-white/25">
            Hello, <span className="text-custom-sand">{getGreeting()}</span>
          </span>
        </div>
      </div>
      <div className="pl-6 pr-1 py-1">
        <img
          src={pfp}
          alt="Profile picture of Jameel Ahmed"
          className="w-[72%] h-[72%] md:w-[80%] md:h-[80%] lg:w-[60%] lg:h-[60%] border-4 border-black rounded-full"
        />
        <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold pt-3">
          Jameel Ahmed
        </h3>
        <div className="text-lg lg:text-xl font-semibold pt-3 text-custom-bg">
          Full Stack Developer
        </div>
        <p className="pt-3 md:text-sm lg:text-base font-black text-justify pr-6 md:pr-8">
          Who loves to tinker with new technologies and build cool webapps from
          crafting seamless user experiences to architecting robust back-end
          solutions.
        </p>
        <div className="pt-4 flex gap-4 pb-20 md:pb-24 flex-wrap">
          {renderLink(
            "https://drive.google.com/file/d/1Tb2T3u_-iiNxCIiVwQXPaB1VqkBB2Olx/view?usp=sharing",
            <MdDescription />,
            "Resume"
          )}
          {renderLink(
            "https://github.com/jameel-webdev",
            <FaGithub />,
            "Github"
          )}
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
      </div>
    </div>
  );

  function renderLink(href, icon, label) {
    return (
      <a
        href={href}
        className="p-4 border-2 border-custom-sand rounded-lg inline-block text-3xl bg-white/20 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  }
};

export default Sidebar;
