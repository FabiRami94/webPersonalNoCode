

import { useNavigate } from "react-router-dom";

const FigmaXDPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <button onClick={handleReturn}>BACK</button>
            <h1>Holaaaa Soy Figma/XD</h1>
        </>
    )
};

export default FigmaXDPage;