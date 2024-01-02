
import ProgramCard from "../ProgramCard/ProgramCard.jsx";

const ProgramCards = () => {

    const noCodeList = [
        'https://i.ibb.co/Np7WgFj/Imagen-Figma.png',
        'https://i.ibb.co/dK0gTJn/Imagen-Word-Press.png',
        'https://i.ibb.co/m0XpGkC/Imagen-Photoshop.png',
        'https://i.ibb.co/TLtJgXr/Imagen-Illustrator.png'
    ]

    return(
        <> 
            {
                noCodeList.map((noCode, index) => (
                    <ProgramCard key={index} imageUrl={noCode}></ProgramCard> 
                ))
            }
        </>
    )
};

export default ProgramCards;