const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    mode: "development",
	
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html"
        })
    ],

    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.module\.css$/,
                exclude: /\g\l\o\b\a\l\s\.\c\s\s/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png|jpg|gif|pdf$/,
                use: ["file-loader"]
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        ]
    }
}
