import React, { Component } from 'react';
import './App.css';
import AutoComplete from "./AutoComplete";
import settings from "./settings";

class Driver extends Component {

    componentDidMount() {
        fetch(settings.mainUrl+"/amIWorking")
    }

    render() {
        return (
            <div className="App">
                <h1>Gene Search Database</h1>
                <div className="autosuggest">Select a Gene: <AutoComplete /></div>
                <div id="table-goes-here"></div>
            </div>
        );
    }



}

export default Driver;