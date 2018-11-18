import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">

                    <div className="logo">Dopos</div>

                    <div className="nav">
                        <nav className='nav-desc'>
                            <a href="#">HOME</a>
                            <a href="#">PRODUCTS</a>
                            <a href="#">AWARDS</a>
                            <a href="#">CONTACT US</a>
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