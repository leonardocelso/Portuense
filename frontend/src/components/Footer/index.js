import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

const Footer = (props) => {
    return (
        <footer>
            <div className="grid-footer">
                <div className="logo">
                    <p>Portuense - Desde 1921</p>
                </div>

                <div className="text">
                    <p>Desenvolvido por Maktub Tech</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;