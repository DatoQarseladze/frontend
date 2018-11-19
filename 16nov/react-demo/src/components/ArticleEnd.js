import React, {Component} from 'react';
import Button from './Button'

export default class ArticleEnd extends Component{
    render(){
        return(
            <article>
            <div className="article-end-container">
              <div className="article-left">
                  <h2>Curabitur nisi nisi, vairus ac lectus sed, eleifend ultrices nibh nam sit amet eros mauris. Cras non ligula sed metus aliquet mollis nec sed tellus.</h2>
                   <Button class={'article-end-button'} text={'Case Study'} />
                   {/* <div className="article-end-button">
                     Case Study
                   </div> */}
              </div>
              <div className="article-right">
                <div className="article-category">
                   <div className="article-category-title">
                     CATEGORY
                   </div> 
                  <div className="article-design">
                    Design & Branding
                  </div>
                  
                  <div className="article-line"></div>
      
                </div>
                <div className="article-client">
                    <div className="article-client-title">
                        CLIENT
                    </div>
                    <div className="article-cusco">
                      Cusco Barista
                    </div>
                    <div className="article-line"></div>

                </div>
                
              </div>
            </div>
          </article>
        )
    }
}