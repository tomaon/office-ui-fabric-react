/*
 * src/samples/index.js
 */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Elements = {
    base: document.getElementsByTagName('base')[0],
    root: document.getElementById('root')
};

var Root = require('./components/index');

ReactDOM.render(
    React.createElement(
        Root,
        {
            base: Elements.base ? Elements.base.getAttribute('href') : ''
        }
    ),
    Elements.root
);
