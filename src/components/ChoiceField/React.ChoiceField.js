/*
 * src/components/ChoiceField/React.ChoiceField.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    group: require('./React.ChoiceField.Group')
};

var Attributes = {
    checkbox: Components.base.Attributes.input.checkbox,
    radio: Components.base.Attributes.input.radio
};

var Arrays = {
    type: ['radio', 'checkbox']
};

var ChoiceField = React.createClass({

    displayName: 'ChoiceField',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onChange: React.PropTypes.func, // (eventKey,event)

        // Content attribute
        type: React.PropTypes.oneOf(Arrays.type)
    },

    propTypes: Object.assign({}, Attributes.checkbox, Attributes.radio, {

        // Global attribute
        id: React.PropTypes.string.isRequired,

        // Content attribute
        type: React.PropTypes.oneOf(Arrays.type),

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        label: React.PropTypes.string
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
                    className: getClassName(this)
                },
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

function getClassName(that) {
    return that.className(that.props.className, 'ms-ChoiceField');
}

function getField(that, props) {
    return props.label === undefined ? undefined : React.DOM.label(
        {
            className: 'ms-ChoiceField-field',
            htmlFor: props.id
        },
        React.DOM.span(
            {
                className: 'ms-Label'
            },
            props.label
        )
    );
}

function getInput(that, props) {
    var type = that.valid(that.props.type, that.context.type, 'radio');
    return React.DOM.input(
        that.getProps(Attributes[type], props, {
            className: 'ms-ChoiceField-input',
            onChange: that.handleChange,
            type: type
        })
    );
}

ChoiceField.Group = Components.group;

module.exports = ChoiceField;
