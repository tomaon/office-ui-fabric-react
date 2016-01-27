/*
 * src/components/Dropdown/React.Dropdown.js
 */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Components = {
    base: require('../React.Component'),
    icon: require('../Icon/React.Icon'),
    item: require('./React.Dropdown.Item')
};

var Attributes = Components.base.Attributes.ul;

var Dropdown = React.createClass({

    displayName: 'Dropdown',

    mixins: [Components.base],

    childContextTypes: {

        // Event handler content attribute
        onClick: React.PropTypes.func // (eventKey,event)
    },

    getChildContext: function() {
        return {
            onClick: this.handleSelect
        };
    },

    propTypes: Object.assign({}, Attributes, {

        // Event handler content attribute
        onSelect: React.PropTypes.func, // (eventKey,selected,event)

        // Office-UI attributes
        eventKey: React.PropTypes.any,
        disabled: React.PropTypes.bool,
        selected: React.PropTypes.number
    }),

    getDefaultProps: function() {
        return {
            disabled: false,
            selected: -1
        };
    },

    getInitialState: function() {
        return {
            open: false,
            changed: -1,
            width: -1
        };
    },

    componentDidMount: function() {
        this.setState({width: ReactDOM.findDOMNode(this.refs.dd).offsetWidth});
    },

    render: function() {
        return (
            React.DOM.div(
                Object.assign(
                    this.getProps(Attributes, this.props, {
                        ref: 'dd',
                        className: getClassName(this, this.props, this.state)
                    }),
                    {
                        onBlur: this.handleBlur,
                        onKeyUp: this.handleKeyUp,
                        onClick: this.handleClick
                    }
                ),
                React.createElement(
                    Components.icon,
                    {
                        className: 'ms-Dropdown-caretDown',
                        kind: 'caretDown'
                    }
                ),
                // select.ms-Dropdown-select -> ul.ms-Dropdown-items
                // - option ...              -> - li.ms-Dropdown-item
                React.DOM.span(
                    {
                        className: 'ms-Dropdown-title'
                    },
                    getTitle(this, this.props)
                ),
                React.DOM.ul(
                    {
                        className: 'ms-Dropdown-items',
                        style: {
                            width: this.state.width
                        }
                    },
                    getItems(this, this.props, this.state)
                )
            )
        );
    },

    handleKeyUp: function(event) {
        event.stopPropagation();
        var keyCode = event.keyCode || event.which;
        if (this.state.open) {
            switch (keyCode) {
            case 13: // enter
                doCommit(this, this.state.changed);
                break;
            case 27: // escape
                doRollback(this);
                break;
            case 38: // up
                setPrevItem(this, this.state.changed);
                break;
            case 40: // down
                setNextItem(this, this.state.changed);
                break;
            default:
                break;
            }
        } else if ([13, 38, 40].includes(keyCode)) {
            setSelectedItem(this, this.props.selected);
        }
    },

    handleBlur: function(event) {
        event.stopPropagation();
        this.setState({open: false, changed: -1});
    },

    handleClick: function(event) {
        event.stopPropagation();
        this.setState({open: !this.state.open, changed: -1});
    },

    handleSelect: function(eventKey, event) {
        this.setState({open: false, changed: -1});
        this.handle(this, 'onSelect', [this.props.eventKey, eventKey, event]);
    }

});

function getClassName(that, props, state) {
    return that.className(props.className, 'ms-Dropdown', {
        'is-disabled': props.disabled,
        'is-open': state.open && !props.disabled
    });
}

function getItems(that, props, state) {
    return React.Children.map(props.children, function(e, i) {
        var selected = this === i && !e.props.disabled;
        return React.cloneElement(e, {ref: i, eventKey: i, selected: selected});
    }, state.changed < 0 ? props.selected : state.changed);
}

function getTitle(that, props) {
    var element = find(that, getChildren(that), props.selected);
    return element === undefined ? '' : element.props.children;
}

function setNextItem(that, index) {
    var changed = findIndex(that, getRefs(that), index + 1);
    if (changed >= 0) {
        that.setState({open: true, changed: changed});
    }
}

function setPrevItem(that, index) {
    var changed = findLastIndex(that, getRefs(that), index - 1);
    if (changed >= 0) {
        that.setState({open: true, changed: changed});
    }
}

function setSelectedItem(that, index) {
    var changed = findIndex(that, getRefs(that), index);
    if (changed >= 0) {
        that.setState({open: true, changed: changed});
    }
}

function doCommit(that, index) {
    var element = find(that, getRefs(that), index);
    if (element !== undefined) {
        that.setState({open: false, changed: -1});
        ReactDOM.findDOMNode(element).click();
    }
}

function doRollback(that) {
    that.setState({open: false, changed: -1});
}

function enabled(element) {
    return !element.props.disabled;
}

function find(that, array, selected) {
    var element = that.at(array, selected);
    if (element === undefined || element.props.disabled) {
        var enabled = findIndex(that, array, 0);
        return enabled >= 0 ? that.at(array, enabled) : undefined;
    }
    return element;
}

function findIndex(that, array, begin, end) {
    return that.findIndex(array, enabled, begin, end);
}

function findLastIndex(that, array, begin, end) {
    return that.findLastIndex(array, enabled, begin, end);
}

function getChildren(that) {
    return React.Children.toArray(that.props.children);
}

function getRefs(that) {
    return that.toArray(that.refs);
}

Dropdown.Item = Components.item;

module.exports = Dropdown;
