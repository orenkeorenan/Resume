import { useState, useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";

const Navbars = ({ children }) => {
  const screen = useScreenSize();
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    if (screen === "desktop") return; // no need for scroll logic on desktop

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
          screen === "desktop"
            ? "var(--blue-primary)"
            : scrolledToBottom
            ? "var(--blue-primary)"
            : "transparent",
        position: "absolute",
        zIndex: "10",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.3s ease", // smooth transition
      }}
    >
      {children}
    </nav>
  );
};

export default Navbars;
