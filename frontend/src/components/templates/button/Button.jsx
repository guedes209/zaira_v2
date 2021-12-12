import React from 'react';
import './Button.css';

export default props => {
    return (
        <div id="botao" className={props.col}>
            <label htmlFor=""></label>
            <button className={props.classes} onClick={props.onClick}>{props.texto}</button>
        </div>
    )
}