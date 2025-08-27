import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useScreenSize } from '../../hooks/useScreenSize';
import NameTag from './NameTag/NameTag';

const Main = () => {
    const screen= useScreenSize();
    return (
        <MainLayout>
            <NameTag/>
            
        </MainLayout>
    );
};

export default Main;