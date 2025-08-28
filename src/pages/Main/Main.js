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
                    marginTop: screen === "desktop" ? "30vw" : "5vw",
                    marginLeft: screen === "desktop" ? "4rem" : "0", // remove 2rem on mobile
                    paddingRight: screen === "mobile" ? "1rem" : "0", // safe padding inside viewport
                    boxSizing: "border-box"
                }}
            >
                <TypingHead/>
            </div>

            <ShortTagline/>

            <div
                style={{
                    marginLeft: screen === "desktop" ? "4rem" : "0", // remove extra margin on mobile
                    paddingRight: screen === "mobile" ? "1rem" : "0",
                    boxSizing: "border-box"
                }}
            >
                <AboutMe/>
            </div>

        </MainLayout>
    );
};

export default Main;