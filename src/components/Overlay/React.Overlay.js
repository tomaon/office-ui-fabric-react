/*
 * src/components/Overlay/React.Overlay.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var Overlay = React.createClass({

    displayName: 'Overlay',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attribute
        kind: React.PropTypes.oneOf(['dark', 'none'])
    }),

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                })
            )
        );
    }

});

function getClassName(that, props) {
    var className;
    switch (props.kind) {
    case 'dark': case 'none':
        className = 'ms-Overlay ms-Overlay--' + props.kind;
        break;
    default:
        className = 'ms-Overlay';
        break;
    }
    return that.className(props.className, className);
}

module.exports = Overlay;