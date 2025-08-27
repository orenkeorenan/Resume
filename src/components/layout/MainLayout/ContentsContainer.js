import { useScreenSize } from "../../../hooks/useScreenSize";

const ContentsContainer = ({children}) => {
    const screen = useScreenSize();
    
    return (
        <div
            style={{
                width:"100vw",
                display:'flex',
                position:"relative",
                flexDirection:screen==="desktop"?"row":"column",
                position:"relative",
            }}
        >
            {children}
        </div>
    );
};

export default ContentsContainer;