
import Footer from "../../components/Footer/Footer.jsx";
import ProgramCards from "../../components/ProgramCards/ProgramCards.jsx";
import ToggleButton from "../../components/ToggleButton/ToggleButton.jsx";
import style from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <>
            <div className={style.divGeneral}>
                <div className={style.divNavBar}>
                    {/* Logo Negro <img src="https://i.ibb.co/KDtncV2/Logo-propio.png"/> */}
                    <img src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png"/>
                    <h2>PORTAFOLIO NO CODE</h2>           
                    <ToggleButton></ToggleButton>
                </div>
                <ProgramCards></ProgramCards>
                <Footer></Footer>
            </div>
        </>
    )
};

export default LandingPage;