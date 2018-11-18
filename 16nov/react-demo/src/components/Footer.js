import React, { Component } from 'react';



export default class Footer extends Component {
    render() {
        return (


            <footer>
                <div className="divide-line">
                </div>
                <div class="footer-wrapper">
                    <div class="logo">Dopos</div>
                    <div class="navigation">
                        <nav class='nav-desc'>
                            <a href="#">HOME</a>
                            <a href="#">PRODUCTS</a>
                            <a href="#">AWARDS</a>
                            <a href="#">CONTACT US</a>
                        </nav>
                    </div>
                    <div class="footer-icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-vimeo-v"></i>
                    </div>
                </div>
            </footer>
        )
    }
}