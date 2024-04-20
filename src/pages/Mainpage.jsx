import About from "../components/About";
import Contact from "../components/Contact";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
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
        <Projects />
        <Credentials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
