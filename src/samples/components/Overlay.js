/*
 * src/samples/components/Overlay.js
 */

'use strict';

var React = require('react');

var Components = {
    overlay: require('../../components/Overlay/React.Overlay')
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
                        'Overlay'
                    ),
                    React.createElement(
                        Components.overlay,
                        {
                            style: {
                                position: 'relative',
                                height: '200px',
                                boxShadow: '0 0 8px 0 rgba(0,0,0,0.3)'
                            }
                        }
                    )
                ),
                React.DOM.section(
                    null,
                    React.DOM.h2(
                        null,
                        'Overlay - Dark'
                    ),
                    React.createElement(
                        Components.overlay,
                        {
                            style: {
                                position: 'relative',
                                height: '200px',
                                boxShadow: '0 0 8px 0 rgba(0,0,0,0.3)'
                            },
                            kind: 'dark'
                        }
                    )
                )
            )
        );
    }

});
