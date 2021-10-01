const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const { merge } = require('webpack-merge');

const modeConfig = (env='development')=>require(`./build-utils/webpack.${env}`)(env);

module.exports =({mode})=>{
    console.log(mode,`./build-utils/webpack.${mode}`);
    return merge(
        {
            mode,
            entry:"./src/index.js",
            output:{
                filename:"bundle.js"
            },
            plugins:[new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode)
    )
}