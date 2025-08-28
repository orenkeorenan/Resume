import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useScreenSize } from '../../hooks/useScreenSize';
import NameTag from './NameTag/NameTag';
import ShortTagline from './ShortTagline/ShortTagline';
import TypingHead from './TypingHead/TypingHead';
import AboutMe from './AboutMe/AboutMe';

const Main = () => {
    const screen= useScreenSize();
    return (
        <MainLayout>
            <NameTag/>
            
            <div
                style={{
                    marginTop: screen === "desktop"? "30vw" :"5vw",
                    marginLeft: screen ==="desktop"? "4rem" :"0"
                }}
            >

                <TypingHead/>
            </div>
            <ShortTagline/>
            <div
                style={{
                    marginLeft:screen ==="desktop"?"4rem":"2rem",
                }}
            >
                <AboutMe/>
            </div>
        </MainLayout>
    );
};

export default Main;