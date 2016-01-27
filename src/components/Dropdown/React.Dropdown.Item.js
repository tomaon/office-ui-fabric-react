/*
 * src/components/Dropdown/React.Dropdown.Item.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var DropdownItem = React.createClass({

    displayName: 'DropdownItem',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,event)
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onClick: React.PropTypes.func, // (eventKey,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        disabled: React.PropTypes.bool,
        selected: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            selected: false
        };
    },

    render: function() {
        return (
            React.DOM.li(
                Object.assign(
                    this.getProps(Attributes, this.props, {
                        className: getClassName(this, this.props)
                    }),
                    {
                        onClick: this.handleClick
                    }
                ),
                this.props.children
            )
        );
    },

    handleClick: function(event) {
        event.stopPropagation();
        this.handle(this, 'onClick', [this.props.eventKey, event], true);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-Dropdown-item', {
        'is-disabled': props.disabled,
        'is-selected': props.selected
    });
}

module.exports = DropdownItem;
