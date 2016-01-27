/*
 * src/components/Pivot/React.Pivot.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    link: require('./React.Pivot.Link')
};

var Attributes = Components.base.Attributes.ul;

var Pivot = React.createClass({

    displayName: 'Pivot',

    mixins: [Components.base],

    childContextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,event)
    },

    getChildContext: function() {
        return {
            onClick: this.handleSelect
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        tabs: React.PropTypes.bool,
        large: React.PropTypes.bool,
        selected: React.PropTypes.number
    }),

    getDefaultProps: function() {
        return {
            tabs: false,
            large: false,
            selected: -1
        };
    },

    render: function() {
        return (
            React.DOM.ul(
                Object.assign(
                    this.getProps(Attributes, this.props, {
                        className: getClassName(this, this.props)
                    }),
                    {
                        onClick: this.handleSelect
                    }
                ),
                getLinks(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, event) {
        this.handle(this, 'onSelect', [this.props.eventKey, eventKey, event]);
    }

});

function getClassName(that, props) {
    var className = 'ms-Pivot';
    if (props.tabs) {
        className += ' ms-Pivot--tabs';
    }
    if (props.large) {
        className += ' ms-Pivot--large';
    }
    return that.className(props.className, className);
}

function getLinks(that, props) {
    return React.Children.map(props.children, function(e, i) {
        return React.cloneElement(e, {eventKey: i, selected: this === i});
    }, props.selected);
}

Pivot.Link = Components.link;

module.exports = Pivot;
