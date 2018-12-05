import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">

                    <div className="logo">Dopos</div>

                    <div className="nav">
                        <nav className='nav-desc'>
                            <a href="#"><Link to='/home'>Home</Link></a>
                            <a href="#"><Link to='/products'>Products</Link></a>
                            <a href="#"><Link to='/awards'>Awards</Link></a>
                            <a href="#"><Link to='/contactus'>Contact Us</Link></a>
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