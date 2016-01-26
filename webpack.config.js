var Webpack = require('webpack');

module.exports = (function(options) {

    var entry = {
        'office-ui-fabric-react': './index.js'
    };

    if (options.env === 'development') {
        entry.samples = './samples/index.js'
    }

    var plugins = [];

    if (options.minimize) {
        plugins.push(
            new Webpack.optimize.UglifyJsPlugin({
                'compress': {
                    'warnings': false
                }
            })
        );
    }

    return {

        context: __dirname + '/src',

        entry: entry,

        output: {
            path: __dirname + '/dist',
            filename: options.minimize ? '[name].min.js' : '[name].js',
            library: 'OfficeUIFabricReact'
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(local_modules|node_modules)/,
                    loader: 'eslint-loader'
                }
            ]
        },

        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },

        plugins: plugins
    };

})({
    env:  process.env.NODE_ENV,
    minimize: process.env.NODE_ENV === 'production' // -p: --optimize-(minimize|occurence-order)
});
