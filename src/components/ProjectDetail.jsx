function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#0a0515",
          padding: "2rem",
          borderRadius: "20px",
          maxWidth: "800px",
          width: "90%",
        }}
      >
        <button onClick={onClose}>
          Close
        </button>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(200px,1fr))",
            gap: "1rem",
          }}
        >
          {project.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;