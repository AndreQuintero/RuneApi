import React, { FC } from 'react';
import Figure from '../../components/figure';

const ItemDetail: FC<{preco: string, img: string, alt: string, caption?: string}> = ({preco, img, alt, caption}) => {

    return(
        <div className="item-detail">
            <h1> {preco} Daily</h1>
            <div className="in-center">
                <Figure className='figure-size-item' img={img} alt={alt} caption= {caption}/> 
            </div>
        </div>  
)};

export default ItemDetail;