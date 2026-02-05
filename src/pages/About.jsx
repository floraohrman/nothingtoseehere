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
        Hej! Jag heter Flora och jag är ett katt- och spel-tokig tjej som studerar front-end utveckling på KYH. På fritiden 
        frilandsar jag som digital konstnär och så spelar jag
        mycket datorspel. Mina favvoritspel är:
      </p>

      {/* Game cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {["Overwatch", "Final Fantasy XIV online", "Infinity Nikki", "Stardew Valley", "Minecraft", "Schedule 1", "Where winds Meet"].map((skill) => (
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

      <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
        Jag har pluggat 1 år på universitet, ett halvt år på YH båda inom programmering.
        Innan det läste jag på komvux och tog iprincip alla kurser inom programmering, IT 
        och matematik som fanns, inklusive: Programmering 1 & 2, Webbutveckling 1, Databasprogrammering 1, Datorteknik 1 & 2, Matematik 1, 2, 3 samt 4.
        Några språk jag kan och skills jag har är:
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
        {["React", "JavaScript", "CSS", "API integration", "HTML 4 & 5", "C#", "Java", "Python", "Sql", "PHP"].map((skill) => (
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