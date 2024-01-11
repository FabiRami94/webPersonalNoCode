
import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from './Footer.module.css'

 const Footer = () => {
    
    return (
        <div>
            <footer className={styles.divSecundario}>
                <p style={{color: "#f2f2f2"}} >Copyright © PortafolioNoCode Fabián Ramírez 2024 All rights reserved. V 1.0.0</p>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank' rel="noreferrer">         
                    <div className={styles.buttonMedia}><BsLinkedin size={20}/></div>
                </a>
                <a href="https://github.com/FabiRami94" target="_blank" rel="noreferrer">
                    <div className={styles.buttonMedia}><BsGithub size={20}/></div>
                </a>           
            </footer>  
        </div>
    )
}

export default Footer;