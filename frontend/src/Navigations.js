import React from 'react';
import { NavLink } from 'react-router-dom';
import cookie from 'js-cookie';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    // 이미 로그인한 사용자에게 표시할 컴포넌트 작성
    // '반갑습니다' 드롭 다운 버튼과 로그아웃 버튼 출력
    buildLoggedInMenu() {
        return (
            <div className="navbar-brand order-1 text-white my-auto">
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Welcome {this.props.user.name}
                    </button>
                    <div className="dropdown-menu">
                    <button className="btn dropdown-item" onClick={this.handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }

    handleSignOut(e) {
        e.preventDefault();
        const user = cookie.getJSON("user");
        if(user===undefined){
            console.log("Can not sign out as no user cookie found...");
            return;
        }
        console.log("Sign out: " + user);
        fetch('/user/'+user.ID+'/signout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        this.props.handleSignedOut();
        console.log("Handle sign out");
    }

    render() {
        // 메인 페이지 이동
        // 로그인하지 않은 사용자에게 표시하는 Navigation 컴포넌트
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                    <div className="container">
                        {
                            // 로그인 버튼을 클릭하면 props의 ShowModalWindows()를 호출한다. 이 함수는 로그인 모달 화면을 출력한다.
                            this.props.user.loggedin ? this.buildLoggedInMenu() : <button type="button" className="navbar-brand order-1 btn btn-success" onClick={() => { this.props.showModalWindow();console.log('show called'); }}>Sign in</button>
                        }
                        <div className="navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                
                                {/*
                                <NavLink className="nav-item nav-link" to="/">Board</NavLink>
                                로그인한 사용자에게 표시할 탐색 메뉴*/} 
                                {/* 나의 게시글 페이지로 이동하는 링크 추가*/}                                 
                                {this.props.user.loggedin ? <NavLink className="nav-item nav-link" to="/myboards">My Boards</NavLink> : null}
                                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}