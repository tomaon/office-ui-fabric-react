/*
 * src/components/OrgChart/React.OrgChart.Group.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var OrgChartGroup = React.createClass({

    displayName: 'OrgChartGroup',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onSelect: React.PropTypes.func // (eventKey,selected,event)
    },

    childContextTypes: {

        // Event handler content attribute
        onSelect: React.PropTypes.func // (eventKey,selected,event)
    },

    getChildContext: function() {
        return {
            onSelect: this.handleSelect
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,event),

        // Office-UI attribute
        title: React.PropTypes.string
    }),

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                getTitle(this, this.props),
                this.props.children
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        var args = [eventKey, selected, event];
        this.handle(this, 'onSelect', args, true);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-OrgChart-list');
}

function getTitle(that, props) {
    return props.title === undefined ? undefined : React.DOM.div(
        {
            className: 'ms-OrgChart-groupTitle'
        },
        props.title
    );
}

module.exports = OrgChartGroup;
