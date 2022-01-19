import * as path from 'path';

import * as webpack from 'webpack';
import { merge } from 'webpack-merge';

import common, { BASE_PATH } from './common';

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Needed because devServer is not present on webpack config type
    devServer: {
        contentBase: path.resolve(BASE_PATH, 'dist'),
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
