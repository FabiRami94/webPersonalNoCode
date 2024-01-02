
import { NavLink } from "react-router-dom";
import style from "./ProgramCard.module.css"

const ProgramCard = ({imageUrl}) => {
    return(
        <>
            <NavLink to={'/photoshop'}>
                <h1>{console.log(imageUrl)}</h1>
                <div className={style.container} style={{backgroundImage: `url(${imageUrl})`}}>              
                </div>
            </NavLink>
        </>
    )
};

export default ProgramCard;