
import { useNavigate } from "react-router-dom";

const PhotoshopPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <button onClick={handleReturn}>BACK</button>
            <h1>Holaaaa Soy Photoshop</h1>
        </>
    )
};

export default PhotoshopPage;