/*
 * src/components/Toggle/React.Toggle.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.input.checkbox;

var Arrays = {
    text: ['textLeft']
};

var Toggle = React.createClass({

    displayName: 'Toggle',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onChange: React.PropTypes.func // (eventKey,event)
    },

    propTypes: Object.assign({}, Attributes, {

        // Global attribute
        id: React.PropTypes.string.isRequired,

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        text: React.PropTypes.oneOf(Arrays.text),
        label: React.PropTypes.shape({
            on: React.PropTypes.string,
            off: React.PropTypes.string
        })
    }),

    getDefaultProps: function() {
        return {
            checked: false,
            disabled: false,
            required: false,
            value: 'on'
        };
    },

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this, this.props)
                },
                getDescription(this, this.props),
                getInput(this, this.props),
                getField(this, this.props)
            )
        );
    },

    handleChange: function(event) {
        event.stopPropagation();
        this.handle(this, 'onChange', [this.props.eventKey, event], true);
    }

});

function getClassName(that, props) {
    var includes = that.includes(props, Arrays, 'ms-Toggle--');
    return that.className(props.className, 'ms-Toggle', includes, {
        'is-disabled': props.disabled
    });
}

function getDescription(that, props) {
    return props.children === undefined ? undefined : React.DOM.span(
        {
            className: that.className('ms-Toggle-description', {
                'is-disabled': props.disabled,
                'is-required': props.required
            })
        },
        props.children
    );
}

function getField(that, props) {
    return React.DOM.label(
        {
            className: 'ms-Toggle-field',
            htmlFor: that.props.id
        },
        React.DOM.span(
            {
                className: 'ms-Label ms-Label--off'
            },
            props.label === undefined ? 'Off' : props.label.off
        ),
        React.DOM.span(
            {
                className: 'ms-Label ms-Label--on'
            },
            props.label === undefined ? 'On' : props.label.on
        )
    );
}

function getInput(that, props) {
    return React.DOM.input(
        that.getProps(Attributes, props, {
            onChange: that.handleChange,
            className: 'ms-Toggle-input',
            type: 'checkbox'
        })
    );
}

module.exports = Toggle;
