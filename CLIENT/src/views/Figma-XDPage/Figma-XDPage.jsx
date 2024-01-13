

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
            <h2 style={{color: 'white'}}>WORK IN PROCESS...</h2>  
        </>
    )
};

export default FigmaXDPage;