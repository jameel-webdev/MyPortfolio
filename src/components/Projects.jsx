import projects from "../assets/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="my-7" id="projects">
      <h3 className="text-2xl font-bold text-custom-red">Projects</h3>
      {projects.map((e) => (
        <ProjectCard key={e.id} project={e} />
      ))}
    </div>
  );
};

export default Projects;
{
  /* <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex justify-center text-xl font-semibold my-3 gap-4 flex-wrap">
          <button
            onClick={() => setFilter("All")}
            className="px-4 py-2 md:border-2 border-custom-testing hover:border-custom-red rounded-lg bg-custom-testing hover:bg-custom-testing/40"
          >
            All
          </button>
          <button
            onClick={() => setFilter("Fullstack")}
            className="px-4 py-2 md:border-2 border-custom-testing hover:border-custom-red rounded-lg bg-custom-testing hover:bg-custom-testing/40"
          >
            Fullstack
          </button>
          <button
            onClick={() => setFilter("Frontend")}
            className="px-4 py-2 md:border-2 border-custom-testing hover:border-custom-red rounded-lg bg-custom-testing hover:bg-custom-testing/40"
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("Backend")}
            className="px-4 py-2 md:border-2 border-custom-testing hover:border-custom-red rounded-lg bg-custom-testing hover:bg-custom-testing/40"
          >
            Backend
          </button>
        </div>
      </div> */
}
