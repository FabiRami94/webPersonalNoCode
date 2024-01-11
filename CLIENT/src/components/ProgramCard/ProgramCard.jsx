
import { NavLink } from "react-router-dom";
import style from "./ProgramCard.module.css"

const ProgramCard = ({imageUrl, link}) => {

    const imageName = imageUrl.split('/').pop();

    let colorClass = '';
    if (imageName.includes('Photoshop')) {
        colorClass = style.sombraAzul;
    } else if (imageName.includes('Illustrator')) {
        colorClass = style.sombraRoja;
    } else if (imageName.includes('Figma')) {
        colorClass = style.sombraVarios;
    }
    const containerClass = `${style.containerS} ${colorClass}`;


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