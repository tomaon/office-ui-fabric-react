/*
 * src/samples/components/ContextualMenu.js
 */

/* eslint-disable guard-for-in,max-len */

'use strict';

var React = require('react');

var Components = {
    contextualMenu: require('../../components/ContextualMenu/React.ContextualMenu')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            selected: {
                cm1: undefined,
                cm2: undefined,
                cm3: [], // multiselect
                cm4: {}
            },
            opened: true
        };
    },

    render: function() {
        return (
            React.DOM.article(
                null,
                React.DOM.a(
                    {
                        href: '#',
                        onClick: this.handleClick
                    },
                    this.state.opened ? 'close' : 'open'
                ),
                React.DOM.section(
                    {
                        style: {height: (this.state.opened ? '17em' : 'auto')}
                    },
                    React.DOM.h2(
                        null,
                        'ContextualMenu'
                    ),
                    React.createElement(
                        Components.contextualMenu,
                        getProps(this, 'cm1'),
                        getLink({}, 'Animals'),
                        getLink({}, 'Books'),
                        getLink({}, 'Education'),
                        getLink({}, 'Music'),
                        getLink({disabled: true}, 'Sports')
                    )
                ),
                React.DOM.section(
                    {
                        style: {height: (this.state.opened ? '21em' : 'auto')}
                    },
                    React.DOM.h2(
                        null,
                        'ContextualMenu - Dividers'
                    ),
                    React.createElement(
                        Components.contextualMenu,
                        getProps(this, 'cm2'),
                        getLink({}, 'Delete'),
                        getLink({}, 'Flag'),
                        getDivider({}),
                        getLink({}, 'Import'),
                        getLink({}, 'Move'),
                        getDivider({}),
                        getLink({}, 'Move'),
                        getLink({}, 'Create Rule...')
                    )
                ),
                React.DOM.section(
                    {
                        style: {height: (this.state.opened ? '28em' : 'auto')}
                    },
                    React.DOM.h2(
                        null,
                        'ContextualMenu - Multiselect'
                    ),
                    React.createElement(
                        Components.contextualMenu,
                        getProps(this, 'cm3'),
                        getHeader({}, 'SORT BY'),
                        getLink({}, 'Date'),
                        getLink({}, 'Sender'),
                        getDivider({}),
                        getHeader({}, 'ORDER'),
                        getLink({}, 'Newest on top'),
                        getLink({}, 'Oldest on top'),
                        getDivider({}),
                        getHeader({}, 'CONVERSATIONS'),
                        getLink({}, 'On'),
                        getLink({}, 'Off')
                    )
                ),
                React.DOM.section(
                    {
                        style: {height: (this.state.opened ? '20em' : 'auto')}
                    },
                    React.DOM.h2(
                        null,
                        'ContextualMenu - Submenu'
                    ),
                    React.createElement(
                        Components.contextualMenu,
                        getProps(this, ['cm4', 'a1']),
                        getLink({}, 'Animals'),
                        React.createElement(
                            Components.contextualMenu.Link,
                            {
                                hasMenu: true
                            },
                            'Books',
                            React.createElement(
                                Components.contextualMenu,
                                getProps(this, ['cm4', 'b1'], {
                                    open: this.state.selected.cm4.a1 === 1
                                }),
                                getLink({}, 'Fiction'),
                                React.createElement(
                                    Components.contextualMenu.Link,
                                    {
                                        hasMenu: true
                                    },
                                    'Humor',
                                    React.createElement(
                                        Components.contextualMenu,
                                        getProps(this, ['cm4', 'c1'], {
                                            open: this.state.selected.cm4.b1 === 1
                                        }),
                                        getLink({}, 'A'),
                                        getLink({}, 'B'),
                                        getLink({}, 'C')
                                    )
                                ),
                                getLink({}, 'Magazines'),
                                React.createElement(
                                    Components.contextualMenu.Link,
                                    {
                                        hasMenu: true
                                    },
                                    'Non-fiction',
                                    React.createElement(
                                        Components.contextualMenu,
                                        getProps(this, ['cm4', 'c3'], {
                                            open: this.state.selected.cm4.b1 === 3
                                        }),
                                        getLink({}, 'D'),
                                        getLink({}, 'E')
                                    )
                                ),
                                getLink({}, 'Textbooks')
                            )
                        ),
                        getLink({}, 'Education'),
                        getLink({}, 'Music'),
                        getLink({}, 'Sports')
                    )
                )
            )
        );
    },

    handleSelect: function(eventKey, index, hasMenu, event) {
        console.log('handleSelect: ' + eventKey +
                    ',' + index + ',' + hasMenu + '=' + event.target.textContent);
        var selected = this.state.selected;
        var key = Array.isArray(eventKey) ? eventKey[0] : eventKey;
        var value = get(eventKey, selected);
        if (hasMenu || value !== undefined) {
            value = Array.isArray(value) ? toggle(index, value) : index;
        }
        if (Array.isArray(eventKey)) { // force, TODO
            if (hasMenu) {
                selected = set(eventKey, selected, value);
            } else {
                selected[key] = reset(selected[key]);
            }
        } else {
            selected[key] = value;
        }
        this.setState({selected: selected, opened: hasMenu});
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({opened: !this.state.opened});
    }

});

function getDivider(props) {
    return React.createElement(
        Components.contextualMenu.Divider,
        props
    );
}

function getHeader(props, children) {
    return React.createElement(
        Components.contextualMenu.Header,
        props,
        children
    );
}

function getLink(props, children) {
    return React.createElement(
        Components.contextualMenu.Link,
        props,
        children
    );
}

function getProps(that, eventKey, props) {
    if (props === undefined) {
        props = {};
    }
    return Object.assign({}, {
        onSelect: that.handleSelect,
        eventKey: eventKey,
        open: that.state.opened,
        selected: get(eventKey, that.state.selected)
    }, props);
}

function get(k, o, d) {
    var v;
    if (Array.isArray(k)) {
        v = k.reduce(function(p, c) {
            return p === undefined ? undefined : p[c];
        }, o);
    } else {
        v = o[k];
    }
    return v === undefined ? d : v;
}

function set(k, o, v) {
    if (Array.isArray(k)) {
        var c = k.pop();
        var p = get(k, o, {});
        p[c] = v;
    } else {
        o[k] = v;
    }
    return o;
}

function toggle(e, a) {
    var n = a.indexOf(e);
    if (n === -1) {
        a.unshift(e);
    } else {
        a.splice(n, 1);
    }
    return a;
}

function reset(o) {
    for (var k in o) {
        var v = o[k];
        if (Array.isArray(v)) {
            //
        } else if (typeof v === 'object') {
            o[k] = reset(v);
        } else {
            o[k] = undefined;
        }
    }
    return o;
}
