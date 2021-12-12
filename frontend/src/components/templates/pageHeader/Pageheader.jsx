import React from 'react';
import './pageHeader.css';

export default props => {
  return (
    <header>
        <h1>{props.name} <small className="text-muted">{props.small}</small></h1>
    </header>
  )
}