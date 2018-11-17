import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
                <header>
                    <div className="wrapper">

                        <div className="logo">Dopos</div>

                        <div className="nav">
                            <nav className='nav-desc'>
                                <ul className='navigation'>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">PRODUCTS</a></li>
                                    <li><a href="#">AWARDS</a></li>
                                    <li><a href="#">CONTACT US</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="log">
                            <div className="log-in">LOG IN </div>
                            <div className="log-pic"><i className="far fa-user-circle"></i>
                            </div>
                        </div>
                    </div>
            </header>
                );
        }
            
}