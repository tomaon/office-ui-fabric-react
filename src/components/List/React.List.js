/*
 * src/components/List/React.List.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var List = React.createClass({

    displayName: 'List',

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
        kind: React.PropTypes.oneOf(['grid'])
    }),

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                getItems(this, this.props)
            )
        );
    },

    handleSelect: function(eventKey, event) {
        this.handle(this, 'onSelect', [this.props.eventKey, eventKey, event]);
    }

});

function getClassName(that, props) {
    var className;
    switch (props.kind) {
    case 'grid':
        className = 'ms-List ms-List--' + props.kind;
        break;
    default:
        className = 'ms-List';
        break;
    }
    return that.className(props.className, className);
}

function getItems(that, props) {
    return React.Children.map(props.children, function(e, i) {
        return React.cloneElement(e, {eventKey: i});
    });
}

module.exports = List;
