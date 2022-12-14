const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./public/index.html" }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.ts$|tsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: ['file-loader']
            }
        ]
    }
};