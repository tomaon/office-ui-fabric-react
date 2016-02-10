/*
 * src/samples/components/Dialog.js
 */

/* eslint-disable max-len */

'use strict';

var React = require('react');

var Components = {
    button: require('../../components/Button/React.Button'),
    choiceField: require('../../components/ChoiceField/React.ChoiceField'),
    dialog: require('../../components/Dialog/React.Dialog')
};

module.exports = React.createClass({

    getInitialState: function() {
        return {
            disabled: {
                d1: true,
                d2: true,
                d3: true,
                d4: true
            }
        };
    },

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
                        'Dialog'
                    ),
                    getOpenButton(this, 'd1', 'open'),
                    React.createElement(
                        Components.dialog,
                        {
                            eventKey: 'd1',
                            title: 'All emails together',
                            disabled: this.state.disabled.d1
                        },
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-content'
                            },
                            getSubText(),
                            getChioceField(this, 'cf11', 'Option1'),
                            getChioceField(this, 'cf12', 'Option2')
                        ),
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-actions ms-Dialog-actionsRight'
                            },
                            getCloseButton(this, 'd1', 'Save', 'primary'),
                            getCloseButton(this, 'd1', 'Cancel')
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Dialog - Close'
                    ),
                    getOpenButton(this, 'd2', 'open'),
                    React.createElement(
                        Components.dialog,
                        {
                            onClick: this.handleClose,
                            eventKey: 'd2',
                            title: 'All emails together',
                            disabled: this.state.disabled.d2
                        },
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-content'
                            },
                            getSubText(),
                            getChioceField(this, 'cf21', 'Option1'),
                            getChioceField(this, 'cf22', 'Option2')
                        ),
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-actions ms-Dialog-actionsRight'
                            },
                            getCloseButton(this, 'd2', 'Save', 'primary'),
                            getCloseButton(this, 'd2', 'Cancel')
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Dialog - Large Header'
                    ),
                    getOpenButton(this, 'd3', 'open'),
                    React.createElement(
                        Components.dialog,
                        {
                            eventKey: 'd3',
                            kind: 'lgHeader',
                            title: 'All emails together',
                            disabled: this.state.disabled.d3
                        },
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-content'
                            },
                            getSubText()
                        ),
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-actions ms-Dialog-actionsRight'
                            },
                            getCloseButton(this, 'd3', 'More', 'primary'),
                            getCloseButton(this, 'd3', 'Got it')
                        )
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Dialog - Mulitiline'
                    ),
                    getOpenButton(this, 'd4', 'open'),
                    React.createElement(
                        Components.dialog,
                        {
                            eventKey: 'd4',
                            kind: 'multiline',
                            title: 'Create account',
                            disabled: this.state.disabled.d4
                        },
                        React.DOM.div(
                            {
                                className: 'ms-Dialog-content'
                            },
                            getCloseButton(this, 'd4', 'Create account', 'compound',
                                           'Description of the action this button takes'),
                            getCloseButton(this, 'd4', 'Create account', 'compound',
                                           'Description of the action this button takes'),
                            getCloseButton(this, 'd4', 'Create account', 'compound',
                                           'Description of the action this button takes')
                        )
                    )
                )
            )
        );
    },

    handleOpen: function(eventKey) {
        setDisabled(this, eventKey, false);
    },

    handleClose: function(eventKey) {
        setDisabled(this, eventKey, true);
    },

    handleSelect: function(eventKey, event) {
        console.log('handleSelect: ' + eventKey + '=' + event.target.value);
    }

});

function getChioceField(that, id, label) {
    return React.createElement(
        Components.choiceField,
        {
            id: id,
            onChange: that.handleSelect,
            eventKey: id,
            type: 'checkbox',
            label: label
        }
    );
}

function getCloseButton(that, eventKey, label, kind, description) {
    return React.createElement(
        Components.button,
        {
            className: 'ms-Dialog-action',
            onClick: that.handleClose,
            eventKey: eventKey,
            kind: kind,
            label: label
        },
        description
    );
}

function getOpenButton(that, eventKey, label) {
    return React.createElement(
        Components.button,
        {
            onClick: that.handleOpen,
            eventKey: eventKey,
            label: label
        }
    );
}

function getSubText() {
    return React.DOM.p(
        {
            className: 'ms-Dialog-subText'
        },
        'Your Inbox has changed. No longer does it include favorites, ' +
            'it is a singular destination for your emails.'
    );
}

function setDisabled(that, key, value) {
    var disabled = that.state.disabled;
    disabled[key] = value;
    that.setState({disabled: disabled});
}
