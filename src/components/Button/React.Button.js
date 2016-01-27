/*
 * src/components/Button/React.Button.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon')
};

var Attributes = Components.base.Attributes.button;

var Button = React.createClass({

    displayName: 'Button',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(['primary', 'hero', 'compound', 'command']),
        label: React.PropTypes.string,
        icon: React.PropTypes.string
    }),

    getDefaultProps: function() {
        return {
            disabled: false
        };
    },

    render: function() {
        return (
            React.DOM.button(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props),
                    onClick: this.handleClick
                }),
                getIcon(this, this.props),
                getLabel(this, this.props),
                getDescription(this, this.props)
            )
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.handle(this, 'onClick', [this.props.eventKey, event]);
    }

});

function getClassName(that, props) {
    var className;
    switch (props.kind) {
    case 'primary': case 'hero': case 'compound': case 'command':
        className = 'ms-Button ms-Button--' + props.kind;
        break;
    default:
        className = 'ms-Button';
        break;
    }
    return that.className(props.className, className, {
        'is-disabled': props.disabled
    });
}

function getDescription(that, props) {
    return props.children === undefined ? undefined : React.DOM.span(
        {
            className: 'ms-Button-description'
        },
        props.children
    );
}

function getIcon(that, props) {
    return props.icon === undefined ? undefined : React.DOM.span(
        {
            className: 'ms-Button-icon'
        },
        React.createElement(
            Components.icon,
            {
                kind: props.icon
            }
        )
    );
}

function getLabel(that, props) {
    return props.label === undefined ? undefined : React.DOM.span(
        {
            className: 'ms-Button-label'
        },
        props.label
    );
}

module.exports = Button;
