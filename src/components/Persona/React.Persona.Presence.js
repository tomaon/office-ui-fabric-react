/*
 * src/components/Persona/React.Persona.Presence.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var PersonaPresence = React.createClass({

    displayName: 'PersonaPresence',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {
    }),

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this)
                }
            )
        );
    }

});

function getClassName(that) {
    return that.className(that.props.className, 'ms-Persona-presence');
}

module.exports = PersonaPresence;
