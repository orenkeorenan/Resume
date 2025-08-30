import { useScreenSize } from "../../../../hooks/useScreenSize";

const SectionWrapper = ({children,style}) => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                marginLeft:screen ==="desktop"?"4rem":"2rem",
                marginRight:"2rem",
                textAlign: screen === "desktop" ? "left" : "justify",
                borderBottom: "1px solid var(--olive-lighter)",
                marginBottom: "3rem",
                ...style,
            }}
        >
            {children}
        </div>
      );
}
 
export default SectionWrapper;