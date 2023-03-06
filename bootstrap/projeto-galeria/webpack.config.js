const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //este aqui é o terser-webpack-plugin legado
const TerserPlugin = require("terser-webpack-plugin");
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') legado
const MinimizerCssPlugin = require('css-minimizer-webpack-plugin') //mimificar css
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        liveReload: false,
        static:{
            directory: path.join(__dirname,'build')
        },
        compress: true,
        port: 9000,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new MinimizerCssPlugin({})
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin({
            patterns:[
                { context: 'src/', from: '**/*.html' },
                { context: 'src/', from: 'imgs/**/*' },
                { from: 'src/favicon.ico' }
            ]
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource',
            generator: {
                filename: 'imgs/[hash][ext][query]'
            }

        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[hash][ext][query]'
            }
        }]
    }
}