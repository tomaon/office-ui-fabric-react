/*
 * src/samples/components/Toggle.js
 */

'use strict';

var React = require('react');

var Components = {
    toggle: require('../../components/Toggle/React.Toggle')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false,
            checked: {
                t1: false,
                t2: false
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
                        'Toggle'
                    ),
                    React.createElement(
                        Components.toggle,
                        {
                            onChange: this.handleChange,
                            id: 'i1',
                            checked: this.state.checked.t1,
                            disabled: this.state.disabled,
                            required: !this.state.disabled,
                            eventKey: 't1'
                        },
                        'Let apps use my location'
                    ),
                    React.createElement(
                        Components.toggle,
                        {
                            onChange: this.handleChange,
                            id: 'i2',
                            checked: this.state.checked.t2,
                            disabled: this.state.disabled,
                            eventKey: 't2',
                            text: 'left'
                        },
                        'Let apps use my location'
                    )
                )
            )
        );
    },

    handleChange: function(eventKey, event) {
        console.log('handleChange: ' + eventKey + '=' + event.target.checked);
        var checked = this.state.checked;
        checked[eventKey] = event.target.checked;
        this.setState({checked: checked});
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
