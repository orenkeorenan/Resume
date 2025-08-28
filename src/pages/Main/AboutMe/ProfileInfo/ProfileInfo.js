import { useState } from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";

const ProfileInfo = ({ leftItems, rightItems }) => {
  const screen = useScreenSize();
  const sections = [leftItems, rightItems]; // array of sections
  const [currentIndex, setCurrentIndex] = useState(0);

  const InfoRow = ({ label, value }) => (
    <div style={{ display: "flex", marginBottom: "0.7rem" }}>
      <div
        style={{
          minWidth: "100px",
          width: screen === "desktop" ? "10vw" : "10rem",
          color: "var(--olive-light)"
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
      <div style={{ display: "flex", gap: "1rem", width: "100%", boxSizing: "border-box" }}>
        <div style={{ flex: 1 }}>
          {leftItems.map((item) => <InfoRow key={item.label} {...item} />)}
        </div>
        <div style={{ flex: 1 }}>
          {rightItems.map((item) => <InfoRow key={item.label} {...item} />)}
        </div>
      </div>
    );
  }

  // Mobile: show toggle
  const handleToggle = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  return (
    <div style={{ position: "relative", padding: "1rem", width: "100%", boxSizing: "border-box" }}>
      {sections[currentIndex].map((item) => <InfoRow key={item.label} {...item} />)}

      <div
        onClick={handleToggle}
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "1.5rem",
          userSelect: "none"
        }}
      >
        ➤
      </div>
    </div>
  );
};

export default ProfileInfo;
