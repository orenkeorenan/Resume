import Navbars from '../../UI/Navbars/Navbars';
import PicturePanel from '../../UI/PicturePanel/PicturePanel';
import ContentsContainer from './ContentsContainer';
import MainContent from './../../UI/MainContent/MainContent';
import Navbar from '../../UI/Navbars/Navbar/Navbar';
import Logo from '../../../assets/LogoTrans.png'
import { useScreenSize } from '../../../hooks/useScreenSize';

const MainLayout = ({children}) => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                backgroundColor:"var(--white-primary)" ,
                position:"relative",
            }}
        >   
            <Navbars>
                <div
                    style={{
                        height:"100%",
                        marginLeft:screen === "mobile" ?"0.5rem":'1rem',
                        display:"flex",
                        alignItems:'center'
                    }}
                >
                    <img 
                        src={Logo}
                        style={{
                            height:"90%",
                            maxWidth:"100%",
                            objectFit:"contain",
                        }}
                    />
                </div>

                <Navbar/>
            </Navbars>

            <ContentsContainer>

                {/* Picture */}
                <PicturePanel/>

                {/* Main */}
                <MainContent>
                    {children}
                </MainContent>
            </ContentsContainer>
        </div>
    );
};

export default MainLayout;