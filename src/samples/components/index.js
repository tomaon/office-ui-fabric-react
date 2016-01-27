/*
 * src/samples/components/index.js
 */

/* eslint-disable max-len */

'use strict';

var React = require('react');

var Components = {
    Button: require('./Button'),
    Label: require('./Label'),
    Link: require('./Link'),
    List: require('./List'),
    ListItem: require('./ListItem'),
    Pivot: require('./Pivot'),
    Toggle: require('./Toggle'),
    '': require('./empty.js')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            name: ''
        };
    },

    render: function() {
        return (
            React.DOM.section(
                null,
                React.DOM.header(
                    null,
                    React.DOM.nav(
                        null,
                        React.DOM.h3(
                            null,
                            'Components'
                        ),
                        React.DOM.ul(
                            null,
                            [
                                'Breadcrumb',
                                'Button',
                                'Callout',
                                'ChoiceField',
                                'CommandBar',
                                'ContextualMenu',
                                'DatePicker',
                                'Dialog',
                                'Dropdown',
                             // 'Icon'
                                'Label',
                                'Link',
                                'List',
                                'ListItem',
                                'MessageBanner',
                                'NavBar',
                                'OrgChart',
                                'Overlay',
                                'Panel',
                                'PeoplePicker',
                                'Persona',
                                'PersonaCard',
                                'Pivot',
                                'ProgresIndicator',
                                'SearchBox',
                                'Spinner',
                                'Table',
                                'TextField',
                                'Toggle'
                            ].map(function(e, i) {
                                return React.DOM.li(
                                    {
                                        key: i
                                    },
                                    Components[e] === undefined ? e : React.DOM.a(
                                        {
                                            href: '#',
                                            onClick: this.handleClick
                                        },
                                        e
                                    )
                                );
                            }.bind(this))
                        )
                    )
                ),
                React.createElement(
                    Components[this.state.name]
                )
            )
        );
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({name: event.target.textContent});
    }

});
