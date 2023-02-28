const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TeserPlugin = require('terser-webpack-plugin') //mimificar javascript
const MinimizerCssPlugin = require('css-minimizer-webpack-plugin') //mimificar css
const path = require('path')



module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public',
        assetModuleFilename: 'imagem[hash][ext][query]'

    },
    devServer: {
        static:{
            directory: path.join(__dirname,'public')
        },
        compress: true,
        port: 6000,
    },
    optimization: {
        minimizer: [
            new TeserPlugin({
                parallel: true
            }),
            new MinimizerCssPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adicionar CSS a DOM injetando a tag <style>
                'css-loader', //interpretar @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource',
            generator:{
                filename: 'imgs/teste5[hash][ext][query]'
            }
        }],
    }
}