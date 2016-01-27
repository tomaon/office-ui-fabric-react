/*
 * src/components/Link/React.Link.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.a;

var Link = React.createClass({

    displayName: 'Link',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        kind: React.PropTypes.oneOf(['hero'])
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
    var className;
    switch (props.kind) {
    case 'hero':
        className = 'ms-Link ms-Link--' + props.kind;
        break;
    default:
        className = 'ms-Link';
        break;
    }
    return that.className(props.className, className);
}

module.exports = Link;
