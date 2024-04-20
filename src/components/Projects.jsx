import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="my-7" id="projects">
        <h3 className="text-2xl font-bold text-custom-red mb-5">Projects</h3>
        <div className="flex justify-between flex-wrap">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
