/*
 * src/components/ListItem/React.ListItem.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var Arrays = {
    kind: ['document', 'image']
};

var ListItem = React.createClass({

    displayName: 'ListItem',

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
        kind: React.PropTypes.oneOf(Arrays.kind),
        selectable: React.PropTypes.bool,
        selected: React.PropTypes.bool,
        unread: React.PropTypes.bool,
        unseen: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            selectable: false,
            selected: false,
            unread: false,
            unseen: false
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
    var includes = that.includes(props, Arrays, 'ms-ListItem--');
    return that.className(props.className, 'ms-ListItem', includes, {
        'is-selectable': props.selectable,
        'is-selected': props.selected,
        'is-unread': props.unread,
        'is-unseen': props.unseen
    });
}

module.exports = ListItem;
