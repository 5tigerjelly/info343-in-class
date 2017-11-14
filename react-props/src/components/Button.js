import React from 'react';

export default class Button extends React.Component {
    handeClick(){
        console.log("button was clicked");
        this.props.onClick();
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.handeClick()}>
                {this.props.caption}
            </button>
        );
    }
}