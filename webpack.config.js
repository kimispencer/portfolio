var webpack = require('webpack');
process.env.NODE_ENV = 'development';

module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.min.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css/, loaders: ['style', 'css'], include: __dirname + '/src'}
			// { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	},
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true,
		port: 8000
	} 
}; 