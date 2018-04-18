import React from 'react';
import './ColorButton.css';

export default props => (
  <button className={'color-button ' + props.cName} onClick={props.onClick}>
    {props.children}
  </button>
);
