/*
 * src/components/ContextualMenu/React.ContextualMenu.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    divider: require('./React.ContextualMenu.Divider'),
    header: require('./React.ContextualMenu.Header'),
    link: require('./React.ContextualMenu.Link')
};

var Attributes = Components.base.Attributes.ul;

var ContextualMenu = React.createClass({

    displayName: 'ContextualMenu',

    mixins: [Components.base],

    childContextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,bool,event)
    },

    getChildContext: function() {
        return {
            onClick: this.handleSelect
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,bool,event)

        // Office-UI attribute
        eventKey: React.PropTypes.any,
        open: React.PropTypes.bool,
        selected: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.number),
            React.PropTypes.number
        ])
    }),

    getDefaultProps: function() {
        return {
            open: false,
            selected: -1
        };
    },

    render: function() {
        return (
            React.DOM.ul(
                Object.assign(
                    this.getProps(Attributes, this.props, {
                        className: getClassName(this, this.props)
                    })
                ),
                getItems(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, hasMenu, event) {
        this.handle(this, 'onSelect',
                    [this.props.eventKey, eventKey, hasMenu, event]);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-ContextualMenu', {
        'ms-ContextualMenu--multiselect': isMultiSelect(that, props),
        'is-open': props.open
    });
}

function getItems(that, props) {
    return React.Children.map(props.children, function(e, i) {
        return React.cloneElement(e, {eventKey: i, selected: this.includes(i)});
    }, isMultiSelect(that, props) ? props.selected : [props.selected]);
}

function isMultiSelect(that, props) {
    return Array.isArray(props.selected);
}

ContextualMenu.Divider = Components.divider;
ContextualMenu.Header = Components.header;
ContextualMenu.Link = Components.link;

module.exports = ContextualMenu;
