
import ProgramCards from "../../components/ProgramCards/ProgramCards.jsx";
import ToggleButton from "../../components/ToggleButton/ToggleButton.jsx";
import style from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <>
            <div className={style.divGeneral}>
                <ToggleButton></ToggleButton>
                <ProgramCards></ProgramCards>
                <h1>Soy El Landing Page</h1>
            </div>
        </>
    )
};

export default LandingPage;