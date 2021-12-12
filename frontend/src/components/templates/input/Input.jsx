import React from 'react';

export default props => {
    return (
        <div className={props.col}>
            <label className="text-left">{props.label}</label>
            <input value={props.value} onChange={props.onChange} type={props.type} className='form-control' placeholder={props.placeholder}/>
        </div>
    )
}