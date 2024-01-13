
import { useNavigate } from "react-router-dom";
import styles from './PhotoshopPage.module.css';

const PhotoshopPage = () => {

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
            <h2>WORK</h2>  
            
            <div >
                <h2>PROGRAMAS NO CODE</h2>  
                      
            </div>
        </>
    )
};

export default PhotoshopPage;