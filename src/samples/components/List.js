/*
 * src/samples/components/List.js
 */

/* eslint-disable max-len */

'use strict';

var React = require('react');

var Components = {
    list: require('../../components/List/React.List'),
    listitem: require('../../components/ListItem/React.ListItem'),
    icon: require('../../components/Icon/React.Icon')
};

module.exports = React.createClass({

    render: function() {
        return (
            React.DOM.article(
                null,
                React.DOM.span(
                    null,
                    '-'
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'List'
                    ),
                    getList({})
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'List - Grid'
                    ),
                    getList({kind: 'grid'})
                )
            )
        );
    }

});

function getList(props) {
    return React.createElement(
        Components.list,
        props,
        getListItem({unread: true, selectable: true}),
        getListItem({unread: true, selectable: true}),
        getListItem({unread: true, selectable: true}),
        getListItem({selectable: true}),
        getListItem({selecte: true, selectable: true}),
        getListItem({selectable: true}),
        getListItem({selectable: true}),
        getListItem({selectable: true})
    );
}

function getListItem(props, element) {
    return React.createElement(
        Components.listitem,
        props,
        element,
        React.DOM.span(
            {
                className: 'ms-ListItem-primaryText'
            },
            'Alton Lafferty'
        ),
        React.DOM.span(
            {
                className: 'ms-ListItem-secondaryText'
            },
            'Meeting notes'
        ),
        React.DOM.span(
            {
                className: 'ms-ListItem-tertiaryText'
            },
            'Today we discussed the importance of a, b, and c in regards to d.'
        ),
        React.DOM.span(
            {
                className: 'ms-ListItem-metaText'
            },
            '2:42p'
        ),
        React.DOM.div(
            {
                className: 'ms-ListItem-selectionTarget'
            }
        ),
        React.DOM.div(
            {
                className: 'ms-ListItem-actions'
            },
            React.DOM.div(
                {
                    className: 'ms-ListItem-action'
                },
                React.createElement(Components.icon, {kind: 'mail'})
            ),
            React.DOM.div(
                {
                    className: 'ms-ListItem-action'
                },
                React.createElement(Components.icon, {kind: 'trash'})
            ),
            React.DOM.div(
                {
                    className: 'ms-ListItem-action'
                },
                React.createElement(Components.icon, {kind: 'flag'})
            ),
            React.DOM.div(
                {
                    className: 'ms-ListItem-action'
                },
                React.createElement(Components.icon, {kind: 'pinLeft'})
            )
        )
    );
}
