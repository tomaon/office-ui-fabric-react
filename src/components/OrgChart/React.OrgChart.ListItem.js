/*
 * src/components/OrgChart/React.OrgChart.ListItem.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.li;

var OrgChartListItem = React.createClass({

    displayName: 'OrgChartListItem',

    mixins: [Components.base],

    contextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,event)
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onClick: React.PropTypes.func, // (eventKey,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any
    }),

    render: function() {
        return (
            React.DOM.li(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                React.DOM.button(
                    {
                        className: 'ms-OrgChart-listItemBtn',
                        onClick: this.handleClick,
                        type: 'button'
                    },
                    this.props.children
                )
            )
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.handle(this, 'onClick', [this.props.eventKey, event], true);
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-OrgChart-listItem');
}

module.exports = OrgChartListItem;
