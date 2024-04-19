const Header = () => {
  const scrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-4 text-2xl font-semibold p-5 md:p-4 flex-nowrap hide-scrollbar sm:justify-start lg:justify-center">
      <a
        onClick={() => scrollTo("#about")}
        href="#about"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        About
      </a>
      <a
        onClick={() => scrollTo("#skills")}
        href="#skills"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Skills
      </a>
      <a
        onClick={() => scrollTo("#projects")}
        href="#projects"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Projects
      </a>
      <a
        onClick={() => scrollTo("#credentials")}
        href="#credentials"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Credentials
      </a>
      <a
        onClick={() => scrollTo("#contact")}
        href="#contact"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
