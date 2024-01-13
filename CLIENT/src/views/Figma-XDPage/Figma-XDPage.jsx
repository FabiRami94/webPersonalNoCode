

import { useNavigate } from "react-router-dom";
import styles from './Figma-XDPage.module.css';


const FigmaXDPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <div className={styles.centerContent}>
                <button onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/QKGG7v0/Logo-Figma.png" alt="Logo Illustrator" />
                <button onClick={handleReturn}>BACK</button>
            </div>  
            <h2>WORK</h2>  
            
            <div >
                <h2>PROGRAMAS NO CODE</h2>  
                      
            </div>
        </>
    )
};

export default FigmaXDPage;