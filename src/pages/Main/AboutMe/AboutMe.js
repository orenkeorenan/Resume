import { useState } from 'react';
import { useScreenSize } from '../../../hooks/useScreenSize';
import H1 from '../../../components/Typography/H1';
import H2 from '../../../components/Typography/H2';
import P from '../../../components/Typography/P';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import CollapsibleText from './CollapsibleText/CollapsibleText';

const AboutMe = () => {
    const screen = useScreenSize();
    const isMobile = screen ==="mobile";

        

    return (
        <div style={{ marginTop:screen === "desktop"?"22vh":"20vh" }}>
            <H1>About Me</H1>
            <H2>MY STORY</H2>
            <div style={{ marginTop:"4rem", marginBottom:'2rem' }}>
                <CollapsibleText isMobile={isMobile}>
                
                    <P>
                        I was born and raised in Jakarta, Indonesia, in 1996. From a young age, I have been curious about how things work and inspired by my father’s hands-on approach to solving problems. I value continuous learning and enjoy creating and improving systems through practical solutions.
                    </P>
                    <P>
                        I have lived in Korea for over ten years, completed a Master’s in Business Administration, and achieved TOPIK Level 4. With experience in mechatronics, logistics, R&D, and web development, I am passionate about problem-solving and hands-on creation. I aim to grow as a developer who can lead projects from idea to deployment while continually expanding my technical skills.
                    </P>
                </CollapsibleText>
            </div>
            <ProfileInfo
                leftItems={[
                    { label: "Age", value: "29" },
                    { label: "Open for Work", value: "Available" },
                    { label: "Date of Birth", value: "03 March 1996" },
                    { label: "Phone", value: "010-4394-2212" },
                ]}
                rightItems={[
                    { label: "Nationality", value: "Indonesia" },
                    { label: "Residence", value: "Namgu, Busan" },
                    { label: "Email", value: "bernardusoren123@gmail.com" },
                    { label: "Languages", value: "English, Korean, Indonesian" },
                ]}
            />
        </div>
    );
};

export default AboutMe;
