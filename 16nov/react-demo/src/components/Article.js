import React, {Component} from 'react';

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
                  <div className="article-graphic">
    
                  </div>
                </div>  
                <div className="article-web-parent">
                  <div className="article-web">
    
                  </div>
                </div>  
    
                <div className="article-post">
                    <div className="line"></div>
                    <div className="article-post-container">
                      Suspendisse eget est at bendum dui elit, aliquam vel lacus a felis.
                    </div>
                    <div className="article-post-button">
                      LEARN MORE
                    </div>
                </div>
    
                <div className="article-orange-parent">
                  <div className="article-orange">
    
                  </div>
                </div>  
    
                <div className="article-social-parent">
                  <div className="article-social">
    
                  </div>
                </div>  
    
            </div>
        </article>
        )
    }
}