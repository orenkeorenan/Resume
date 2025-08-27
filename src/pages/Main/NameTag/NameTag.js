import { useScreenSize } from "../../../hooks/useScreenSize";

const NameTag = () => {
    const screen = useScreenSize();
    const width = "16vw"

    return ( 
        screen === "desktop" ? (
                <div
                    style={{
                        width:"100%",
                        marginTop:`calc(${width}/1.3)`,
                        position:"relative",
                    }}
                >
                    <div
                        style={{
                            position:"absolute",
                            left:`calc(-${width} / 2)`,
                            backgroundColor:"var(--black-primary)",
                            color:"var(--white-primary)", 
                            width:width,
                            height:width,
                            borderRadius:"50%",  
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center ",
                        }}
                    >
                        <div
                            style={{
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"start",
                                justifyContent:"center",
                                fontSize:"5rem",
                                textAlign:"center",
                                marginLeft:`calc(${width}/1.5)`,
                                gap:"0.5rem"
                            }}
                        >
                            <span>Bernardus</span>
                            <span>Oren</span>
                        </div>
                    </div>
                </div>
            ):(

                <div
                    style={{
                        height:'1rem',
                        top:"0",
                        position:"relative"
                    }}
                >
                    <div
                        style={{
                            position:"absolute",
                            bottom:0,
                            left:"50%",
                            transform:"translateX(-50%)",
                            backgroundColor:"var(--black-primary)",
                            color:"var(--white-primary)",
                            width:"70vw",
                            height:"10vh",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            fontSize:screen==="mobile"?"1.4rem":"3rem",
                            borderTopLeftRadius:"100vw",
                            borderTopRightRadius:"100vw",
                            
                        }}
                    >
                        Bernardus Oren
                    </div>
                </div>
            )
     );
}
 
export default NameTag;