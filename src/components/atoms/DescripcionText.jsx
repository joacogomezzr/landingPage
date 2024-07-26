import React from 'react';
import style from './DescripcionText.module.css';

function DescripcionText({ text }) {
    return <p className={style.pg_text}>{text}</p>;
}

export default DescripcionText;
