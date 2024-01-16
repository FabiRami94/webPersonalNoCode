
import { useNavigate } from "react-router-dom";
import styles from './IllustratorPage.module.css';
import Icons from "../../components/Icons/Icons.jsx";
import ImagesIllustrator from "../../components/Images/ImagesIllustrator/ImagesIllustrator.jsx";

const IllustratorPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        
        <>  
            <div className={styles.centerContent}>
                <button onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/n6TGF9n/Logo-Illustrator.png" alt="Logo Illustrator" />
                <button onClick={handleReturn}>BACK</button>
            </div> 
            <h1>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>
                <h2>ICONOS</h2> 
                <Icons></Icons>
            </div>
            {/* <div className={styles.containerMaterial}>  
                <h2 style={{color: 'white'}}>WORK IN PROCESS...</h2>    
            </div>  */}
            <div className={styles.containerMaterial}>
                <h2>ROMPECABEZAS DE TECNOLOGÍAS</h2>  
                <ImagesIllustrator imagePosition = {[4]}></ImagesIllustrator>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se buscaba darle expresión a la unión de diferentes tecnologías en un rompecabezas.
                    </span>
                </div>        
            </div>
            <div className={styles.containerMaterial}>
                <h2>PROGRAMAS NO CODE</h2>  
                <ImagesIllustrator imagePosition = {[0,1,2,3]}></ImagesIllustrator>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se realizó los Isotipos de los programas para poder tenerlos vectorizarlos y no perder calidad.
                    </span>
                </div>        
            </div>
        </>
    )
};

export default IllustratorPage;