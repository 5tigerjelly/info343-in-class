import React from "react";

export default class Alert extends React.Component {
    render(){
        let className = 'alert alert-' + (this.props.type || "success");
        return(
            <div className={className}>
                {this.props.message}
            </div>
        );
    }
}