import React, { Component } from 'react';
import Image from './Image'
import Button from './Button'

export default class Main extends Component {
    render(){
        return(
            <main>
        <div className="main-container">
            <div className="main-title">
            Creative Design &amp; Advertising
            </div>
            <div className="main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi impedit omnis nobis a?
            </div>
            <Button class='main-button' text={'LEARN MORE'} iconClass={'fas fa-angle-right'} /> 
            {/* <div className="main-button">LEARN MORE <i className="fas fa-angle-right"></i></div> */}
            <div className="main-slider">
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
                        <li className="slider-dot"></li>
            </div>
        </div>  
      
        <Image class='main-picture' src={'/pictures/characters.jpg'} />
    </main>
        )
    }
}