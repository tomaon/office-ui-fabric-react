/*
 * src/components/OrgChart/React.OrgChart.List.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.ul;

var OrgChartList = React.createClass({

    displayName: 'OrgChartList',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onSelect: React.PropTypes.func // (eventKey,selected,event)
    },

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
        eventKey: React.PropTypes.any
    }),

    render: function() {
        return (
            React.DOM.ul(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                getItems(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, event) {
        var args = [this.props.eventKey, eventKey, event];
        this.handle(this, 'onSelect', args, true);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-OrgChart-list');
}

function getItems(that, props) {
    return React.Children.map(props.children, function(e, i) {
        return React.cloneElement(e, {eventKey: i});
    });
}

module.exports = OrgChartList;
