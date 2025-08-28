import { useScreenSize } from '../../hooks/useScreenSize';

const H1 = ({children}) => {
    const screen = useScreenSize();
    return (
        <h1
            style={{
                fontSize:screen === "mobile"?"2rem":"3rem",
                marginBottom:"1rem"
            }}
        >

            {children}
        </h1>
        
    );
};

export default H1;