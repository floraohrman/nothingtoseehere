function About() {
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "4rem auto",
        padding: "2rem",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "18px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          background: "linear-gradient(90deg,#ff4ecd,#7c3aed)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About Me
      </h2>

      <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
        Jag studerar front-end utveckling och brinner för att skapa moderna,
        responsiva och interaktiva webbapplikationer. Jag arbetar främst med
        React, JavaScript och CSS.
      </p>

      {/* Skill cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {["React", "JavaScript", "CSS", "API integration"].map((skill) => (
          <div
            key={skill}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;