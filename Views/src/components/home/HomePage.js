"use strict";
import React from 'react';
import {Link} from 'react-router';
import Login from './../login/Login';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Todo</h1>
                        <p>Add your tasks and update</p>
                    </div>
                    <div className="col-md-5">
                        <h3>Username</h3>
                        <Login />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;