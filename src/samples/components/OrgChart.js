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

function getOrgChart(props, personaProps) {
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
                getListItem(personaProps, 'Russel Miller', 'Sales'),
                getListItem(personaProps, 'Douglas Fielder', 'Public Relations')
            )
        ),
        React.createElement(
            Components.orgChart.Group,
            {
                title: 'Manager'
            },
            React.createElement(
                Components.orgChart.List,
                {
                    eventKey: 'l2'
                },
                getListItem(personaProps, 'Grant Steel', 'Sales')
            )
        ),
        React.createElement(
            Components.orgChart.Group,
            {
                title: 'Staff'
            },
            React.createElement(
                Components.orgChart.List,
                {
                    eventKey: 'l3'
                },
                getListItem(personaProps, 'Harvey Wallin', 'Public Relations'),
                getListItem(personaProps, 'Marcus Lauer', 'Technical Support'),
                getListItem(personaProps, 'Marcel Groce', 'Delivery'),
                getListItem(personaProps, 'Jessica Fischer', 'Marketing')
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

function getPersona(props, primaryText, secondaryText) {
    return React.createElement(
        Components.persona,
        props,
        React.createElement(
            Components.persona.ImageArea,
            {
                src: 'src/samples/img/silver.png'
            }
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
