import * as path from 'path';

import autoprefixer from 'autoprefixer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Needed because robotstxt-webpack-plugin has no type declarations
import RobotstxtPlugin from 'robotstxt-webpack-plugin';
import type * as webpack from 'webpack';

export const BASE_PATH = path.resolve(__dirname, '..');
export const BASE_PATH_SRC = path.resolve(BASE_PATH, 'src');

const config: webpack.Configuration = {
    entry: { app: path.resolve(BASE_PATH, 'src', 'index.tsx') },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(BASE_PATH, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: 'index.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'spacestagram',
            template: path.resolve(BASE_PATH, 'public', 'index.html'),
            favicon: path.resolve(BASE_PATH, 'public', 'favicon.png'),
            meta: {
                description: 'spacestagram',
            },
        }),
        new Dotenv({
            path: path.resolve(BASE_PATH, '.env'),
            allowEmptyValues: true,
            systemvars: true,
            safe: true,
        }),
        new RobotstxtPlugin({}),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(BASE_PATH_SRC, 'components'),
            '@store': path.resolve(BASE_PATH_SRC, 'store'),
            '@types': path.resolve(BASE_PATH_SRC, 'types'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
};

export default config;
