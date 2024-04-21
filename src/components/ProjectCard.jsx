import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    type,
    techstack,
    img,
    websiteUrl,
    frontendUrl,
    backendUrl,
  } = project;

  const getColor = (type) => {
    switch (type) {
      case "Full Stack":
        return "purple";
      case "Frontend":
        return "teal";
      case "Backend":
        return "testing";
      default:
        return "bg";
    }
  };

  return (
    <div className="border-2 border-custom-sand bg-white rounded-[30px] px-5 py-3 my-3 inline-block w-full lg:w-[49%]">
      <div className="flex items-center gap-2">
        <span
          className={`font-bold text-base py-1 px-4 rounded-full bg-custom-${getColor(
            type
          )} inline-block mt-2 mb-3`}
        >
          {type}
        </span>
        <a
          href={websiteUrl}
          aria-label={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base py-1 px-4 rounded-full bg-custom-cloud inline-flex items-center gap-1 mt-2 mb-3"
        >
          <FaGlobe /> Visit Site
        </a>
      </div>
      <img src={img} alt="Project1" className="rounded-2xl w-full h-[250px]" />
      <h4 className="text-xl font-bold my-2">{title}</h4>
      <div className="text-sm text-zinc-500 py-1 text-justify">
        <span className="font-bold">Description: </span> {description}
      </div>
      <div className="text-sm text-zinc-500 py-1">
        <span className="font-bold">Tech Used: </span>
        {techstack}
      </div>
      <div className="flex justify-between">
        <a
          href={frontendUrl}
          aria-label={frontendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3"
        >
          <FaGithub /> Frontend
        </a>
        <a
          href={backendUrl}
          aria-label={backendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3"
        >
          <FaGithub />
          Backend
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
