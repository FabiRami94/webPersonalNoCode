

import { useNavigate } from "react-router-dom";
import styles from './Figma-XDPage.module.css';


const FigmaXDPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <div>
            <div className={styles.centerContent}>
                <button onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/QKGG7v0/Logo-Figma.png" alt="Logo Illustrator" />
                <button onClick={handleReturn}>BACK</button>
            </div>  
            <h1 className={styles.title}>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>
                <h2 className={styles.subtitle}>ROMPECABEZAS DE TECNOLOGÍAS</h2>  
                <div>
                    <img  className={styles.imagen} src="https://i.ibb.co/s1j4hwQ/PROYECTO1-FIGMA.png"/>
                </div>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Figma es limitante en versión gratuita, por ello no se comparte link de prototipos.
                    </span>
                </div>        
            </div> 
        </div>
    )
};

export default FigmaXDPage;