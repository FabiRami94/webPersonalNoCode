
import ProgramCard from "../ProgramCard/ProgramCard.jsx";

const ProgramCards = () => {

    const noCodeList = [
        {
            url: 'https://i.ibb.co/Np7WgFj/Imagen-Figma.png',
            link: '/figmaxd'
        },
        {
            url: 'https://i.ibb.co/dK0gTJn/Imagen-Word-Press.png',
            link: '/wordpress'
        },
        {
            url: 'https://i.ibb.co/m0XpGkC/Imagen-Photoshop.png',
            link: '/photoshop'
        },
        {
            url: 'https://i.ibb.co/TLtJgXr/Imagen-Illustrator.png',
            link: '/illustrator'
        }
    ] //Enviar a Assets

    return(
        <> 
            {
                noCodeList.map((noCode, index) => (
                    <ProgramCard key={index} imageUrl={noCode.url} link={noCode.link}></ProgramCard> 
                ))
            }
        </>
    )
};

export default ProgramCards;