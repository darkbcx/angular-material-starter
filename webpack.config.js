
var path = require('path');

module.exports = {
    devServer: {
	contentBase: __dirname + '/www',
    },
    context: __dirname + '/www',
    entry: './main.ts',
    output: {
	path: __dirname + '/www',
	filename: 'bundle.js'
    },
    module: {
	loaders: [
	    { test: /\.css$/, loader: 'style!css' },
	    { test: /\.json$/, loader: 'json' },
	    { test: /\.html$/, loader: 'html' },
	    { test: /\.ts$/, loader: 'awesome-typescript'},
	],
    },
    resolve: {
	root: [
	    path.resolve('./www'),
	],
	extensions: [ '', '.webpack.js', '.web.js', '.ts', 'tsx', '.js', 'jsx' ],
    },
}
