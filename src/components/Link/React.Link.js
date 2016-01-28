/*
 * src/components/Link/React.Link.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.a;

var Enums = {
    kind: ['hero']
};

var Link = React.createClass({

    displayName: 'Link',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(Enums.kind)
    }),

    render: function() {
        return (
            React.DOM.a(
                this.getProps(Attributes, this.props, {
                    onClick: this.handleClick,
                    className: getClassName(this, this.props)
                }),
                this.props.children
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
    var includes = that.includes(props, Enums, 'ms-Link--');
    return that.className(props.className, 'ms-Link', includes);
}

module.exports = Link;
