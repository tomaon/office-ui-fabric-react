/*
 * src/components/React.Attributes.js
 *
 * http://www.w3.org/TR/2014/REC-html5-20141028/dom.html#global-attributes
 * http://www.w3.org/TR/2014/REC-html5-20141028/forms.html#the-input-element
 * https://facebook.github.io/react/docs/tags-and-attributes.html
 * react/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
 */

'use strict';

var React = require('react');

var Attributes = {

    // Global attributes
    accessKey: React.PropTypes.string,
    className: React.PropTypes.string,
    contentEditable: React.PropTypes.oneOf(['true', 'false']),
    dir: React.PropTypes.oneOf(['ltr', 'rtl', 'auto']),
    hidden: React.PropTypes.bool,
    id: React.PropTypes.string,
    lang: React.PropTypes.string,
    spellCheck: React.PropTypes.oneOf(['true', 'false']),
    style: React.PropTypes.object,
    tabIndex: React.PropTypes.number,
    title: React.PropTypes.string,
    translate: React.PropTypes.oneOf(['yes', 'no']), // not-supported

    // React attributes
    key: React.PropTypes.string,
    ref: React.PropTypes.oneOfType([
        React.PropTypes.func,
        React.PropTypes.string
    ])
};

module.exports = {

    a: Object.assign({}, Attributes, {

        // Event handler content attribute
        onClick: React.PropTypes.func, // (eventKey,event)

        // Content attributes
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        download: React.PropTypes.string,
        rel: React.PropTypes.arrayOf(React.PropTypes.oneOf([
            'alternate', 'author', 'bookmark', 'help', 'license',
            'next', 'nofollow', 'noreferrer', 'prefetch', 'prev',
            'search', 'tag'
        ])),
        hreflang: React.PropTypes.string,
        type: React.PropTypes.string,

        // Aria role attribute
        role: React.PropTypes.oneOf([
            'link'
        ])
    }),

    button: Object.assign({}, Attributes, {

        // Event handler content attribute
        onClick: React.PropTypes.func, // (eventKey,event)

        // Content attributes
        autoFocus: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        form: React.PropTypes.string,
        formAction: React.PropTypes.string,
        formEncType: React.PropTypes.string,
        formMethod: React.PropTypes.string,
        formNoValidate: React.PropTypes.bool,
        formTarget: React.PropTypes.string,
        menu: React.PropTypes.string,
        name: React.PropTypes.string,
        type: React.PropTypes.oneOf(['submit', 'reset', 'button']),
        value: React.PropTypes.string,

        // Aria role attribute
        role: React.PropTypes.oneOf([
            'button', 'link', 'menuitem', 'menuitemcheckbox',
            'menuitemradio', 'radio'
        ])
    }),

    div: Object.assign({}, Attributes, {

        // Aria role attribute
        role: React.PropTypes.string
    }),

    i: Object.assign({}, Attributes, {

        // Aria role attribute
        role: React.PropTypes.string
    }),

    input: {

        checkbox: Object.assign({}, Attributes, {

            // Global attribute
            id: React.PropTypes.string.isRequired,

            // Event handler content attribute
            onChange: React.PropTypes.func, // (eventKey,event)

            // Content attributes
            autoFocus: React.PropTypes.bool,
            checked: React.PropTypes.bool,
            disabled: React.PropTypes.bool,
            name: React.PropTypes.string,
            required: React.PropTypes.bool,
            type: React.PropTypes.oneOf(['checkbox']),
            value: React.PropTypes.string,

            // Aria role attribute
            role: React.PropTypes.oneOf([
                'checkbox', 'menuitemcheckbox'
            ])
        }),

        radio: Object.assign({}, Attributes, {

            // Global attribute
            id: React.PropTypes.string.isRequired,

            // Event handler content attribute
            onChange: React.PropTypes.func, // (eventKey,event)

            // Content attributes
            autoFocus: React.PropTypes.bool,
            checked: React.PropTypes.bool,
            disabled: React.PropTypes.bool,
            name: React.PropTypes.string,
            required: React.PropTypes.bool,
            type: React.PropTypes.oneOf(['radio']),
            value: React.PropTypes.string,

            // Aria role attribute
            role: React.PropTypes.oneOf([
                'radio', 'menuitemradio'
            ])
        }),

        search: Object.assign({}, Attributes, {

            // Event handler content attributes
            onChange: React.PropTypes.func, // (eventKey,event)
            onInput: React.PropTypes.func,  // (eventKey,event)

            // Content attributes
            autoComplete: React.PropTypes.string,
            autoFocus: React.PropTypes.bool,
            dirname: React.PropTypes.string, // not-supported
            disabled: React.PropTypes.bool,
            inputMode: React.PropTypes.string,
            list: React.PropTypes.string,
            maxLength: React.PropTypes.number,
            minLength: React.PropTypes.number,
            name: React.PropTypes.string,
            placeholder: React.PropTypes.string,
            readOnly: React.PropTypes.bool,
            required: React.PropTypes.bool,
            value: React.PropTypes.string,
            pattern: React.PropTypes.string,
            size: React.PropTypes.number,
            type: React.PropTypes.oneOf(['search']),

            // Aria role attribute
            role: React.PropTypes.oneOf([
                'textbox', 'combobox'
            ])
        }),

        text: Object.assign({}, Attributes, {

            // Event handler content attributes
            onChange: React.PropTypes.func, // (eventKey,event)
            onInput: React.PropTypes.func,  // (eventKey,event)

            // Content attributes
            autoComplete: React.PropTypes.string,
            autoFocus: React.PropTypes.bool,
            dirname: React.PropTypes.string, // not-supported
            disabled: React.PropTypes.bool,
            inputMode: React.PropTypes.string,
            list: React.PropTypes.string,
            maxLength: React.PropTypes.number,
            minLength: React.PropTypes.number,
            name: React.PropTypes.string,
            placeholder: React.PropTypes.string,
            readOnly: React.PropTypes.bool,
            required: React.PropTypes.bool,
            value: React.PropTypes.string,
            pattern: React.PropTypes.string,
            size: React.PropTypes.number,
            type: React.PropTypes.oneOf(['text']),

            // Aria role attribute
            role: React.PropTypes.oneOf([
                'textbox', 'combobox'
            ])
        })
    },

    label: Object.assign({}, Attributes, {

        // Content attributes
        form: React.PropTypes.string,
        htmlFor: React.PropTypes.string
    }),

    li: Object.assign({}, Attributes, {

        // Content attribute
        value: React.PropTypes.number, // ol

        // Aria role attribute
        role: React.PropTypes.oneOf([
            'listitem', 'menuitem', 'menuitemcheckbox', 'menuitemradio',
            'option', 'tab', 'treeitem', 'presentation'
        ])
    }),

    span: Object.assign({}, Attributes, {

        // Aria role attribute
        role: React.PropTypes.string
    }),

    textarea: Object.assign({}, Attributes, {

        // Event handler content attributes
        onChange: React.PropTypes.func, // (eventKey,event)
        onInput: React.PropTypes.func,  // (eventKey,event)

        // Content attributes
        autoComplete: React.PropTypes.string,
        autoFocus: React.PropTypes.bool,
        dirname: React.PropTypes.string, // not-supported
        disabled: React.PropTypes.bool,
        inputMode: React.PropTypes.string,
        list: React.PropTypes.string,
        maxLength: React.PropTypes.number,
        minLength: React.PropTypes.number,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        readOnly: React.PropTypes.bool,
        required: React.PropTypes.bool,
        value: React.PropTypes.string,
        cols: React.PropTypes.number,
        rows: React.PropTypes.number,
        wrap: React.PropTypes.oneOf(['soft', 'hard']),

        // Aria role attribute
        role: React.PropTypes.oneOf([
            'textbox'
        ])
    }),

    ul: Object.assign({}, Attributes, {

        // Aria role attribute
        role: React.PropTypes.oneOf([
            'list', 'directory', 'group', 'listbox', 'menu', 'menubar',
            'presentation', 'tablist', 'toolbar', 'tree'
        ])
    })

};
