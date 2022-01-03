import React from 'react';

class Board extends React.Component {
    render() {
        // title 색을 지정할 수 있는 변수 추가. 내가 쓴글일 경우 빨간색
        const titleColor = (this.props.myboard) ? "text-danger" : "text-dark";
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card mb-3">
                    <div className="board-board">
                        <h4 className="board-id">{this.props.id}</h4>
                        <h4 className="board-title">{titleColor}</h4>
                        <p className="board-body">{this.props.desc}</p>
                        {/* 
                        Price: <strong className={priceColor}>{sellPrice}</strong>
                        btn-success 클래스를 사용해 Buy 버튼을 초록색으로 변경 
                        Buy 버튼을 클릭하면 ShowCommentModal()를 호출하고 모달 윈도우를 출력
                        */}
                        <a className="btn btn-success text-white" onClick={()=>{this.props.ShowCommentModal(this.props.ID)}}>Comment</a>
                    </div>
                </div>
            </div>
        );
    }
}

// 게시판 전체를 나타내는 컴포넌트
export default class BoardContainer extends React.Component {
    constructor(props) {
        // 부모 컴포넌트로 props 전달
        super(props);
        // 컴포넌트의 state 객체 초기화
        this.state = {
            cards: []
        };
    }

    // 외부 소스에서 전달 받은 데이터로 초기화하는 로직은 아래에 넣는게 좋다.
    // 데이터를 읽고 state 객체에 저장
    componentDidMount() {
        // fetch() 메서드를 호출한 후 this.props.location에 저장된 값이 나타내는 파일에서 데이터를 읽는다.
        // 메인 페이지면 location → board.json, 나의 페이지 → myboard.json
        // 읽은 데이터는 CardContainer 컴포넌트의 state객체에 저장한다.
        fetch(this.props.location)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    boards: result
                });
            });
    }

    render() {
        // 컴포넌트 state 객체에 저장된 게시글을 Board 컴포넌트의 속성으로 전달한다
        const boards = this.state.boards;
        let items = boards.map(
            board => <Board  key={board.ID} {...board} myboard={this.props.myboard} ShowCommentModal={this.props.ShowCommentModal} />
        );
        return (
            <div>
                <div className="mt-5 row">
                    {items}
                </div>
            </div>
        );
    }

}