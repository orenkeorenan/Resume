import { useScreenSize } from "../../../../hooks/useScreenSize";

const SectionWrapper = ({children,style}) => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                marginLeft:screen ==="desktop"?"4rem":"2rem",
                marginRight:screen==="mobile"?"2rem":"4rem",
                textAlign: screen === "desktop" ? "left" : "justify",
                borderBottom: "1px solid var(--olive-lighter)",
                ...style,
            }}
        >
            {children}
        </div>
      );
}
 
export default SectionWrapper;