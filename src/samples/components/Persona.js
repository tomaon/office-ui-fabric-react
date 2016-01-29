/*
 * src/samples/components/Persona.js
 */

'use strict';

var React = require('react');

var Components = {
    persona: require('../../components/Persona/React.Persona')
};

module.exports = React.createClass({

    render: function() {
        var persona = getPersona({
            title: 'x',
            onClick: this.handleClick
        });
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
                        'Persona - Circle'
                    ),
                    getList(persona, 'size', [
                        'tiny', 'xs', 'sm', 'lg', 'xl'
                    ], {
                        readOnly: true
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Persona - Square'
                    ),
                    getList(persona, 'size', [
                        'tiny', 'xs', 'sm', 'lg', 'xl'
                    ], {
                        shape: 'square',
                        theme: 'darkText'
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Persona - Presence'
                    ),
                    getList(persona, 'kind', [
                        'away', 'blocked', 'busy', 'dnd', 'offline'
                    ], {
                        selectable: true
                    })
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Persona - Square - Presence'
                    ),
                    getList(persona, 'kind', [
                        'away', 'blocked', 'busy', 'dnd', 'offline'
                    ], {
                        shape: 'square',
                        available: true
                    })
                )
            )
        );
    },

    handleClick: function(eventKey, event) {
        console.log('handleClick: ' + event.currentTarget.className);
    }

});

function getList(element, name, array, props) {
    return array.map(function(e, i) {
        var obj = {};
        obj[name] = e;
        return React.DOM.div(
            {
                style: {marginBottom: '26px'},
                key: i
            },
            React.cloneElement(element, Object.assign(obj, props))
        );
    });
}

function getPersona(props) {
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
            'Alton Lafferty',
            'Accountant',
            'In a meeting',
            'Available at 4:00pm'
        )
    );
}
