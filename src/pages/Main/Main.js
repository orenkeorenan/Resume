import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useScreenSize } from '../../hooks/useScreenSize';

const Main = () => {
    const screen= useScreenSize();
    return (
        <MainLayout>
            {/* Name */}
            {screen === "Desktop"?(
                <div>Bernardus Oren</div>
            ):(

                <div
                    style={{
                        backgroundColor:'green',
                        width:"100%",
                        height:'1rem',
                        top:"0",
                        position:"relative"
                    }}
                >
                    <div
                        style={{
                            position:"absolute",
                            top:"-1rem",
                            left:"50%",
                            transform:"translateX(-50%)",
                            backgroundColor:"var(--blue-primary)",
                            color:"white",
                            padding:"0.2rem 0.5rem",
                            borderRadius:"0.5rem",
                            fontSize:"0.8rem",
                            fontWeight:"bold",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        Bernardus Oren
                    </div>
                </div>
            )}
            <div
                style={{
                    height:screen==="desktop"?"100vh":"70vh",
                }}
            >
                
            </div>
            <div
                style={{
                    height:"100vh",
                }}
            >

            </div>
            <div
                style={{
                    height:"100vh",
                }}
            >

            </div>
            <div
                style={{
                    height:"100vh",
                }}
            >

            </div>
        </MainLayout>
    );
};

export default Main;