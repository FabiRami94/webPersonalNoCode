
import { useNavigate } from "react-router-dom";
import styles from './WordpressPage.module.css';

const WordpressPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <div className={styles.centerContent}>
                <button onClick={handleReturn}>BACK</button>
                <img className={styles.logo} src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" alt="Logo Blanco" />
                <img className={styles.logo} src="https://i.ibb.co/d4tNnsd/Logo-Word-Press.png" alt="Logo Illustrator" />
                <button onClick={handleReturn}>BACK</button>
            </div>  
            <h1>TRABAJO PROPIO</h1>
            <div className={styles.containerMaterial}>  
                <h2 style={{color: 'white'}}>WORK IN PROCESS...</h2> 
            </div>   
        </>
    )
};

export default WordpressPage;