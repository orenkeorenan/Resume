import H1 from "../../../components/Typography/H1";
import H2 from "../../../components/Typography/H2";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { useState } from "react";

// Grouped skills
const skillCategories = [
  {
    category: "Core Front-End",
    items: [
      { title: "HTML5 & Semantic Markup", percent: 85 },
      { title: "CSS3 / Responsive Design", percent: 80 },
      { title: "JavaScript (ES6+)", percent: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { title: "React.js", percent: 65 },
      { title: "React Hooks & State Management", percent: 60 },
      { title: "Next.js", percent: 55 },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { title: "Git & GitHub", percent: 75 },
      { title: "Vercel / Netlify Deployment", percent: 70 },
      { title: "VS Code & Developer Tools", percent: 85 },
    ],
  },
  {
    category: "Design & Soft Skills",
    items: [
      { title: "UI/UX Awareness", percent: 60 },
      { title: "Problem Solving & Debugging", percent: 70 },
      { title: "Collaboration & Communication", percent: 80 },
    ],
  },
];

// Flatten for mobile carousel logic
const flatSkills = skillCategories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.category }))
);

// Reusable SkillBar component
const SkillBar = ({ title, percent }) => (
  <div style={{ marginBottom: "1.5rem" }}>
    <h3
      style={{
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginBottom: "0.5rem",
      }}
    >
      {title}
    </h3>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "4px",
        backgroundColor: "#475569",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "4px",
          width: `${percent}%`,
          backgroundColor: "var(--olive-light)",
          borderRadius: "4px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
    <p
      style={{
        textAlign: "right",
        color: "var(--olive-light)",
        fontWeight: "600",
        marginTop: "0.25rem",
      }}
    >
      {percent}%
    </p>
  </div>
);

const Skills = () => {
  const screen = useScreenSize();
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = screen === "mobile" ? 3 : flatSkills.length;

  // Slice visible skills
  const visibleSkills = flatSkills.slice(startIndex, startIndex + itemsPerPage);

  // Wrap-around if near the end
  if (screen === "mobile" && visibleSkills.length < itemsPerPage) {
    visibleSkills.push(
      ...flatSkills.slice(0, itemsPerPage - visibleSkills.length)
    );
  }

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % flatSkills.length);
  };

  return (
    <div
        style={{
            color: "white",
            marginTop: screen === "desktop" ? "22vh" : "20vh",
            paddingRight: screen === "mobile" ? "2rem" : "4rem",
            position: "relative",
        }}
    >
        <H1>Skills</H1>
        <H2>Creative Ability</H2>

        {/* Desktop layout: 2 columns */}
        {screen !== "mobile" ? (
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // exactly 2 columns
            gap: "3rem",
            }}
        >
            {/* Left column */}
            <div>
            {skillCategories.slice(0, 2).map((group, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                <h2
                    style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "var(--olive-light)",
                    }}
                >
                    {group.category}
                </h2>
                {group.items.map((skill, j) => (
                    <SkillBar key={j} title={skill.title} percent={skill.percent} />
                ))}
                </div>
            ))}
            </div>

            {/* Right column */}
            <div>
            {skillCategories.slice(2, 4).map((group, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                <h2
                    style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "var(--olive-light)",
                    }}
                >
                    {group.category}
                </h2>
                {group.items.map((skill, j) => (
                    <SkillBar key={j} title={skill.title} percent={skill.percent} />
                ))}
                </div>
            ))}
            </div>
        </div>
        ) : (
            // Mobile layout: carousel
            <>
            <div style={{ marginTop: "2rem" }}>
                {visibleSkills.map((skill, i) => (
                <SkillBar key={i} title={skill.title} percent={skill.percent} />
                ))}
            </div>

            <div
                style={{
                marginTop: "1rem",
                textAlign: "center",
                position: "absolute",
                top: "2rem",
                right: "2rem",
                }}
            >
                <button
                    onClick={nextSlide}
                    style={{
                        backgroundColor: "var(--black-lighter)",
                        color: "white",
                        padding: "0.5rem 1.2rem",
                        borderRadius: "9999px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "1rem",
                    }}
                >
                    ➡
                </button>
            </div>
            </>
        )}
    </div>
  );
};

export default Skills;
