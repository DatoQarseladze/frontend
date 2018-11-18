import React, {Component} from 'react';

const Button = (props) => {
return(

    <div className={props.class}>
    {props.text}
    <i className={props.iconClass}></i>
    </div>
  
)
}

export default Button;