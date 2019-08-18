import { render } from 'react-dom';
import React, { Component } from 'react';
import SortableTable from 'react-sortable-table';
import DivRow from "./DivRow";

window.React = require('react');

class SortTable extends Component {
    constructor() {
        super()
        this.state = {
            data: [
            ]
        };
    }

    returnDivRow(values) {
        return values.map(value => <DivRow record={value} key = {value} />)
    }

    render() {
        const columns = [
            {
                header: 'GENE',
                key: 'gene',
                defaultSorting: 'ASC',
            },
            {
                header: 'NUCLEOTIDE CHANGE',
                key: 'nucleotideChange',
                render: (nucleotideChange) => { return this.returnDivRow(nucleotideChange )}
            },
            {
                header: 'PROTEIN CHANGE',
                key: 'proteinChange'
            },
            {
                header: 'ALIAS',
                key: 'alias',
                render: (alias) => { return this.returnDivRow(alias )}
            },
            {
                header: 'REGION',
                key: 'region',
                render: (region) => { return this.returnDivRow(region )}
            },{
                header: 'REPORTED CLASSIFICATION',
                key: 'reported',
                render: (reported) => { return this.returnDivRow(reported )}
            },
            {
                header: 'LAST EVALUATED',
                key: 'lastEvaluated',
                render: (lastEvaluated) => { return this.returnDivRow(lastEvaluated )}
            },
            {
                header: 'LAST UPDATED',
                key: 'lastUpdated',
                render: (lastUpdated) => { return this.returnDivRow(lastUpdated )}
            },
            {
                header: 'MORE INFO',
                key: 'nucleotideChange',
                render: (nucleotideChange) => { return <a target="_blank" href="http://www.google.com">ClinVar</a> }
            },
        ];

        const style = {
            backgroundColor: '#eee'
        };

        const iconStyle = {
            color: '#aaa',
            paddingLeft: '5px',
            paddingRight: '5px'
        };

        return (
            <SortableTable
                data={this.props.name}
                columns={columns}
                style={style}
                iconStyle={iconStyle} />
        );
    }
}

export default SortTable;