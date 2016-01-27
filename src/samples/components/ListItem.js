/*
 * src/samples/components/ListItem.js
 */

/* eslint-disable max-len */

'use strict';

var React = require('react');

var Components = {
    icon: require('../../components/Icon/React.Icon'),
    item: require('../../components/ListItem/React.ListItem')
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
                        'ListItem'
                    ),
                    getItem({}),
                    getItem({selectable: true}),
                    getItem({selected: true, selectable: true}),
                    getItem({unseen: true, selectable: true}),
                    getItem({unread: true, selectable: true})
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'ListItem - Image'
                    ),
                    getItem({kind: 'image'}, React.DOM.div({ // TODO
                        className: 'ms-ListItem-image',
                        style: {backgroundColor: '#767676'}
                    }))
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'ListItem - Document'
                    ),
                    React.createElement(
                        Components.item,
                        {
                            kind: 'document'
                        },
                        React.DOM.div( // TODO
                            {
                                className: 'ms-ListItem-itemIcon ms-ListItem-itemIcon--ppt',
                                style: {backgroundColor: '#767676'}
                            }
                        ),
                        React.DOM.span(
                            {
                                className: 'ms-ListItem-primaryText'
                            },
                            'Perdivn Pitch.mp3'
                        ),
                        React.DOM.span(
                            {
                                className: 'ms-ListItem-secondaryText'
                            },
                            '08/11/14 12:32p'
                        )
                    )
                )
            )
        );
    }

});

function getItem(props, element) {
    return React.createElement(
        Components.item,
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
