import { useScreenSize } from "../../../hooks/useScreenSize";

const MainContent = ({children}) => {
    const screen = useScreenSize()
    return (
        <div
            style={{
                width:screen==="desktop"?"60vw":"100%",
                marginLeft:screen === "desktop" ? "40vw":""
            }}
        >
            {children}
        </div>
    );
};

export default MainContent;