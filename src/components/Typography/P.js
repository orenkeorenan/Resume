import { useScreenSize } from "../../hooks/useScreenSize";

const P = ({children}) => {
    const screen = useScreenSize();
    return (
        <p
            style={{
                fontSize:screen==="mobile"?"14px": "18px",
                lineHeight: "1.6",
                boxSizing:"border-box",
                textAlign:"justify"
            }}
        >
            {children}
        </p>
    );
};

export default P;