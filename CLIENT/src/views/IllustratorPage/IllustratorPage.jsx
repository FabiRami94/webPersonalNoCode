
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
            <h2>ICONS</h2> 
            <Icons></Icons> 
            <h2>WORK</h2>  
            <ImagesIllustrator imagePosition = {[0,2]}></ImagesIllustrator> 
            <div >
                <h2>PROGRAMAS NO CODE</h2>  
                <ImagesIllustrator imagePosition = {[0,1,2,3]}></ImagesIllustrator>        
            </div>
        </>
    )
};

export default IllustratorPage;