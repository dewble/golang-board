import React from 'react';

function Myboard(props) {

    return(
        <table class="table">

        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
                <th>Comment</th>
                <th>Created</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="board-id">{this.props.id}</th>
                <th className="board-title">{this.props.title}</th>
                <th className="board-body">{this.props.desc}</th>
                <th>Comment</th>
                <th className="board-created">{this.props.created}</th>
            </tr>
        </tbody>
        </table>
    );
}

export default class MyboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myboards: []
        };
    }

    render() {
        return (
            <div className="row mt-5">
                {this.state.myboards.map(myboard => <Myboard key={myboard.ID} {...myboard} />)}
            </div>
        )
    }

}
