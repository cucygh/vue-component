module.exports = {
    entry: './public/js/page1/zindex.js',
    output: {
        path: './public/online/js',
        filename: 'zindex.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }]
    }
};
