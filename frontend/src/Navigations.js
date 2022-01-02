import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        // 메인 페이지 이동
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bgsuccess fixed-top">
                    <div className="container">
                        <button type="button" className="navbar-brand order-1 btn btn-success" onClick={()=> {this.props.showModalWindow();}}>Sign in</button>
                        <div className="navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-time nav-link" to="/">Board</NavLink>
                                <NavLink className="nav-time nav-link" to="/myboard">My Board</NavLink>
                                <NavLink className="nav-time nav-link" to="/about">About</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}