
import { NavLink } from "react-router-dom";
import style from "./ProgramCard.module.css"

const ProgramCard = ({imageUrl, link}) => {

    const imageName = imageUrl.split('/').pop();
    const containerClass = `${style.containerS} ${imageName.includes('Photoshop') ? `${style.sombraAzul}` : null}`;


    return(
        <>
            <NavLink to={`${link}`}>
                <div className={style.containerP}>
                    <div className={containerClass} style={{backgroundImage: `url(${imageUrl})`}}>              
                    </div>
                </div>
            </NavLink>
        </>
    )
};

export default ProgramCard;