/*
 * src/components/Persona/React.Persona.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    details: require('./React.Persona.Details'),
    imageArea: require('./React.Persona.ImageArea'),
    presence: require('./React.Persona.Presence')
};

var Attributes = Components.base.Attributes.div;

var Arrays = {
    kind: ['away', 'blocked', 'busy', 'dnd', 'offline'],
    shape: ['square'],
    size: ['tiny', 'xs', 'sm', 'lg', 'xl'],
    theme: ['darkText']
};

var Persona = React.createClass({

    displayName: 'Persona',

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
        kind: React.PropTypes.oneOf(Arrays.kind),
        shape: React.PropTypes.oneOf(Arrays.shape),
        size: React.PropTypes.oneOf(Arrays.size),
        theme: React.PropTypes.oneOf(Arrays.theme),
        readOnly: React.PropTypes.bool,
        selectable: React.PropTypes.bool,
        available: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            selectable: false,
            available: false
        };
    },

    render: function() {
        return (
            React.DOM.div(
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
        if (this.props.selectable) {
            this.handle(this, 'onClick', [this.props.eventKey, event], true);
        }
    }

});

function getClassName(that, props) {
    var includes = that.includes(props, Arrays, 'ms-Persona--');
    return that.className(props.className, 'ms-Persona', includes, {
        'ms-Persona--readonly': props.readOnly,
        'ms-Persona--selectable': props.selectable,
        'ms-Persona--available': props.available
    });
}

Persona.Details = Components.details;
Persona.ImageArea = Components.imageArea;
Persona.Presence = Components.presence;

module.exports = Persona;
