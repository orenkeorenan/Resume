import { useScreenSize } from "../../hooks/useScreenSize";

const H2 = ({children}) => {
    const screen = useScreenSize();
    return (
        <h2
            style={{
                color:"var(--olive-light)",
                fontSize:screen ==="mobile"?"0.9rem":'1.1rem',
            }}
        >
            {children}
        </h2>
    );
};

export default H2;