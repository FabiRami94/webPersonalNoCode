
import { useNavigate } from "react-router-dom";
import styles from './IllustratorPage.module.css';

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
        </>
    )
};

export default IllustratorPage;