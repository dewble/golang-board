import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './About';
//import BoardContainer from './Board';
import { SignInModalWindow, CommentModalWindow } from './modalwindows';
import Nav from './Navigations';
//import Myboards from './Myboard';
import cookie from 'js-cookie';


class App extends React.Component{
  constructor(props) {
    super(props);
    const user = cookie.getJSON("user") || {loggedin:false};
    this.state = {
      user: user,
      showSignInModal: false,
      showBuyModal: false
    };
    // 새로 추가한 메서드를 사용하려면 App 컴포넌트의 생성자에서 바인드해야 한다.
    this.handleSignedIn = this.handleSignedIn.bind(this);
    this.handleSignedOut = this.handleSignedOut.bind(this);
    this.showSignInModalWindow = this.showSignInModalWindow.bind(this);
    this.showCommentModalWindow = this.showCommentModalWindow.bind(this);
    this.toggleSignInModalWindow = this.toggleSignInModalWindow.bind(this);
    this.toggleCommentModalWindow = this.toggleCommentModalWindow.bind(this);
  }

  handleSignedIn(user) {
    console.log("Sign in happening...");
    const state = this.state;
    const newState = Object.assign({},state,{user:user,showSignInModal:false});
    this.setState(newState);
  }

  // 사용자가 로그아웃 했을 경우 쿠키에 해당 정보를 반영하여 사용자가 없음을 나타낸다
  handleSignedOut(){
    console.log("Call app signed out...");
    const state = this.state;
    const newState = Object.assign({},state,{user:{loggedin:false}});
    this.setState(newState);
    cookie.set("user",{loggedin:false});
  }

 // 로그인과 댓글 작성 모달 윈도우를 표시하는 Show 메서드
 showSignInModalWindow(){
  const state = this.state;
  const newState = Object.assign({},state,{showSignInModal:true});
  this.setState(newState);
}

showCommentModalWindow(id,comment){
  const state = this.state;
  const newState = Object.assign({},state,{showCommentModal:true,boardid:id,comment:comment});
  this.setState(newState);
}

// 로그인과 댓글 모달 윈도우의 toggle 메서드는 모달 윈도우의 출력 상태를 전환한다. 
// 따라서 모달 윈도우의 출력 여부를 나타내는 state 객체의 불리언 값을 반전시키면 된다.
toggleSignInModalWindow() {
  const state = this.state;
  const newState = Object.assign({},state,{showSignInModal:!state.showSignInModal});
  this.setState(newState);
}

toggleCommentModalWindow(){
  const state = this.state;
  const newState = Object.assign({},state,{showCommentModal:!state.showCommentModal});
  this.setState(newState); 
}


render() {
  return (
    <div>
      <Router>
        <div>
          <Nav user={this.state.user} handleSignedOut={this.handleSignedOut} showModalWindow={this.showSignInModalWindow}/>
          <div className='container pt-4 mt-4'>
            <Route path="/about" component={About} />
          </div>
          {/* 각 모달 윈도우가 자신의 출력 여부를 알아야 하기 때문에 state.showSignInModal과 state.showBuyModal 플래그도 함께 넘긴다. */}
          <SignInModalWindow handleSignedIn={this.handleSignedIn} showModal={this.state.showSignInModal} toggle={this.toggleSignInModalWindow} />
          <CommentModalWindow showModal={this.state.showCommentModal} toggle={this.toggleCommentModalWindow} user={this.state.user.ID} boardid={this.state.boardid} comment={this.state.comment}/>
        </div>
      </Router>
    </div>
  );
}
}

export default App;
