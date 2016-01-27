/*
 * src/components/Icon/React.Icon.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.i;

var Icon = React.createClass({

    displayName: 'Icon',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attribute
        kind: React.PropTypes.string.isRequired
    }),

    render: function() {
        return (
            React.DOM.i(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                })
            )
        );
    }

});

function getClassName(that, props) {
    var className = 'ms-Icon ms-Icon--' + props.kind;
    return that.className(props.className, className);
}

module.exports = Icon;
