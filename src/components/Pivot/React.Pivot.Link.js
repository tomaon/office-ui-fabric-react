/*
 * src/components/Pivot/React.Pivot.Link.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var PivotLink = React.createClass({

    displayName: 'PivotLink',

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
        overflow: React.PropTypes.bool,
        selected: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            overflow: false,
            selected: false
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
        if (!this.props.overflow) {
            this.handle(this, 'onClick', [this.props.eventKey, event], true);
        }
    }

});

function getClassName(that, props) {
    var className = 'ms-Pivot-link';
    if (props.overflow) {
        className += ' ms-Pivot-link--overflow';
    }
    return that.className(props.className, className, {
        'is-selected': props.selected
    });
}

module.exports = PivotLink;
