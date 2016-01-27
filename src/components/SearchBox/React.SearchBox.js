/*
 * src/components/SearchBox/React.SearchBox.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon')
};

var Attributes = Components.base.Attributes.input.search;

var SearchBox = React.createClass({

    displayName: 'SearchBox',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onReset: React.PropTypes.func,  // (eventKey,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        label: React.PropTypes.string
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            value: ''
        };
    },

    getInitialState: function() {
        return {
            active: false,
            hovering: false
        };
    },

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this, this.props, this.state),
                    onMouseOut: this.handleMouseOut,
                    onMouseOver: this.handleMouseOver
                },
                getField(this, this.props, this.state),
                getLabel(this, this.props, this.state),
                getCloseButton(this)
            )
        );
    },

    handleFocus: function(event) {
        event.stopPropagation();
        this.setState({active: true});
    },

    handleBlur: function(event) {
        event.stopPropagation();
        this.setState({active: false});
    },

    handleChange: function(event) {
        event.stopPropagation();
        this.handle(this, 'onChange', [this.props.eventKey, event]);
    },

    handleInput: function(event) {
        event.stopPropagation();
        this.handle(this, 'onInput', [this.props.eventKey, event]);
    },

    handleReset: function(event) {
        event.stopPropagation();
        this.handle(this, 'onReset', [this.props.eventKey, event]);
    },

    handleMouseOut: function(event) {
        event.stopPropagation();
        this.setState({hovering: false});
    },

    handleMouseOver: function(event) {
        event.stopPropagation();
        this.setState({hovering: true});
    }

});

function getClassName(that, props, state) {
    return that.className(props.className, 'ms-SearchBox', {
        'is-disabled': props.disabled,
        'is-active': state.active
    });
}

function getCloseButton(that) {
    return React.DOM.button(
        {
            onClick: that.handleReset,
            className: 'ms-SearchBox-closeButton',
            type: 'button'
        },
        React.createElement(
            Components.icon,
            {
                kind: 'x'
            }
        )
    );
}

function getField(that, props, state) {
    return React.DOM.input(
        Object.assign(
            that.getProps(Attributes, props, {
                onChange: that.handleChange,
                onInput: that.handleInput,
                className: that.className('ms-SearchBox-field', {
                    hovering: state.hovering
                }),
                type: 'search'
            }),
            {
                onFocus: that.handleFocus,
                onBlur: that.handleBlur
            }
        )
    );
}

function getLabel(that, props, state) {
    var display = !state.active && props.value === '';
    return React.DOM.label(
        {
            className: 'ms-SearchBox-label',
            style: {
                display: display ? 'block' : 'none'
            }
        },
        React.createElement(
            Components.icon,
            {
                className: 'ms-SearchBox-icon',
                kind: 'search'
            }
        ),
        props.label
    );
}

module.exports = SearchBox;
