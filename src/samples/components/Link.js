/*
 * src/samples/components/Link.js
 */

/* eslint-disable max-len */

'use strict';

var React = require('react');

var Components = {
    link: require('../../components/Link/React.Link')
};

module.exports = React.createClass({

    render: function() {
        return (
            React.DOM.article(
                null,
                React.DOM.span(
                    {
                    },
                    '-'
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Link'
                    ),
                    React.DOM.p(
                        {
                            className: 'ms-font-m'
                        },
                        React.createElement(
                            Components.link,
                            {
                                onClick: this.handleSelect,
                                href: '#',
                                eventKey: '11'
                            },
                            'Link to a webpage'
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Link - Hero'
                    ),
                    React.DOM.p(
                        {
                            className: 'ms-font-m'
                        },
                        React.createElement(
                            Components.link,
                            {
                                onClick: this.handleSelect,
                                href: '#',
                                eventKey: '21',
                                kind: 'hero'
                            },
                            'Link to a webpage'
                        )
                    )
                )
            )
        );
    },

    handleSelect: function(eventKey, event) {
        console.log('handleSelect: ' + eventKey + '=' + event.target.textContent);
    }

});
