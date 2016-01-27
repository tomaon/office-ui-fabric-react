/*
 * src/samples/components/TextField.js
 */

'use strict';

var React = require('react');

var Components = {
    textField: require('../../components/TextField/React.TextField')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false,
            value: {
                tf11: '',
                tf21: '',
                tf31: '',
                tf32: '',
                tf41: ''
            }
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
                        'TextField'
                    ),
                    React.createElement(
                        Components.textField,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            required: !this.state.disabled,
                            value: this.state.value.tf11,
                            eventKey: 'tf11',
                            label: 'Name'
                        },
                        'This should be your first and last name.'
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'TextField - Multiline'
                    ),
                    React.createElement(
                        Components.textField,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            value: this.state.value.tf21,
                            eventKey: 'tf21',
                            kind: 'multiline',
                            label: 'Enter street'
                        }
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'TextField - Placeholder'
                    ),
                    React.createElement(
                        Components.textField,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            value: this.state.value.tf31,
                            eventKey: 'tf31',
                            kind: 'placeholder',
                            label: 'Given name'
                        }
                    ),
                    React.createElement(
                        Components.textField,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            value: this.state.value.tf32,
                            eventKey: 'tf32',
                            label: 'Family name'
                        }
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'TextField - Underlined'
                    ),
                    React.createElement(
                        Components.textField,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            value: this.state.value.tf41,
                            eventKey: 'tf41',
                            kind: 'underlined',
                            label: 'Name:'
                        }
                    )
                )
            )
        );
    },

    handleChange: function(eventKey, event) {
        console.log('handleChange: ' + eventKey + '=' + event.target.value);
        var value = this.state.value;
        value[eventKey] = event.target.value;
        this.setState({value: value});
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
