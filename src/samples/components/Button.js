/*
 * src/samples/components/Button.js
 */

'use strict';

var React = require('react');

var Components = {
    button: require('../../components/Button/React.Button')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false
        };
    },

    render: function() {
        var props = {
            onClick: this.handleSelect,
            disabled: this.state.disabled,
            type: 'button',
            label: 'Create account',
            icon: 'plus'
        };
        var description = 'Description of the action this button takes';
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
                        'Button and Button Primary'
                    ),
                    React.DOM.p(
                        null,
                        React.createElement(
                            Components.button,
                            Object.assign({}, props, {
                                eventKey: 'b11'
                            }),
                            description
                        )
                    ),
                    React.DOM.p(
                        null,
                        React.createElement(
                            Components.button,
                            Object.assign({}, props, {
                                eventKey: 'b12',
                                kind: 'primary'
                            }),
                            description
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Command and Compound Buttons'
                    ),
                    React.DOM.p(
                        null,
                        React.createElement(
                            Components.button,
                            Object.assign({}, props, {
                                eventKey: 'b21',
                                kind: 'command'
                            }),
                            description
                        )
                    ),
                    React.DOM.p(
                        null,
                        React.createElement(
                            Components.button,
                            Object.assign({}, props, {
                                eventKey: 'b22',
                                kind: 'compound'
                            }),
                            description
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Hero Button'
                    ),
                    React.DOM.p(
                        null,
                        React.createElement(
                            Components.button,
                            Object.assign({}, props, {
                                eventKey: 'b31',
                                kind: 'hero'
                            }),
                            description
                        )
                    )
                )
            )
        );
    },

    handleSelect: function(eventKey, event) {
        console.log('handleSelect: ' + eventKey + '=' + event.target.value);
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
