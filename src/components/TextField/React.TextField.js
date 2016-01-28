/*
 * src/components/TextField/React.TextField.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    label: require('../Label/React.Label')
};

var Attributes = {
    text: Components.base.Attributes.input.text,
    textarea: Components.base.Attributes.textarea
};

var Enums = {
    kind: ['multiline', 'placeholder', 'underlined']
};

var TextField = React.createClass({

    displayName: 'TextField',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attributes
        onChange: React.PropTypes.func, // (eventKey,event)
        onInput: React.PropTypes.func   // (eventKey,event)
    },

    propTypes: Object.assign({}, Attributes.text, Attributes.textarea, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(Enums.kind),
        label: React.PropTypes.string
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            required: false,
            value: ''
        };
    },

    getInitialState: function() {
        return {
            active: false
        };
    },

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this, this.props, this.state)
                },
                getLabel(this, this.props, this.state),
                getField(this, this.props),
                getDescription(this, this.props)
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
        this.handle(this, 'onChange', [this.props.eventKey, event], true);
    },

    handleInput: function(event) {
        event.stopPropagation();
        this.handle(this, 'onInput', [this.props.eventKey, event], true);
    }

});

function getClassName(that, props, state) {
    var includes = that.includes(props, Enums, 'ms-TextField--');
    return that.className(props.className, 'ms-TextField', includes, {
        'is-disabled': props.disabled,
        'is-required': props.required,
        'is-active': state.active
    });
}

function getDescription(that, props) {
    return props.children === undefined ? undefined : React.DOM.span(
        {
            className: 'ms-TextField-description'
        },
        props.children
    );
}

function getField(that, props) {
    switch (props.kind) {
    case 'multiline':
        return React.DOM.textarea(
            Object.assign(
                that.getProps(Attributes.textarea, props, {
                    onChange: that.handleChange,
                    onInput: that.handleInput,
                    className: 'ms-TextField-field'
                }),
                {
                    onFocus: that.handleFocus,
                    onBlur: that.handleBlur
                }
            )
        );
    default:
        return React.DOM.input(
            Object.assign(
                that.getProps(Attributes.text, props, {
                    onChange: that.handleChange,
                    onInput: that.handleInput,
                    className: 'ms-TextField-field',
                    type: 'text'
                }),
                {
                    onFocus: that.handleFocus,
                    onBlur: that.handleBlur
                }
            )
        );
    }
}

function getLabel(that, props, state) {
    var display =
        props.kind !== 'placeholder' || (!state.active && props.value === '');
    return props.label === undefined ? undefined : React.createElement(
        Components.label,
        {
            style: {
                display: display ? 'block' : 'none'
            },
            disabled: props.disabled,
            required: props.required
        },
        props.label
    );
}

module.exports = TextField;
