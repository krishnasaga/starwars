const path = require('path')

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'renderer',
        },
        renderer: ['react-dom', 'react'],
    },
    performance: {
        maxEntrypointSize: 400000,
        maxAssetSize: 400000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        },
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}
