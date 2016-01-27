/*
 * src/samples/components/OrgChart.js
 */

'use strict';

var React = require('react');

var Components = {
    orgChart: require('../../components/OrgChart/React.OrgChart'),
    persona: require('../../components/Persona/React.Persona')
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
                        'OrgChart'
                    ),
                    getOrgChart({
                        onSelect: this.handleSelect,
                        eventKey: 'oc1'
                    }, {
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'OrgChart - Square'
                    ),
                    getOrgChart({
                        onSelect: this.handleSelect,
                        eventKey: 'oc2'
                    }, {
                        shape: 'square'
                    })
                )
            )
        );
    },

    handleSelect: function(eventKey, selected, event) {
        console.log('handleSelect: ' + eventKey +
                    ',[' + selected + ']=' + event.target.textContent);
    }

});

function getOrgChart(props, props2) {
    return React.createElement(
        Components.orgChart,
        props,
        React.createElement(
            Components.orgChart.Group,
            {
            },
            React.createElement(
                Components.orgChart.List,
                {
                    eventKey: 'l1'
                },
                getListItem(props2, 'RM', 'Russel Miller', 'Sales'),
                getListItem(props2, 'DF', 'Douglas Fielder', 'Public Relations')
            )
        ),
        React.createElement(
            Components.orgChart.Group,
            {
                groupTitle: 'Manager'
            },
            React.createElement(
                Components.orgChart.List,
                {
                    eventKey: 'l2'
                },
                getListItem(props2, 'GS', 'Grant Steel', 'Sales')
            )
        ),
        React.createElement(
            Components.orgChart.Group,
            {
                groupTitle: 'Staff'
            },
            React.createElement(
                Components.orgChart.List,
                {
                    eventKey: 'l3'
                },
                getListItem(props2, 'HM', 'Harvey Wallin', 'Public Relations'),
                getListItem(props2, 'ML', 'Marcus Lauer', 'Technical Support'),
                getListItem(props2, 'MG', 'Marcel Groce', 'Delivery'),
                getListItem(props2, 'JS', 'Jessica Fischer', 'Marketing')
            )
        )
    );
}

function getListItem(props, primaryText, secondaryText) {
    return React.createElement(
        Components.orgChart.ListItem,
        null,
        getPersona(props, primaryText, secondaryText)
    );
}

function getPersona(props, initials, primaryText, secondaryText) {
    return React.createElement(
        Components.persona,
        props,
        React.createElement(
            Components.persona.ImageArea,
            {
                initials: 'blue'
            },
            initials
        ),
        React.createElement(
            Components.persona.Presence
        ),
        React.createElement(
            Components.persona.Details,
            null,
            primaryText,
            secondaryText
        )
    );
}
