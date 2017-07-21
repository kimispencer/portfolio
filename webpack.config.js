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
			{ test: /\.css/, loaders: ['style', 'css'], include: __dirname + '/src'},
			{ test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url-loader?limit=100000" },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
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