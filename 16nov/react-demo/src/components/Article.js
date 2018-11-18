import React, {Component} from 'react';
import Image from './Image'
import Button from './Button'

export default class Article extends Component {
    render(){
        return(
            <article>
            <div className="article-container">
                <div className="article-title">
                  <h1>Design Solutions For Any Media.</h1>
                  <div className="article-studio">
                  S T U D I O
                  </div>
                </div>
                <div className="article-graphic-parent">
                  
                  <Image class={'article-graphic'} src={'/pictures/graphic.jpg'} />
    
                  
                </div>  
                <div className="article-web-parent">
              
                  <Image class={'article-web'} src={'/pictures/web.jpg'} />
                </div>  
    
                <div className="article-post">
                    <div className="line"></div>
                    <div className="article-post-container">
                      Suspendisse eget est at bendum dui elit, aliquam vel lacus a felis.
                    </div>
                    <Button class={'article-post-button'} text={'LEARN MORE'} />
                  
                </div>
    
                <div className="article-orange-parent">
                 <Image class={'article-orange'} src={'/pictures/orange.jpeg'} />
                </div>  
    
                <div className="article-social-parent">
                <Image class={'article-social'} src={'/pictures/social.jpg'} />

                </div>  
    
            </div>
        </article>
        )
    }
}