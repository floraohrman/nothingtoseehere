import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/projectsData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;