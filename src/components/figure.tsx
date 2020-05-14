import React, { FC } from 'react';
import FigureModel from '../model/figure';

const Figure: FC<FigureModel> = ({img, alt = '', caption = '', className = ''}) => (
    <figure className={className}>
        <img src={img} alt={alt} />
        <figcaption>{caption}</figcaption>
    </figure>
);

export default Figure;