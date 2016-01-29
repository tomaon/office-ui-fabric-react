/*
 * src/components/Overlay/React.Overlay.js
 */

'use strict';

var React = require('react');

var Components = {
    base: require('../React.Component')
};

var Attributes = Components.base.Attributes.div;

var Arrays = {
    kind: ['dark', 'none']
};

var Overlay = React.createClass({

    displayName: 'Overlay',

    mixins: [Components.base],

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attribute
        kind: React.PropTypes.oneOf(Arrays.kind)
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
    var includes = that.includes(props, Arrays, 'ms-Overlay--');
    return that.className(props.className, 'ms-Overlay', includes);
}

module.exports = Overlay;
