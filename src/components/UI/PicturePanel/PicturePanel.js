import { useScreenSize } from '../../../hooks/useScreenSize';
import PhotoProfile from '../../../assets/ProfilePhoto.jpg';

const PicturePanel = () => {
    const screen = useScreenSize();

    return (
        <div
            style={{
                width: screen === "desktop" ? "40vw" : "100vw",
                height: screen === "desktop" ? "100vh" : "60vh",
                position: screen === "desktop" ? "fixed" : "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${PhotoProfile})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:"top center",
                backgroundSize:'cover',
            }}
        >
            {/* Add any overlay content here if needed */}
        </div>
    );
};

export default PicturePanel;
