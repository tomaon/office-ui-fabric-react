/*
 * src/samples/components/ChoiceField.js
 */

'use strict';

var React = require('react');

var Components = {
    choiceField: require('../../components/ChoiceField/React.ChoiceField')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            selected: {
                g1: [], // [choiceField.id]
                g2: [], // [choiceField.id]
                g3: -1  // index == choiceField.eventKey
            },
            disabled: false
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
                    this.state.disabled ? 'enable' : 'disable'
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'ChoiceField - Radio'
                    ),
                    getChioceFields(this, 'g1', 'radio', [
                        {id: 'cf11', label: 'Label-1', disabled: false},
                        {id: 'cf12', label: 'Label-2', disabled: false},
                        {id: 'cf13', label: 'Label-3', disabled: true}
                    ])
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'ChoiceField - Checkbox'
                    ),
                    getChioceFields(this, 'g2', 'checkbox', [
                        {id: 'cf21', label: 'Label-1', disabled: false},
                        {id: 'cf22', label: 'Label-2', disabled: false},
                        {id: 'cf23', label: 'Label-3', disabled: true}
                    ])
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'ChoiceField - Group'
                    ),
                    React.createElement(
                        Components.choiceField.Group,
                        {
                            onSelect: this.handleSelect,
                            eventKey: 'g3',
                            title: 'Pick one',
                            type: 'radio',
                            disabled: this.state.disabled,
                            required: !this.state.disabled,
                            selected: this.state.selected.g3
                        },
                        getChioceField('cf31', 'Label-1', false),
                        getChioceField('cf32', 'Label-2', false),
                        getChioceField('cf33', 'Label-3', true)
                    )
                )
            )
        );
    },

    handleChange: function(eventKey, event) {
        console.log('handleChange: ' + eventKey +
                    ',' + event.target.id + '=' + event.target.value);
        setSelected(this, eventKey,
                    update(event.target.id, this.state.selected[eventKey]));
    },

    handleSelect: function(eventKey, selected, event) {
        console.log('handleSelect: ' + eventKey +
                    ',' + selected + '=' + event.target.value);
        setSelected(this, eventKey, selected);
    },

    handleClick: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({disabled: !this.state.disabled});
    }

});

function getChioceFields(that, group, type, array) {
    return array.map(function(e, i) {
        return React.createElement(
            Components.choiceField,
            {
                id: e.id,
                onChange: that.handleChange,
                key: i,
                checked: that.state.selected[group].includes(e.id),
                disabled: e.disabled || that.state.disabled,
                type: type,
                eventKey: group,
                label: e.label
            }
        );
    });
}

function getChioceField(id, label, disabled) {
    return React.createElement(
        Components.choiceField,
        {
            id: id,
            label: label,
            disabled: disabled
        }
    );
}

function setSelected(that, key, value) {
    var selected = that.state.selected;
    selected[key] = value;
    that.setState({selected: selected});
}

function update(e, a) {
    var n = a.indexOf(e);
    if (n === -1) {
        a.unshift(e);
    } else {
        a.splice(n, 1);
    }
    return a;
}
