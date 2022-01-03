import React from 'react';


export default function About(props) {
    return (
        <div className="row mt-5">
            <div className="col-12 order-lg-1">
                <h3 className="mb-4">Golang CRUD Board</h3>
                <p>로그인과 게시판 기능의 웹 페이지</p>
                <p>로그인 : email, name 회원 가입 기능 구현, 이후 Oauth2 방식 적용 </p>
                <p>게시판 : 기본 CRUD 기능 구현  </p>
            </div>
        </div>);
}