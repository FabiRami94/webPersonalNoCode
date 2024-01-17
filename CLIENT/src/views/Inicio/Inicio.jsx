

import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import ProgramCards from "../../components/ProgramCards/ProgramCards.jsx";
import style from './Inicio.module.css';

const Inicio = () => {
    return (
        <div>     
            <div className={style.divNavBar}>
                <img src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png"/>
                <h1 className={style.title}>MI PORTAFOLIO NO CODE</h1> 
                {/* <ToggleButton></ToggleButton> */}          
            </div>
            <ProgramCards></ProgramCards>
            <Footer></Footer>       
        </div>
    )
};

export default Inicio;