import React from 'react';
import style from './DescripcionImg.module.css';

function DescripcionImg({ Link }) {
    return <img src={Link} alt="Product" className={style.image} />;
}

export default DescripcionImg;