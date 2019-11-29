const path = require("path");

module.exports = {
    entry: {
        entryOne:[
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
