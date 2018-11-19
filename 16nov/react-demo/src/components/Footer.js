import React, { Component } from 'react';
import Icon from './Icon';


export default class Footer extends Component {
    render() {
        return (


            <footer>
                <div className="divide-line">
                </div>
                <div class="footer-wrapper">
                    <div class="logo">Dopos</div>
                    <div class="navigation-footer">
                        <nav class='nav-desc-footer'>
                            <a href="#">HOME</a>
                            <a href="#">PRODUCTS</a>
                            <a href="#">AWARDS</a>
                            <a href="#">CONTACT US</a>
                        </nav>
                    </div>
                    <div class="footer-icons">
                        <Icon class={'fab fa-facebook-f'} />
                        <Icon class={'fab fa-twitter'} />
                        <Icon class={'fab fa-instagram'} />
                        <Icon class={'fab fa-vimeo-v'} />
                    </div>
                </div>
            </footer>
        )
    }
}