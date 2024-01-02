

import { useNavigate } from "react-router-dom";

const IllustratorPage = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    return(
        <>
            <button onClick={handleReturn}>BACK</button>
            <h1>Holaaaa Soy Illustrator</h1>
        </>
    )
};

export default IllustratorPage;