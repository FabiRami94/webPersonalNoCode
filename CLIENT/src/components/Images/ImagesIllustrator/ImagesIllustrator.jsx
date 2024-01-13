
import imagesIllustratorData from '../../../assets/imagesIllustratorData';
import style from './ImagesIllustrator.module.css';


const ImagesIllustrator = ({imagePosition}) => {
    return (
        <div className={style.images}>
            {imagePosition.map(image => (
                <img key={image} src={imagesIllustratorData[image]} alt={`Imagen ${image}`}/>
            ))}
        </div>
    )
};

export default ImagesIllustrator;