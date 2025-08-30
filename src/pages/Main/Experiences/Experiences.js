import React, { useState } from "react";
import H1 from "../../../components/Typography/H1";
import { useScreenSize } from "../../../hooks/useScreenSize";
import H2 from "../../../components/Typography/H2";
import P from "../../../components/Typography/P";
import NextButton from "../../../components/Buttons/NextButton";

const experiencesData = [
    {
        date: "2020 – Present",
        title: "Founder, OPPAPOST",
        description:
        "Operating a warehouse-based logistics service that supports international deliveries for individual customers. Built the system infrastructure and manage daily operations.",
    },
    {
        date: "2024 – Present",
        title: "Founder, KajagoTravel",
        description:
            "Building a custom itinerary travel service for South Korea, helping visitors discover local favorite spots and enjoy authentic experiences beyond typical tourist routes.",
    },

    {
        date: "2023 – Present",
        title: "Web Development Projects",
        description:
        "Independently planned, designed, and deployed web applications while studying front-end and full-stack development using HTML, CSS, and React.js.",
    },
    {
        date: "2025",
        title: "HanChamp – SeaCrew Management Support",
        description:
        "Assisted Indonesian seafarers in securing employment in Korea. Coordinated communication and resolved issues between workers and local companies.",
    },
    {
        date: "2019 - 2020",
        title: "CheilMobile – R&D Team",
        description:
        "Worked on CNC machining and assembly tasks as part of the R&D team in a motorhome manufacturing company based in Gyeonggi-do.",
    },
    {
        date: "2015 – 2022",
        title: "Part-time Work Experience",
        description:
        "Balanced studies with diverse part-time jobs in Korea, gaining adaptability and hands-on problem-solving skills.",
    },
    
];

const Experiences = () => {
    const screen = useScreenSize();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Decide how many items per slide based on screen
    const itemsPerSlide = screen === "desktop" ? 2 : 1;

    // Slice items according to screen type
    const visibleExperiences = experiencesData.slice(
        currentIndex,
        currentIndex + itemsPerSlide
    );

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < experiencesData.length) {
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
                <H1>Experiences</H1>
                <H2 style={{ marginBottom: "3rem" }}>WORKING WITH</H2>
            </div>

            {/* Experience Items */}
            <div
                style={{
                    display: "flex",
                    flexDirection: screen === "desktop" ? "row" : "column",
                    gap: "2rem",
                    height: screen ==="desktop"?"18vh":screen === "tablet" ? "10vh" :"30vh"
                }}
            >
                {visibleExperiences.map((exp, idx) => (
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
                        {exp.date}
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
                            {exp.title}
                        </h3>
                        <P>{exp.description}</P>
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

export default Experiences;
