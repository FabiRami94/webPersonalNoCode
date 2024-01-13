
import style from './Icons.module.css';
import iconsData from '../../assets/iconsData';

const Icons = () => {
    return(
        <div className={style.icons}>
            {iconsData.map(icon => (
                <img key={icon} src={icon}/>
            ))}
        </div>
    )
};

export default Icons;