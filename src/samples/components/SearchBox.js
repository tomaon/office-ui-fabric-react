/*
 * src/samples/components/SearchBox.js
 */

'use strict';

var React = require('react');

var Components = {
    searchBox: require('../../components/SearchBox/React.SearchBox')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false,
            value: ''
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
                        'SearchBox'
                    ),
                    React.createElement(
                        Components.searchBox,
                        {
                            onChange: this.handleChange,
                            disabled: this.state.disabled,
                            value: this.state.value,
                            onReset: this.handleReset,
                            eventKey: 'sb',
                            label: 'Search'
                        }
                    )
                )
            )
        );
    },

    handleChange: function(eventKey, event) {
        var value = event.target.value;
        console.log('handleChange: ' + eventKey + '=' + value);
        this.setState({value: value});
    },

    handleReset: function(eventKey) {
        var value = '';
        console.log('handleReset: ' + eventKey + '=' + value);
        this.setState({value: value});
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
