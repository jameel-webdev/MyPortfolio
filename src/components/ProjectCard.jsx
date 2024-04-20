import { FaGithub } from "react-icons/fa";
import projectIMg from "../assets/Screenshot 2024-04-16 124321.png";
const ProjectCard = () => {
  return (
    <div className="border-2 border-custom-sand bg-white rounded-[30px] px-5 py-3 my-3 inline-block w-full md:w-[49%]">
      <span className="font-bold text-base py-1 px-4 rounded-full bg-custom-purple inline-block mt-2 mb-3">
        Full Stack
      </span>
      <img
        src={projectIMg}
        alt="Project1"
        className="rounded-2xl h-56 w-full"
      />
      <h4 className="text-xl font-bold my-2">Content Genie hub</h4>
      <div className="text-sm text-zinc-500 py-1">
        Successfully passed a HackerRank role certification exam that covers key
        frontend development technologies including React, CSS, and JavaScript.
      </div>
      <div className="text-sm text-zinc-500 py-1">
        Successfully passed a HackerRank role certification exam that covers key
        frontend development technologies including React, CSS, and JavaScript.
      </div>
      <div className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3">
        <FaGithub /> Frontend
      </div>
      <div className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3">
        <FaGithub />
        Backend
      </div>
    </div>
  );
};

export default ProjectCard;
