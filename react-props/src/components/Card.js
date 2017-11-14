import React from 'react';

export default class Card extends React.Component {
    render() {
        let styles = {
            width: this.props.width
        }
        return (
            <div className="card" style={styles}>
                <img className="card-img-top" src={this.props.imgsrc} alt={this.props.imgalt} />
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.title}
                    </h4>
                    <div className="card-text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}