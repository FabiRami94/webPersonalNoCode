
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
            <h1>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>  
                <h2 style={{color: 'white'}}>WORK IN PROCESS...</h2> 
                {/* <ImagesIllustrator imagePosition = {[0,2]}></ImagesIllustrator>  */}
            </div> 
            <div className={styles.containerMaterial}>
                <h2>PROGRAMAS NO CODE</h2>  
                {/* <ImagesIllustrator imagePosition = {[0,1,2,3]}></ImagesIllustrator> */}
                <div style={{display: 'flex',flexDirection: 'row', justifyContent: 'center'}}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se realizó los Isotipos de los programas para poder tenerlos vectorizarlos y no perder calidad.
                    </span>
                </div>        
            </div>
        </>
    )
};

export default PhotoshopPage;