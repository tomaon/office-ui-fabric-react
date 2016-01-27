/*
 * src/components/Table/React.Table.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    row: require('./React.Table.Row')
};

var Attributes = Components.base.Attributes.div;

var Table = React.createClass({

    displayName: 'Table',

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

        // Office-UI attribute
        eventKey: React.PropTypes.any,
        selected: React.PropTypes.number
    }),

    getDefaultProps: function() {
        return {
            selected: -1
        };
    },

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                getRows(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, event) {
        this.handle(this, 'onSelect', [this.props.eventKey, eventKey, event]);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-Table');
}

function getRows(that, props) {
    return React.Children.map(props.children, function(e, i) {
        return React.cloneElement(e, {eventKey: i, selected: this === i});
    }, props.selected);
}

Table.Row = Components.row;

module.exports = Table;
