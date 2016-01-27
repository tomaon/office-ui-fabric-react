/*
 * src/samples/components/Table.js
 */

'use strict';

var React = require('react');

var Components = {
    table: require('../../components/Table/React.Table')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            selected: -1 // index = row.eventKey
        };
    },

    render: function() {
        var row = React.createElement(
            Components.table.Row,
            null,
            React.DOM.span({className: 'ms-Table-rowCheck'}),
            React.DOM.span({className: 'ms-Table-cell'}, 'File name'),
            React.DOM.span({className: 'ms-Table-cell'}, 'Location'),
            React.DOM.span({className: 'ms-Table-cell'}, 'Modified'),
            React.DOM.span({className: 'ms-Table-cell'}, 'Type')
        );
        return (
            React.DOM.article(
                null,
                React.DOM.span(
                    {
                    },
                    '-'
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Table'
                    ),
                    React.createElement(
                        Components.table,
                        {
                            onSelect: this.handleSelect,
                            eventKey: 't',
                            selected: this.state.selected
                        },
                        React.cloneElement(row, { // first-child -> header
                        }),
                        React.cloneElement(row, {
                        }),
                        React.cloneElement(row, {
                        }),
                        React.cloneElement(row, {
                        }),
                        React.cloneElement(row, {
                        }),
                        React.cloneElement(row, {
                        })
                    )
                )
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        console.log('handleSelect: ' + eventKey +
                    ',' + selected + '=' + event.target.textContent);
        this.setState({selected: selected});
    }

});
