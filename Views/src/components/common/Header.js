import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Todo</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><IndexLink to="/" >Home</IndexLink> </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;