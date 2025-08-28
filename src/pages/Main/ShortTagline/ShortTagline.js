import { useScreenSize } from "../../../hooks/useScreenSize";

const ShortTagline = () => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "100vw", // prevent overflow
                fontSize: screen === "mobile" ? "14px" : "18px",
                lineHeight: "1.6",
                textAlign: screen === "desktop" ? "left" : "justify",
                padding: screen === "mobile" ? "0 1rem" : "0 4rem", // reduce mobile padding
                boxSizing: "border-box",
                overflowWrap: "break-word",
                wordBreak: "break-word"
            }}
        >
            I build clean, responsive, and user-friendly websites. With experience in React, JavaScript, HTML, CSS, and Vercel, I’m eager to bring my skills into a full-time developer role.
        </div>
    );
};

export default ShortTagline;
