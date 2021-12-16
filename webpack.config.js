const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        index: {
            import: './src/index.tsx',
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
        extensions: ['.js', '.jsx','.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|tsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ]
}
