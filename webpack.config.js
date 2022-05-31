const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    // target: 'web',
    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, './.webpack/web'),
        },
        compress: true,
        port: 8000,
    },

    entry: {
        app: './src/app.tsx',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            path: './.webpack/web/',
        }),
    ],

    module: {
        rules: [
        {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        },
        ],
    },

    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './.webpack/web/'),
        clean: true,
    },
};
