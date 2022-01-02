import React from 'react';

class Board extends React.Component {
    render() {
        // title 색을 지정할 수 있는 변수 추가. 내가 쓴글일 경우 빨간색
        const titleColor = (this.props.myboard) ? "text-danger" : "text-dark";
        return (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card mb-3">
                    <img className="card-img-top" src={this.props.img} alt={this.props.imgalt} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.productname}</h4>
                        Price: <strong className={priceColor}>{sellPrice}</strong>
                        <p className="card-text">{this.props.desc}</p>
                        {/* 
                        btn-success 클래스를 사용해 Buy 버튼을 초록색으로 변경 
                        Buy 버튼을 클릭하면 ShowContextModal()를 호출하고 모달 윈도우를 출력
                        */}
                        <a className="btn btn-success text-white" onClick={()=>{this.props.showBuyModal(this.props.ID,sellPrice)}}>Buy</a>
                    </div>
                </div>
            </div>
        );

    }

}