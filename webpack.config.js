// require('babel-polyfill');
// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//     entry: {
//         tripDetail: [
//             'babel-polyfill',
//             './app/vue/tripDetail/index.js'
//         ],
//     },
//     output: {
//         path: path.resolve(__dirname, './public'),
//         publicPath: '/public/',
//         filename: 'js/vue/[name].' + nameSuffix + '.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                   'vue-style-loader',
//                   'css-loader'
//                 ],
//             },
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader',
//                 options: {
//                     loaders: {}
//                     // other vue-loader options go here
//                 }
//             },
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ["env"]
//                 },
//                 exclude: /node_modules/
//             },
//         ]
//     },
//     resolve: {
//         alias: {
//             'vue$': 'vue/dist/vue.esm.js'
//         },
//         extensions: ['*', '.js', '.vue', '.json']
//     },
// }
const path = require("path");

module.exports = {
    entry: {
        entryOne:[
            // 'babel-polyfill',
            './our.js'
        ]
    },
    output: {
        filename: 'ourTranspiled.js',
        path: path.join(__dirname, "src/assets")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["env"]
                },
                exclude: /node_modules/
            },
        ]
    },

}