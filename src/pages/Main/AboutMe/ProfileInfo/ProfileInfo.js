import { useState } from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import NextButton from "../../../../components/Buttons/NextButton";

const ProfileInfo = ({ leftItems, rightItems }) => {
  const screen = useScreenSize();
  const sections = [leftItems, rightItems];
  const [currentIndex, setCurrentIndex] = useState(0);

  const InfoRow = ({ label, value }) => (
    <div style={{ display: "flex", marginBottom: "0.7rem" }}>
      <div
        style={{
          minWidth: "100px",
          width:
            screen === "desktop"
              ? "10vw"
              : screen === "tablet"
              ? "10rem"
              : "7rem",
          color: "var(--olive-light)",
        }}
      >
        {label}
      </div>
      <div style={{ textAlign: "left" }}>: {value}</div>
    </div>
  );

  // Desktop & Tablet: show both columns
  if (screen === "desktop" || screen === "tablet") {
    return (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1 }}>
          {leftItems.map((item) => (
            <InfoRow key={item.label} {...item} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {rightItems.map((item) => (
            <InfoRow key={item.label} {...item} />
          ))}
        </div>
      </div>
    );
  }

  // Mobile: show toggle with smooth transition
  const handleToggle = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
            key={currentIndex} // force re-render on change
            style={{
            transition: "opacity 0.4s ease, transform 0.4s ease",
            opacity: 1,
            transform: "translateX(0)",
            animation: "fadeSlide 0.4s ease",
            }}
        >
            {sections[currentIndex].map((item) => (
            <InfoRow key={item.label} {...item} />
            ))}
        </div>

        <div
            style={{
                marginTop: "1rem",
                textAlign: "center",
                position: "absolute",
                top: 0,
                right: "1rem",
            }}
        >
            <NextButton onClick={handleToggle}/>
        </div>

        {/* Inline keyframes */}
        <style>
            {`
            @keyframes fadeSlide {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
            `}
        </style>
    </div>
  );
};

export default ProfileInfo;
