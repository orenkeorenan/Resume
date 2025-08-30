import NextButton from "../../../components/Buttons/NextButton";
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
        />
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

const SkillsVrTwo = () => {
  const screen = useScreenSize();
  const [startIndex, setStartIndex] = useState(0);

  // Split categories into left and right for desktop
  const leftItems = skillCategories.slice(0, 2);
  const rightItems = skillCategories.slice(2, 4);

  // Mobile carousel: show 1 category at a time
  const mobileCategory = skillCategories[startIndex];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % skillCategories.length);
  };

  return (
    <div
        style={{
            marginTop: screen === "desktop" ? "8vh" : "4vh",
            position: "relative",
        }}
    >
        <div
            style={{
                textAlign: screen === "mobile" ? "center" : "left",
            }}
        >

            <H1>Skills</H1>
            <H2>CREATIVE ABILITY</H2>
        </div>

        {screen !== "mobile" ? (
            <div style={{ display: "flex", gap: "3rem" }}>
            {/* Left Column */}
            <div style={{ flex: 1 }}>
                {leftItems.map((group, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                    <H2
                        style={{
                            marginTop:"3rem"
                        }}
                    >

                    {group.category}
                    </H2>
                    {group.items.map((skill, j) => (
                    <SkillBar key={j} title={skill.title} percent={skill.percent} />
                    ))}
                </div>
                ))}
            </div>

            {/* Right Column */}
            <div style={{ flex: 1 }}>
                {rightItems.map((group, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                    
                    <H2
                        style={{
                            marginTop:"3rem"
                        }}
                    >

                    {group.category}
                    </H2>
                    {group.items.map((skill, j) => (
                    <SkillBar key={j} title={skill.title} percent={skill.percent} />
                    ))}
                </div>
                ))}
            </div>
        </div>
        ) : (
            // Mobile carousel
            <div style={{ marginTop: "2rem" }}>
            <h2
                style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "var(--olive-light)",
                }}
            >
                {mobileCategory.category}
            </h2>
            {mobileCategory.items.map((skill, j) => (
                <SkillBar key={j} title={skill.title} percent={skill.percent} />
            ))}

                <div
                    style={{
                        marginTop: "1rem",
                        textAlign: "center",
                        position: "absolute",
                        top: "2rem",
                        right: "1rem",
                    }}
                >
                    <NextButton onClick={nextSlide} />
                </div>
            </div>
        )}
    </div>
  );
};

export default SkillsVrTwo;
