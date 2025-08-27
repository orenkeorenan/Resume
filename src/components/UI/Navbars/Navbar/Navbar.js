import { useState } from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const nav = [
    { label: "Home", key: 1 },
    { label: "About Me", key: 2 },
    { label: "Projects", key: 3 },
    { label: "Skills", key: 4 },
    { label: "Experience", key: 5 },
    { label: "Contact", key: 6 },
  ];

  const screen = useScreenSize();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navMap = (isMobile = false) =>
    nav.map((item) => (
      <li key={item.key} style={{ marginBottom: isMobile ? "1rem" : 0 }}>
        <a
            href={`#${item.label.replace(/\s+/g, "").toLowerCase()}`}
            style={{
                color: "var(--white-light)",
                textDecoration: "none",
                fontWeight: "500",
            }}
            onClick={isMobile ? () => setMenuOpen(false) : undefined}
        >
            {item.label}
        </a>
      </li>
    ));

  // Mobile view
  if (screen === "mobile") {
    return (
        <div style={{ position: "relative" ,marginRight:'1rem'}}>
            <GiHamburgerMenu
                size={40}
                onClick={toggleMenu}
                style={{ cursor: "pointer" ,color:"white"}}
            />
            <ul
                style={{
                    width: "40vw",
                    position: "absolute",
                    right: "-1rem",
                    listStyle: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    top: "5vh",
                    paddingTop: "1rem",
                    paddingRight: "1rem",
                    textAlign: "right",
                    fontSize: "1.2rem",
                    backgroundColor:"var(--blue-dark)",
                    // **Transition styles**
                    maxHeight: menuOpen ? "500px" : "0",
                    opacity: menuOpen ? 1 : 0,
                    overflow: "hidden",
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}
            >
                {navMap(true)}
            </ul>
        </div>
    );
  }

  // Desktop view
  return (
    <ul
        style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            padding: "0 2rem",
            listStyle: "none",
            margin: 0,
        }}
    >
        {navMap()}
    </ul>
  );
};

export default Navbar;
