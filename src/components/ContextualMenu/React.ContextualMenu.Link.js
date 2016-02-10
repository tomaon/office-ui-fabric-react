/*
 * src/components/ContextualMenu/React.ContextualMenu.Link.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon')
};

var Attributes = Components.base.Attributes.li;

var ContextMenuLink = React.createClass({

    displayName: 'ContextMenuLink',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,bool,event)
    },

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        hasMenu: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        selected: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            hasMenu: false,
            disabled: false,
            selected: false
        };
    },

    render: function() {
        var e = this.props.children;
        var a = React.Children.toArray(e);
        if (this.props.hasMenu) {
            e = a.shift();
        }
        return (
            React.DOM.li(
                this.getProps(Attributes, this.props, {
                    className: getItemClassName(this, this.props)
                }),
                React.DOM.span(
                    {
                        className: getLinkClassName(this, this.props),
                        onClick: this.handleClick
                    },
                    e
                ),
                this.props.hasMenu ? getSubMenuIcon() : undefined,
                this.props.hasMenu ? a : undefined
            )
        );
    },

    handleClick: function(event) {
        event.stopPropagation();
        this.handle(this, 'onClick',
                    [this.props.eventKey, this.props.hasMenu, event], true);
    }

});

function getItemClassName(that, props) {
    return that.className(props.className, 'ms-ContextualMenu-item');
}

function getLinkClassName(that, props) {
    return that.className('ms-ContextualMenu-link', {
        'ms-ContextualMenu-link--hasMenu': props.hasMenu,
        'is-disabled': props.disabled, // pointer-events:none, TODO
        'is-selected': props.selected
    });
}

function getSubMenuIcon() {
    return React.createElement(
        Components.icon,
        {
            className: 'ms-ContextualMenu-subMenuIcon',
            kind: 'chevronRight'
        }
    );
}

module.exports = ContextMenuLink;
