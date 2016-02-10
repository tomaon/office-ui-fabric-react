/*
 * src/components/Dialog/React.Dialog.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon'),
    overlay: require('../Overlay/React.Overlay')
};

var Attributes = Components.base.Attributes.div;

var Arrays = {
    kind: ['lgHeader', 'multiline']
};

var Dialog = React.createClass({

    displayName: 'Dialog',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onClick: React.PropTypes.func, // (eventKey,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(Arrays.kind),
        title: React.PropTypes.string,
        overlay: React.PropTypes.oneOf(['dark', 'none']),
        disabled: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            overlay: 'dark',
            disabled: true
        };
    },

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                React.createElement(
                    Components.overlay,
                    {
                        onClick: this.handleClick,
                        kind: this.props.overlay
                    }
                ),
                React.DOM.div(
                    {
                        className: 'ms-Dialog-main'
                    },
                    getCloseButton(this, this.props),
                    getHeader(this, this.props),
                    getInner(this, this.props)
                )
            )
        );
    },

    handleClick: function(event) {
        event.stopPropagation();
        this.handle(this, 'onClick', [this.props.eventKey, event]);
    }

});

function getClassName(that, props) {
    var includes = that.includes(props, Arrays, 'ms-Dialog--');
    return that.className(props.className, 'ms-Dialog', includes, {
        'ms-Dialog--close': props.onClick !== undefined,
        'ms-Dialog--is-disabled': props.disabled
    });
}

function getCloseButton(that, props) {
    return props.onClick === undefined ? undefined : React.DOM.button(
        {
            className: 'ms-Dialog-button ms-Dialog-button--close',
            onClick: that.handleClick,
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

function getHeader(that, props) {
    return props.title === undefined ? undefined : React.DOM.div(
        {
            className: 'ms-Dialog-header'
        },
        React.DOM.div(
            {
                className: 'ms-Dialog-title'
            },
            props.title
        )
    );
}

function getInner(that, props) {
    return props.children === undefined ? undefined : React.DOM.div(
        {
            className: 'ms-Dialog-inner'
        },
        props.children
    );
}

module.exports = Dialog;
