import React from 'react';
import logo from '../../img/logo.jpg';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img flogo">
                        <img src={logo} alt="logo" />
                        <p>&copy; 2023. All right reserved. design by Hong</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;