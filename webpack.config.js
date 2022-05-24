// This plugin will create an HTML script that will contain 
// the bundle.js file that webpack generates so that we can 
// use it in our webapge
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// NOTE: assets are everything needed to create the website in 
// webpack, including js, html, png, otf, ttf, etc.
module.exports = {
	entry: "./src/js/index.js",
	mode: "development",

	output: {
		filename: "bundle.[hash].js", 			// Output of webpack
		path: path.resolve(__dirname, "dist")	// Directory output
	},
	
	// Plugins that webpack will use
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html"
		})
	],
	
	// Modules that webpack will resolve (that is, that webpack will bundle)
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*",  ".js", ".jsx", ".tsx", ".ts"]
	},

	module: {
		// Rules in regex that tell webpack how to bundle assets
		rules: [
			{
				test: /\.jsx?$/,							// Regex expression to test against
				exclude: /node_modules/,					// Regex exclude folders or files
				loader: "babel-loader"						// Loader to use
			},
			{
				test: /\.module\.css|.css$/,
				exclude: /\g\l\o\b\a\l\s\.\c\s\s/,
				use: ["style-loader", "css-loader"]			// use is the same as loader, but allows more than one option (loaders applied in order of listing)
			},
			{
				test: /.png|jpg|gif|pdf$/,
				use: ["file-loader"]
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"]
			}
		]
	}
}	
