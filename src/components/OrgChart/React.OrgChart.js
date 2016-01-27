/*
 * src/components/OrgChart/React.OrgChart.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    group: require('./React.OrgChart.Group'),
    list: require('./React.OrgChart.List'),
    listItem: require('./React.OrgChart.ListItem')
};

var Attributes = Components.base.Attributes.div;

var OrgChart = React.createClass({

    displayName: 'OrgChart',

    mixins: [Components.base],

    childContextTypes: {

        // Event handler content attribute
        onSelect: React.PropTypes.func  // (eventKey,selected,event)
    },

    getChildContext: function() {
        return {
            onSelect: this.handleSelect
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,event)

        // Office-UI attribute
        eventKey: React.PropTypes.any
    }),

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this)
                }),
                this.props.children
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        var args = [this.props.eventKey, [eventKey, selected], event];
        this.handle(this, 'onSelect', args);
    }

});

function getClassName(that) {
    return that.className(that.props.className, 'ms-OrgChart');
}

OrgChart.Group = Components.group;
OrgChart.List = Components.list;
OrgChart.ListItem = Components.listItem;

module.exports = OrgChart;
