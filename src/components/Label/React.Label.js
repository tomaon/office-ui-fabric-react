/*
 * src/components/Label/React.Label.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.span;

var Label = React.createClass({

    displayName: 'Label',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attributes
        disabled: React.PropTypes.bool,
        required: React.PropTypes.bool
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            required: false
        };
    },

    render: function() {
        return (
            React.DOM.span(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                this.props.children
            )
        );
    }

});

function getClassName(that, props) {
    return that.className(props.className, 'ms-Label', {
        'is-disabled': props.disabled,
        'is-required': props.required
    });
}

module.exports = Label;
