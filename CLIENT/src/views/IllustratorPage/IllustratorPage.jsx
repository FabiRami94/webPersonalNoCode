
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
        
        <div>  
            <div>
                <button className={styles.principalButton} onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/n6TGF9n/Logo-Illustrator.png" alt="Logo Illustrator" />
            </div> 
            <h1 className={styles.title}>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>
                <h2 className={styles.subtitle}>ICONOS</h2> 
                <Icons></Icons>
            </div>
            <div className={styles.containerMaterial}>
                <h2 className={styles.subtitle}>ROMPECABEZAS DE TECNOLOGÍAS</h2>  
                <div>
                    <img src="https://i.ibb.co/TLZ5C3L/Rompecabezas.png"/>
                </div>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se buscaba darle expresión a la unión de diferentes nuevas tecnologías en un rompecabezas.
                    </span>
                </div>        
            </div>
            <div className={styles.containerMaterial}>
                <h2 className={styles.subtitle}>PROGRAMAS NO CODE</h2>  
                <ImagesIllustrator imagePosition = {[0,1,2,3]}></ImagesIllustrator>
                <div className={styles.divNotes}>  
                    <img className={styles.notesImage} src="https://i.ibb.co/p2T0FFC/Recurso-2.png" />
                    <span>
                        Se realizó los Isotipos de los programas para poder tenerlos vectorizarlos y no perder calidad.
                    </span>
                </div>        
            </div>
        </div>
    )
};

export default IllustratorPage;