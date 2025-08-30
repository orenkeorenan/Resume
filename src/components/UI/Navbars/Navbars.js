import { useState, useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";

const Navbars = ({ children }) => {
  const screen = useScreenSize();
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    // apply logic for mobile & tablet
    if (screen === "desktop") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setScrolledToBottom(scrollTop + windowHeight >= docHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [screen]);

  return (
    <nav
        style={{
            height: "5rem",
            backgroundColor:
            screen === "desktop"
                ? "var(--black-lighter)" // desktop: always
                : scrolledToBottom
                ? "var(--black-lighter)" // mobile + tablet: only at bottom
                : "transparent",
            position: "fixed",
            zIndex: "10",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "background-color 0.3s ease",
            top: 0,
            left: 0,
            right: 0,
            width:"100vw",
        }}
    >
        {children}
    </nav>
  );
};

export default Navbars;
