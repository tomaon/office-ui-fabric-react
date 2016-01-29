/*
 * src/components/ChoiceField/React.ChoiceField.Group.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    label: require('../Label/React.Label')
};

var Attributes = Components.base.Attributes.div;

var Arrays = {
    type: ['radio', 'checkbox']
};

var ChoiceFieldGroup = React.createClass({

    displayName: 'ChoiceFieldGroup',

    mixins: [Components.base],

    childContextTypes: {

        // Event handler content attribute
        onChange: React.PropTypes.func, // (eventKey,event)

        // Office-UI attribute
        type: React.PropTypes.oneOf(Arrays.type)
    },

    getChildContext: function() {
        return {
            onChange: this.handleSelect,
            type: this.props.type
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        title: React.PropTypes.string,
        type: React.PropTypes.oneOf(Arrays.type),
        disabled: React.PropTypes.bool,
        required: React.PropTypes.bool,
        selected: React.PropTypes.number
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            required: false,
            selected: -1
        };
    },

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this)
                },
                getTitle(this, this.props),
                getFields(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, event) {
        this.handle(this, 'onSelect', [this.props.eventKey, eventKey, event]);
    }

});

function getClassName(that) {
    return that.className(that.props.className, 'ms-ChoiceFieldGroup');
}

function getFields(that, props) {
    return React.Children.map(props.children, function(e, i) {
        var props = e.props;
        return React.cloneElement(e, {
            checked: this.selected === i && !props.disabled,
            disabled: this.disabled || props.disabled,
            eventKey: i
        });
    }, props);
}

function getTitle(that, props) {
    return props.title === undefined ? undefined : React.DOM.div(
        {
            className: 'ms-ChoiceFieldGroup-title'
        },
        React.createElement(
            Components.label,
            {
                disabled: props.disabled,
                required: props.required
            },
            props.title
        )
    );
}

module.exports = ChoiceFieldGroup;
