/*
 * src/components/Persona/React.Persona.Details.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var PersonaDetails = React.createClass({

    displayName: 'PersonaDetails',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {
    }),

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this)
                },
                getDetails(this)
            )
        );
    }

});

function getClassName(that) {
    return that.className(that.props.className, 'ms-Persona-details');
}

function getDetails(that) {
    return React.Children.map(that.props.children, function(e, i) {
        return React.DOM.div(
            {
                className: 'ms-Persona-' + that.at(this, i) + 'Text'
            },
            e
        );
    }, ['primary', 'secondary', 'tertiary', 'optional']);
}

module.exports = PersonaDetails;
