import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useScreenSize } from '../../hooks/useScreenSize';
import NameTag from './NameTag/NameTag';
import ShortTagline from './ShortTagline/ShortTagline';
import TypingHead from './TypingHead/TypingHead';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import SkillsVrTwo from './Skills/SkillsVrTwo';
import Experiences from './Experiences/Experiences';

import SectionWrapper from '../../components/layout/MainLayout/SectionWrapper/SectionWrapper';
import { BiBorderBottom } from 'react-icons/bi';
import Education from './Education/Education';


const Main = () => {
    const screen= useScreenSize();
    return (
        <MainLayout>
            <NameTag/>
            
            <div
                style={{
                    marginTop: screen === "desktop"? "50%" :"5vw",
                    marginLeft:screen ==="desktop"?"4rem":"2rem",
                }}
            >
                <TypingHead/>
            </div>

            <SectionWrapper style={{borderBottom:'none'}}>
                <ShortTagline/>
            </SectionWrapper>

            <SectionWrapper>
                <AboutMe/>
            </SectionWrapper>

            <SectionWrapper>
                <SkillsVrTwo/>
            </SectionWrapper>
            
            <SectionWrapper>
                <Projects/>
            </SectionWrapper>
             
            <SectionWrapper style={{borderBottom:'none'}}>
                <Experiences/>
            </SectionWrapper>

            <SectionWrapper style={{borderBottom:'none'}}>
                <Education/>
            </SectionWrapper>

        </MainLayout>
    );
};

export default Main;