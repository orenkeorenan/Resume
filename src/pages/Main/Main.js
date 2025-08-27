import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useScreenSize } from '../../hooks/useScreenSize';
import NameTag from './NameTag/NameTag';
import ShortTagline from './ShortTagline/ShortTagline';

const Main = () => {
    const screen= useScreenSize();
    return (
        <MainLayout>
            <NameTag/>
            <div
                style={{
                    marginTop:"30vw",
                    marginLeft:"4rem"
                }}
            >

                <ShortTagline/>
            </div>
        </MainLayout>
    );
};

export default Main;