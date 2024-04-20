import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const getLinkClass = (section) =>
    `hover:text-custom-red transition-colors duration-300 px-2 ${
      activeSection === section ? "text-custom-red" : ""
    }`;

  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-4 text-2xl font-semibold p-5 md:p-4 flex-nowrap hide-scrollbar sm:justify-start lg:justify-center">
      <a
        onClick={() => scrollTo("#about")}
        href="#about"
        className={getLinkClass("#about")}
      >
        About
      </a>
      <a
        onClick={() => scrollTo("#skills")}
        href="#skills"
        className={getLinkClass("#skills")}
      >
        Skills
      </a>
      <a
        onClick={() => scrollTo("#projects")}
        href="#projects"
        className={getLinkClass("#projects")}
      >
        Projects
      </a>
      <a
        onClick={() => scrollTo("#credentials")}
        href="#credentials"
        className={getLinkClass("#credentials")}
      >
        Credentials
      </a>
      <a
        onClick={() => scrollTo("#contact")}
        href="#contact"
        className={getLinkClass("#contact")}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
