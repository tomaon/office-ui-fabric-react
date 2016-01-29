/*
 * src/samples/components/Dropdown.js
 */

'use strict';

var React = require('react');

var Components = {
    dropdown: require('../../components/Dropdown/React.Dropdown')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: false,
            selected: -1     // index = item.(ref|eventKey)
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
                        'Dropdown'
                    ),
                    React.createElement(
                        Components.dropdown,
                        {
                            tabIndex: 0,
                            onSelect: this.handleSelect,
                            eventKey: 'dd',
                            disabled: this.state.disabled,
                            selected: this.state.selected
                        },
                        React.createElement(
                            Components.dropdown.Item,
                            null,
                            'Choose a sound...'
                        ),
                        React.createElement(
                            Components.dropdown.Item,
                            null,
                            'Dog barking'
                        ),
                        React.createElement(
                            Components.dropdown.Item,
                            {
                                disabled: true
                            },
                            'Wind blowing'
                        ),
                        React.createElement(
                            Components.dropdown.Item,
                            null,
                            'Duck quacking'
                        ),
                        React.createElement(
                            Components.dropdown.Item,
                            null,
                            'Cow mooing'
                        )
                    )
                )
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        console.log('handleSelect: ' + eventKey +
                    ',' + selected + '=' + event.target.textContent);
        this.setState({selected: selected});
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});
