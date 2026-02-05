import { useState } from "react";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      style={{
        padding: "1.5rem",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <h3>{project.title}</h3>
      <p style={{ opacity: 0.7 }}>
        {project.description}
      </p>
    </div>
  );
}

export default ProjectCard;