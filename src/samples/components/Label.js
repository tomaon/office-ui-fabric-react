/*
 * src/samples/components/Label.js
 */

'use strict';

var React = require('react');

var Components = {
    label: require('../../components/Label/React.Label')
};

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
                    React.DOM.h2(
                        null,
                        'Label'
                    ),
                    React.createElement(
                        Components.label,
                        {
                            disabled: this.state.disabled
                        },
                        'Name'
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Label - Required'
                    ),
                    React.createElement(
                        Components.label,
                        {
                            disabled: this.state.disabled,
                            required: true
                        },
                        'Name'
                    )
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
