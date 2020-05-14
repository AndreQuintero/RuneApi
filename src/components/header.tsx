import React from 'react';
import { Link } from "react-router-dom";
  

export default () => (
   <header className="header">        
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