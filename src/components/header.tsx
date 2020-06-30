import React from 'react';
import { Link } from "react-router-dom";
import Style from '../css/header.module.css';

export default () => (
   <header className={Style.header}>        
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Perfil</Link>
            </li>
            <li>
                <Link to="/grand-exchange">Mercado Geral</Link>
            </li>
        </ul>     
   </header>
)