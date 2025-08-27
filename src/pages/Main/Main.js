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
                        backgroundColor:'green'
                        
                    }}
                >
                    Bernardus Oren
                </div>
            )}
            {/* <div
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

            </div> */}
        </MainLayout>
    );
};

export default Main;