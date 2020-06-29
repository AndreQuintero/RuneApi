import React, { FC } from 'react';
import MenuModel from './menu.model';
import { Link } from 'react-router-dom';
import Figure from '../../components/figure';
import styles from '../../css/home.module.css'

const Menu: FC<MenuModel> = ({link, image, alt, caption}) => (
   
    <Link className={`in-center ${styles.home} col-xs-12 col-md-6`} to={link}>
        <Figure className='figure-size' img ={ image } alt= { alt } caption= {caption}/>
    </Link>
  
);

export default Menu;