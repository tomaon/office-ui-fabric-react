/*
 * src/components/ContextualMenu/React.ContextualMenu.Divider.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var ContextMenuDivider = React.createClass({

    displayName: 'ContextMenuDivider',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {
    }),

    render: function() {
        return (
            React.DOM.li(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this)
                })
            )
        );
    }

});

function getClassName(that) {
    return that.className(that.props.className,
                          'ms-ContextualMenu-item',
                          'ms-ContextualMenu-item--divider');
}

module.exports = ContextMenuDivider;
