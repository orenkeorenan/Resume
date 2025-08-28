import { useScreenSize } from "../../../hooks/useScreenSize";

const ShortTagline = () => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                width: "100%", // full width of parent
                maxWidth: "100%", // prevent overflow
                fontSize: screen === "mobile" ? "14px" : "18px",
                lineHeight: "1.6",
                textAlign: screen === "desktop" ? "left" : "justify",
                boxSizing: "border-box",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                paddingRight:"4rem",
                paddingLeft:screen === "desktop"?"4rem":"2rem",
            }}
        >
            I build clean, responsive, and user-friendly websites. With experience in React, JavaScript, HTML, CSS, and Vercel, I’m eager to bring my skills into a full-time developer role.
        </div>
    );
};

export default ShortTagline;
