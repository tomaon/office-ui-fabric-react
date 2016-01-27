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

    propTypes: Object.assign({}, Attributes, {

        // Office-UI attribute
        kind: React.PropTypes.oneOf(['grid'])
    }),

    render: function() {
        return (
            React.DOM.div(
                this.getProps(Attributes, this.props, {
                    className: getClassName(this, this.props)
                }),
                this.props.children
            )
        );
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

module.exports = List;
