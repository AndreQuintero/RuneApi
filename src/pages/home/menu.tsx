import React, { FC } from 'react';
import MenuModel from './menu.model';
import { Link } from 'react-router-dom';
import Figure from '../../components/figure';

const Menu: FC<MenuModel> = ({link, image, alt, caption}) => (
   
    <Link className='in-center home col-xs-12 col-md-6' to={link}>
        <Figure className='figure-size' img ={ image } alt= { alt } caption= {caption}/>
    </Link>
  
);

export default Menu;