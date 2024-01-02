

import { useNavigate } from "react-router-dom";

const WordpressPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <button onClick={handleReturn}>BACK</button>
            <h1>Holaaaa Soy Wordpress</h1>
        </>
    )
};

export default WordpressPage;