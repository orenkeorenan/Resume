import { useScreenSize } from "../../hooks/useScreenSize";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";

const NextButton = ({ onClick }) => {
  const screen = useScreenSize();
  const [hovered, setHovered] = useState(false);

  return (
    <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            padding: "0.5rem",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: screen === "mobile" ? "1rem" : "1.3rem",
            border: "none",
            position: "relative",
            backgroundColor: "transparent",
            color: "var(--olive-light)",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            transition: "transform 0.3s ease",
            transform: hovered ? "translateX(5px)" : "translateX(0)",
        }}
        >
        <GrLinkNext
            style={{
                transition: "transform 0.3s ease",
                transform: hovered ? "translateX(5px)" : "translateX(0)",
            }}
        />
        <div
            style={{
                position: "absolute",
                backgroundColor: "var(--olive-light)",
                height: "3px",
                bottom: "0.3rem",
                left: "0",
                width: hovered ? "100%" : "35px",
                transition: "width 0.3s ease",
            }}
        />
    </button>
  );
};

export default NextButton;
