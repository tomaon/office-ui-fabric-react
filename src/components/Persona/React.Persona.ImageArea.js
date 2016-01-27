/*
 * src/components/Persona/React.Persona.ImageArea.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon')
};

var Attributes = Components.base.Attributes.img;

var PersonaImageArea = React.createClass({

    displayName: 'PersonaImageArea',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {
    }),

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this)
                },
                React.createElement(
                    Components.icon,
                    {
                        className: 'ms-Persona-placeholder',
                        kind: 'person'
                    }
                ),
                React.DOM.img(
                    this.getProps(Attributes, this.props, {
                        className: 'ms-Persona-image'
                    })
                )
            )
        );
    }

});

function getClassName(that) {
    return that.className(that.props.className, 'ms-Persona-imageArea');
}

module.exports = PersonaImageArea;
