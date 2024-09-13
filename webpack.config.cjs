const path = require("path")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.(c|sa|sc)ss$/,
                use: [
                    { loader: "style-loader", options: { esModule: true } },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" },
                ]
            },
            {
                test: /\.(c|sa|sc)ss$/,
                use: [
                    { loader: "style-loader", options: { esModule: true } },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" },
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.module.scss', '.scss', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
    },
    mode: "development",
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: './public/index.html'
        },
        hot: true,
        open: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}