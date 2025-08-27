import { useState, useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";

const Navbars = ({ children }) => {
  const screen = useScreenSize();
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    if (screen !== "mobile") return; // only apply scroll logic on mobile

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
        height: "10vh",
        backgroundColor:
          screen === "mobile"
            ? scrolledToBottom
              ? "var(--blue-primary)" // mobile: only at bottom
              : "transparent"
            : "var(--blue-primary)",   // tablet & desktop: always blue
        position: "fixed",
        zIndex: "10",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.3s ease",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      {children}
    </nav>
  );
};

export default Navbars;
