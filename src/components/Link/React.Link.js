/*
 * src/components/Link/React.Link.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.a;

var Arrays = {
    kind: ['hero']
};

var Link = React.createClass({

    displayName: 'Link',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(Arrays.kind)
    }),

    render: function() {
        return (
            React.DOM.a(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props),
                    onClick: this.handleClick
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
    var includes = that.includes(props, Arrays, 'ms-Link--');
    return that.className(props.className, 'ms-Link', includes);
}

module.exports = Link;
