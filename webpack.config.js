/* eslint-disable no-undef */
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:3000'
        })
    }
}



// const webpack = require('webpack');
// const dotenv = require('dotenv');

// module.exports = () => {
//     // call dotenv and it will return an Object with a parsed key 
//     const env = dotenv.config().parsed;
//     // reduce it to a nice object, the same as before
//     const envKeys = Object.keys(env).reduce((prev, next) => {
//         prev[`process.env.${next}`] = JSON.stringify(env[next]);
//         return prev;
//     }, {});

//     return {
//         mode: 'development',
//         module: {
//             rules: [
//                 {
//                     test: /\.jsx?$/,
//                     loader: 'babel-loader'
//                 }
//             ]
//         },
//         resolve: {
//             extensions: ['.js', '.jsx'],
//             alias: {
//                 '@': path.resolve(__dirname, 'src/'),
//             }
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 template: './src/index.html'
//             }),
//             new webpack.DefinePlugin(envKeys)],
//         devServer: {
//             historyApiFallback: true
//         },
//         externals: {
//             // global app config object
//             config: JSON.stringify({
//                 apiUrl: 'http://localhost:3000'
//             })
//         }
//     };
// };