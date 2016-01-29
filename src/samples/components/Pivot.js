/*
 * src/samples/components/Pivot.js
 */

'use strict';

var React = require('react');

var Components = {
    pivot: require('../../components/Pivot/React.Pivot'),
    icon: require('../../components/Icon/React.Icon')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            selected: -1 // index = link.eventKey
        };
    },

    render: function() {
        var pivot = React.createElement(
            Components.pivot,
            {
                onSelect: this.handleSelect,
                selected: this.state.selected
            },
            React.createElement(
                Components.pivot.Link,
                null,
                'My files'
            ),
            React.createElement(
                Components.pivot.Link,
                null,
                'Recent'
            ),
            React.createElement(
                Components.pivot.Link,
                null,
                'Shared with me'
            ),
            React.createElement(
                Components.pivot.Link,
                {
                    overflow: true // ?, TODO
                },
                React.createElement(
                    Components.icon,
                    {
                        className: 'ms-Pivot-ellipsis',
                        kind: 'ellipsis'
                    }
                )
            )
        );
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
                        'Pivot'
                    ),
                    React.cloneElement(pivot, {
                        eventKey: 'p1'
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Pivot - Large'
                    ),
                    React.cloneElement(pivot, {
                        eventKey: 'p2',
                        large: true
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Pivot - Tabs'
                    ),
                    React.cloneElement(pivot, {
                        eventKey: 'p3',
                        tabs: true
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Pivot - Tabs - Large'
                    ),
                    React.cloneElement(pivot, {
                        eventKey: 'p4',
                        tabs: true,
                        large: true
                    })
                )
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        console.log('handleSelect: ' + eventKey +
                    ',' + selected + '=' + event.target.textContent);
        this.setState({selected: selected});
    }

});
