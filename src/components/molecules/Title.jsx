import React from 'react';
import TitleText from '../atoms/TitleText.jsx';
import Header from "../../data/Title";

function Title() {
    return (
        <div>
            {Header.products.map(product => (
                <TitleText key={product.id} text={product.text} />
            ))}
        </div>
    );
}

export default Title;
