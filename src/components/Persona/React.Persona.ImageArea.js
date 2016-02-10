/*
 * src/components/Persona/React.Persona.ImageArea.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.img;

var Arrays = {
    initials: [
        'lightBlue', 'blue', 'darkBlue', 'teal', 'lightGreen', 'green',
        'darkGreen', 'lightPink', 'pink', 'magenta', 'purple', 'black',
        'orange', 'red', 'darkRed'
    ]
};

var PersonaImageArea = React.createClass({

    displayName: 'PersonaImageArea',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        initials: React.PropTypes.oneOf(Arrays.initials)
    }),

    render: function() {
        return (
            React.DOM.div(
                {
                    className: getClassName(this)
                },
                React.DOM.div(
                    {
                        className: getClassName2(this, this.props)
                    },
                    this.props.children
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

function getClassName2(that, props) {
    var includes = that.includes(props, Arrays, 'ms-Persona-initials--');
    return that.className('ms-Persona-initials', includes);
}

module.exports = PersonaImageArea;
