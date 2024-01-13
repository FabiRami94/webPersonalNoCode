
import imagesIllustratorData from '../../../assets/imagesPhotoshopData';
import style from './ImagesPhotoshop.module.css';

const ImagesPhotoshop = ({imagePosition}) => {
    return (
        <div className={style.images}>
            {imagePosition.map(image => (
                <img key={imagePosition} src={imagesIllustratorData[image]} alt={`Imagen ${image}`}/>
            ))}
        </div>
    )
};

export default ImagesPhotoshop;