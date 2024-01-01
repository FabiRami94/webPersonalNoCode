
import { NavLink } from "react-router-dom";
import style from "./ProgramCard.module.css"

const ProgramCard = () => {
    return(
        <>
            <NavLink to={'/photoshop'}>
                <div className={style.container}>              
                </div>
            </NavLink>
        </>
    )
};

export default ProgramCard;