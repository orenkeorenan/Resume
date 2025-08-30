import { useState } from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { GiHamburgerMenu } from "react-icons/gi";
import Resume from '../../../../Download/OrenBernardusResume.pdf';

const Navbar = () => {
    const navItems = [
        { label: "About", key: 1 },
        { label: "Skills", key: 2 },
        { label: "Projects", key: 3 },
        { label: "Experiences", key: 4 },
        { label: "Education", key: 5 },
    ];

    const screen = useScreenSize();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const buttonStyle = {
        backgroundColor: "var(--black-primary)",
        color: "var(--white-primary)",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "600",
        transition: "background-color 0.3s",
        display: "inline-block",
    };

    const renderNavList = (isMobile = false) => (
        <>
            {navItems.map((item) => (
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
            ))}
            <li style={{ marginTop: isMobile ? "1rem" : 0, marginLeft: isMobile ? 0 : "auto" }}>
                <a
                href={Resume}
                download ="Oren Bernardus Resume.pdf"
                style={buttonStyle}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--blue-light)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--black-primary)")
                }
                onClick={isMobile ? () => setMenuOpen(false) : undefined}
                >
                    Download Resume
                </a>
            </li>
        </>
    );

    // Tablet & Mobile view
    if (screen !== "desktop") {
        return (
        <div style={{ position: "relative", marginRight: "1rem" }}>
            <GiHamburgerMenu
                size={40}
                onClick={toggleMenu}
                style={{ cursor: "pointer", color: "white" }}
            />
            <ul
                style={{
                    width: "100vw",
                    position: "absolute",
                    right: "0",
                    listStyle: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    top: "5vh",
                    padding: "1rem",
                    textAlign: "right",
                    fontSize: "1.2rem",
                    backdropFilter: "blur(8px)",
                    maxHeight: menuOpen ? "500px" : "0",
                    opacity: menuOpen ? 1 : 0,
                    overflow: "hidden",
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}
            >
                {renderNavList(true)}
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
            {renderNavList()}
        </ul>
    );
};

export default Navbar;
