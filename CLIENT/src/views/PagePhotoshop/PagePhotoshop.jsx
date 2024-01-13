
import { useNavigate } from "react-router-dom";
import styles from './PagePhotoshop.module.css';
import ImagesPhotoshop from "../../components/Images/ImagesPhotoshop/ImagesPhotoshop";

const PagePhotoshop = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <div className={styles.centerContent}>
                <button onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/2s8560B/Logo-Photoshop.png" alt="Logo Illustrator" />
                <button onClick={handleReturn}>BACK</button>
            </div>  
            <h1>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>  
                <h2 style={{color: 'white'}}>WORK IN PROCESS...</h2> 
            </div> 
            <div className={styles.containerMaterial}>
                <h2>PROGRAMAS NO CODE</h2>  
                <ImagesPhotoshop imagePosition = {[0,1,2,3]}></ImagesPhotoshop>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se busca mostrar una conexión llamativa entre el Isotipos con su interface respectivo.
                    </span>
                </div>      
            </div>
        </>
    )
};

export default PagePhotoshop;