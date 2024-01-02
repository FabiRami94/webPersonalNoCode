
import { NavLink } from "react-router-dom";
import style from "./ProgramCard.module.css"

const ProgramCard = ({imageUrl, link}) => {
    return(
        <>
            <NavLink to={`${link}`}>
                <h1>{console.log(imageUrl)}</h1>
                <div className={style.container} style={{backgroundImage: `url(${imageUrl})`}}>              
                </div>
            </NavLink>
        </>
    )
};

export default ProgramCard;