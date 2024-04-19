import About from "../components/About";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Header from "../components/Header";
import Skills from "../components/Skills";

const Mainpage = () => {
  return (
    <div className="flex flex-col">
      <div className="md:bg-white/30 backdrop-blur-md sticky top-0 z-10">
        <Header />
      </div>

      <div className="px-6 py-6 md:px-10 mx-auto">
        <About />
        <Skills />
        <Credentials />
        <Contact />
      </div>
    </div>
  );
};

export default Mainpage;
