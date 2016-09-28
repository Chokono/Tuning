'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function CreateWebpackConfig(type) {
    var folder = (type == 'js' ? 'scripts' : 'assets');
    this.entry = {
        home: path.join(__dirname, folder, 'home')
    };
    //custom files input
    if (type == 'js') {
        this.entry['common'] = path.join(__dirname, folder, 'common');
    } else if (type == 'scss') {
        //this.entry['filename'] = path.join(__dirname,  folder, 'filename');
    }

    this.output = {
        filename: '[name].' + (type == 'js' ? 'js' : 'css'),
        path: path.join(__dirname, 'bundle'),
        publicPath: ''
    }; //publicPath !!

    this.resolve = {
        extensions: ['']
    };

    this.resolve.extensions.push(`.${type}`);

    this.module = {
        loaders: [{
                test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
                loader: (type == 'js' ? 'ignore-loader' : 'file?name=[path][name].[ext]')
            }, {
                test: /\.json/,
                loader: "json"
            },
            (() => {
                if (type == 'js') {
                    return {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: [ "es2015" ]
                        }
                    };
                } else if (type == 'scss') {
                    return {
                        test: /\.scss$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
                    };
                }
            })()
        ]
    };

    this.plugins = [
        new ExtractTextPlugin('[name].css'),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ];

    this.devtool = (NODE_ENV == 'development' ? "inline-source-map" : '');

    if (NODE_ENV == 'production') {
        this.plugins.push(new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }));
        this.plugins.push(new webpack.optimize.DedupePlugin());
    }
}

module.exports = [
    new CreateWebpackConfig('js'),
    new CreateWebpackConfig('scss')
];
