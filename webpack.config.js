var webpack = require('webpack');
process.env.NODE_ENV = 'development';

module.exports = {
	context: __dirname,
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "scripts.min.js"
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
		inline: true
	} 
	// plugins: debug ? [] : [
	// 	new webpack.optimize.DedupePlugin(),
	// 	new webpack.optimize.OccurenceOrderPlugin(),
	// 	new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	// ],
}; 