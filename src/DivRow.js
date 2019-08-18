import React, { Component } from 'react';
import './App.css';


class DivRow extends Component {
    render() {
        return (
            <div id={this.props.record}>{this.props.record}</div>
        );
    }



}

export default DivRow;