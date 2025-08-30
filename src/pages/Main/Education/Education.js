import React, { useState } from "react";
import H1 from "../../../components/Typography/H1";
import { useScreenSize } from "../../../hooks/useScreenSize";
import H2 from "../../../components/Typography/H2";
import P from "../../../components/Typography/P";
import NextButton from "../../../components/Buttons/NextButton";

const educationData = [
    {
        date: "2020 – 2025",
        title: "Master’s Degree in Business Administration - Kyungsung University",
        description:
        "Pursuing a Master’s degree in Business Administration with a focus on cross-cultural management, strategic leadership, and academic research.",
    },
    {
        date: "2015 – 2019",
        title: "B.Eng. in Mechatronics Engineering - Kyungsung University",
        description:
        "Completed a Bachelor of Engineering in Mechatronics, gaining strong foundations in system design, automation, electronics, and mechanical engineering.",
    },
    {
        date: "2014 – 2015",
        title: "Korean Language Studies - Kyungsung University, Indonesia Program",
        description:
        "Completed a one-year Korean language program to build proficiency in reading, writing, listening, and speaking for academic and professional use.",
    },
    {
        date: "2012 – 2014",
        title: "Mawar Sharon International School - Jakarta, Indonesia",
        description:
        "Completed high school education in an international environment, developing critical thinking, communication, and global perspective.",
    },
    {
        date: "2009 – 2012",
        title: "SMP Don Bosco - Jakarta, Indonesia",
        description:
        "Completed junior high school education with emphasis on mathematics, science, and language studies.",
    },
    {
        date: "2004 – 2009",
        title: "SD Don Bosco - Jakarta, Indonesia",
        description:
        "Completed primary school education, building the foundation of academic skills and discipline.",
    },
];


const Education = () => {
    const screen = useScreenSize();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Decide how many items per slide based on screen
    const itemsPerSlide = screen === "desktop" ? 2 : 1;

    // Slice items according to screen type
    const visibleEducation = educationData.slice(
        currentIndex,
        currentIndex + itemsPerSlide
    );

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < educationData.length) {
        setCurrentIndex(currentIndex + itemsPerSlide);
        } else {
        setCurrentIndex(0); // loop back to start
        }
    };

    return (
        <div
            style={{
                marginTop: screen === "desktop" ? "8vh" : "4vh",
                position: "relative",
            }}
        >
            {/* Title Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: screen === "mobile" ? "center" : "flex-start",
                }}
            >
                <H1>Education</H1>
                <H2 style={{ marginBottom: "3rem" }}>STUDIED AT</H2>
            </div>

            {/* Education Items */}
            <div
                style={{
                    display: "flex",
                    flexDirection: screen === "desktop" ? "row" : "column",
                    gap: "2rem",
                    height: screen ==="desktop"?"18vh":screen === "tablet" ? "10vh" :"30vh"
                }}
            >
                {visibleEducation.map((edu, idx) => (
                <div
                    key={idx}
                    style={{
                        display: "flex",
                        flexDirection: screen === "mobile" ? "column" : "row",
                        alignItems: "flex-start",
                        gap: "1rem",
                        marginLeft: screen === "desktop" ? "-2rem" : "",
                        flex: 1,
                    }}
                >
                    {/* Date column */}
                    <div
                        style={{
                            writingMode:
                                screen === "mobile" 
                                ? "horizontal-tb" 
                                : "vertical-rl",
                            textAlign: "left",
                            fontWeight: "bold",
                            color: "var(--olive-light)",
                            minWidth: "3rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        {edu.date}
                    </div>

                    {/* Content column */}
                    <div>
                        <h3
                            style={{
                                margin: 0,
                                fontWeight: "bold",
                                textAlign: "left",
                            }}
                        >
                            {edu.title}
                        </h3>
                        <P>{edu.description}</P>
                    </div>
                </div>
                ))}
            </div>

            {/* Toggle button */}
            <div
                    style={{
                        marginTop: "1rem",
                        textAlign: "center",
                        position: "absolute",
                        top: "7rem",
                        right: "1rem",
                    }}
            >
                <NextButton onClick={nextSlide} />
            </div>
        </div>
    );
};

export default Education;
