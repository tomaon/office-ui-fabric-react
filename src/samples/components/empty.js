/*
 * src/samples/components/empty.js
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false
        };
    },

    render: function() {
        return (
            React.DOM.article(
                null,
                React.DOM.a(
                    {
                        href: '#',
                        onClick: this.handleClick
                    },
                    this.state.disabled ? 'enable' : 'disable'
                ),
                React.DOM.section(
                    null,
                    ''
                )
            )
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
