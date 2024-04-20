import { FaGithub } from "react-icons/fa";
import projectIMg from "../assets/Screenshot 2024-04-16 124321.png";
import pg from "../assets/cghhomepage.png";
const ProjectCard = ({ project }) => {
  const { title, description, type, techstack } = project;

  const getColor = (type) => {
    switch (type) {
      case "Full Stack":
        return "purple";
      case "Frontend":
        return "teal";
      case "Backend":
        return "testing";
      default:
        return "gray";
    }
  };
  return (
    <div className="border-2 border-custom-sand bg-white rounded-[30px] px-5 py-3 my-3 inline-block w-full lg:w-[49%]">
      <span
        className={`font-bold text-base py-1 px-4 rounded-full bg-custom-${getColor(
          type
        )} inline-block mt-2 mb-3`}
      >
        {type}
      </span>
      <img src={pg} alt="Project1" className="rounded-2xl w-full h-[250px]" />
      <h4 className="text-xl font-bold my-2">{title}</h4>
      <div className="text-sm text-zinc-500 py-1">
        <span className="font-bold">Description:</span> {description}
      </div>
      <div className="text-sm text-zinc-500 py-1">
        <span className="font-bold">Tech Used:</span>
        {techstack}
      </div>
      <div className="flex justify-between">
        <a className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3">
          <FaGithub /> Frontend
        </a>
        <a className="font-bold text-base py-1 px-4 rounded-full bg-custom-bg inline-flex gap-2 items-center mt-2 mb-3">
          <FaGithub />
          Backend
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
// import React from 'react';

// function ProjectCard({ project }) {
//   const { title, description, type } = project;

//   const getColor = (type) => {
//     switch(type) {
//       case 'Fullstack':
//         return 'blue';
//       case 'Frontend':
//         return 'green';
//       case 'Backend':
//         return 'red';
//       default:
//         return 'gray';
//     }
//   };

//   return (
//     <div style={{ border: `3px solid ${getColor(type)}`, margin: '10px', padding: '20px' }}>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <span style={{ color: getColor(type) }}>{type}</span>
//     </div>
//   );
// }

// export default ProjectCard;
