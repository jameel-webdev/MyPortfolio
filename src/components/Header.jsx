const Header = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-4 text-2xl font-semibold p-5 md:p-4 flex-nowrap hide-scrollbar sm:justify-start lg:justify-center">
      <a
        href="#"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        About
      </a>
      <a
        href="#skills"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Projects
      </a>
      <a
        href="#projects"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Credentials
      </a>
      <a
        href="#contact"
        className="hover:text-custom-red transition-colors duration-300 px-2"
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
