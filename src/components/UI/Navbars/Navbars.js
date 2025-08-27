
const Navbars = ({children}) => {
    return (
        <nav
            style={{
                height:'10vh',
                backgroundColor:'var(--blue-primary)',
                position:'absolute',
                zIndex:"10",
                width:"100vw",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}
        >
            {children}
        </nav>
    );
};

export default Navbars;