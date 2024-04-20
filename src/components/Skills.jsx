const Skills = () => {
  return (
    <div
      className="border-2 border-custom-sand bg-white rounded-[30px] my-8"
      id="skills"
    >
      <div className="px-5 py-4">
        <h3 className="text-2xl font-bold text-custom-red">My Arsenals</h3>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Programming Languages</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("HTML", "bg-custom-lime")}
            {renderSkill("CSS/SCSS", "bg-custom-lime")}
            {renderSkill("JavaScript", "bg-custom-lime")}
            {renderSkill("TypeScript", "bg-custom-lime")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Technologies</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("Bootstrap", "bg-custom-purple")}
            {renderSkill("Tailwind CSS", "bg-custom-purple")}
            {renderSkill("Material UI", "bg-custom-purple")}
            {renderSkill("React", "bg-custom-purple")}
            {renderSkill("Redux", "bg-custom-purple")}
            {renderSkill("React Query", "bg-custom-purple")}
            {renderSkill("Nextjs", "bg-custom-purple")}
            {renderSkill("Express", "bg-custom-purple")}
            {renderSkill("MongoDB", "bg-custom-purple")}
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-base font-bold mb-2">Tools and Environments</h4>
          <div className="flex gap-2 font-semibold text-base flex-wrap">
            {renderSkill("Nodejs", "bg-custom-teal")}
            {renderSkill("VS Code", "bg-custom-teal")}
            {renderSkill("Git", "bg-custom-teal")}
            {renderSkill("GitHub", "bg-custom-teal")}
            {renderSkill("Postman", "bg-custom-teal")}
            {renderSkill("Vercel", "bg-custom-teal")}
            {renderSkill("Netlify", "bg-custom-teal")}
            {renderSkill("Render", "bg-custom-teal")}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderSkill = (name, bgColor) => (
  <span
    className={`px-4 py-1 border border-custom-sand ${bgColor} rounded-full`}
  >
    {name}
  </span>
);

export default Skills;
