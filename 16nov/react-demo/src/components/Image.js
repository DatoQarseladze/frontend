import React, {Component} from 'react';

const Image = (props) =>{
    const styles = {
        backgroundImage: `url(${props.src})`
    }
    return(

        <div id={props.id}  className = {props.class} style={styles}>
        
        </div>
    )
}


export default Image;