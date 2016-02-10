/*
 * src/components/ContextualMenu/React.ContextualMenu.Header.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var ContextMenuHeader = React.createClass({

    displayName: 'ContextMenuHeader',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {
    }),

    render: function() {
        return (
            React.DOM.li(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this)
                }),
                this.props.children
            )
        );
    }

});

function getClassName(that) {
    return that.className(that.props.className,
                          'ms-ContextualMenu-item',
                          'ms-ContextualMenu-item--header');
}

module.exports = ContextMenuHeader;
