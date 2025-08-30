import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import H1 from "../../../components/Typography/H1";
import H2 from "../../../components/Typography/H2";
import { useScreenSize } from "../../../hooks/useScreenSize";
import NextButton from "../../../components/Buttons/NextButton";

const projectsData = [
    {
        title: "Goalio",
        description:
        "A gamified to-do list web app. Each task is represented as a checkpoint or mini-boss in an RPG-style background. Completing tasks progresses you towards defeating the final boss.",
    },
    {
        title: "Manna",
        description:
        "A social web app for spontaneous meetups. Post your availability for lunch or coffee, and connect with others nearby who want to join, perfect for 9-to-5 employees seeking company on short notice.",
    },
    {
        title: "Oppapost",
        description:
        "A logistics and warehouse solution facilitating product shipping from South Korea to Indonesia. Streamlined for individuals and businesses to manage deliveries efficiently.",
    },
    {
        title: "Daegume",
        description:
        "An e-commerce platform with a unique personal shopper service. Real people (students in South Korea) help customers choose the best products based on their preferences and inquiries.",
    },
];

const Projects = () => {
    const screen = useScreenSize();
    const [showLeft, setShowLeft] = useState(true);

    const leftProjects = projectsData.slice(0, 2);
    const rightProjects = projectsData.slice(2, 4);

    const ProjectCard = ({ project }) => (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                marginBottom: "1rem",
                minHeight: "100px",
            }}
        >
            <div style={{ fontSize: "2rem", color: "var(--olive-light)" }}>
                <FaFolder />
            </div>
            <div>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>{project.title}</h3>
                <p style={{ margin: 0, color: "var(--olive-lighter)" }}>{project.description}</p>
            </div>
        </div>
    );

    const nextSlide = () => setShowLeft(!showLeft);

    const renderColumns = () => {
        if (screen === "desktop") {
        return (
            <>
                <div style={{ flex: 1, minWidth: "300px" }}>
                    {leftProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div style={{ flex: 1, minWidth: "300px" }}>
                    {rightProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </>
        );
        } else {
        const currentProjects = showLeft ? leftProjects : rightProjects;
        return (
            <div style={{ flex: 1, minWidth: "300px"}}>
                {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

                {/* Toggle button on top-right */}
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
        );
        }
    };

  return (
    <div 
        style={{
            position: "relative",
            marginTop: screen === "desktop" ? "8vh" : "4vh",
        }}
    >
        <div
            style={{textAlign: screen === "mobile" ? "center" : "left"}}
        >

            <H1>Projects</H1>
            <H2>LATEST WORKS</H2>
        </div>

        <div
            style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                flexWrap: "wrap",
            }}
        >
            {renderColumns()}
        </div>
    </div>
  );
};

export default Projects;
