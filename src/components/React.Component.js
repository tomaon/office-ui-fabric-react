/*
 * src/components/React.Component.js
 */

/* eslint-disable guard-for-in */

'use strict';

var classnames = require('classnames');

var Attributes = require('./React.Attributes');

var Component = {

    className: classnames,

    at: function(array, index) {
        return index < 0 || array.length <= index ? undefined : array[index];
    },

    findIndex: function(array, func, begin, end) {
        return find(array, func, +1, begin, end);
    },

    findLastIndex: function(array, func, begin, end) {
        return find(array, func, -1, begin, end);
    },

    getProps: function() {
        var to = {};
        for (var attributes = arguments[0], i = 1; i < arguments.length; ++i) {
            var from = arguments[i];
            for (var n in from) {
                var v = from[n];
                if (attributes[n] !== undefined && v !== undefined) {
                    to[n] = v;
                }
            }
        }
        return to;
    },

    handle: function(that, name, args, bool) {
        if (that.props[name] !== undefined) {
            that.props[name].apply(null, args);
        } else if (bool && that.context[name] !== undefined) {
            that.context[name].apply(null, args);
        }
    },

    includes: function(from, vars, prefix) {
        var to = {};
        for (var k in vars) {
            if ({}.hasOwnProperty.call(vars, k)) {
                var v = from[k];
                to[prefix + v] = vars[k].includes(v);
            }
        }
        return to;
    },

    toArray: function(obj) {
        return Object.keys(obj).map(function(e) {
            return obj[e];
        });
    },

    valid: function() {
        for (var i = 0, s = arguments.length; i < s; ++i) {
            var v = arguments[i];
            if (v !== undefined) {
                return v;
            }
        }
        return undefined;
    }
};

function find(array, func, n, begin, end) {
    var length = array.length;
    if (n < 0) {
        if (begin === undefined || begin > length) {
            begin = length - 1;
        }
        if (end === undefined || end < 0) {
            end = -1;
        }
        if (begin < end) {
            end = begin;
        }
    } else {
        if (begin === undefined || begin < 0) {
            begin = 0;
        }
        if (end === undefined || end > length) {
            end = length;
        }
        if (begin > end) {
            end = begin;
        }
    }
    for (var i = begin; i !== end; i += n) {
        if (func(array[i], i)) {
            return i;
        }
    }
    return -1;
}

Component.Attributes = Attributes;

module.exports = Component;
