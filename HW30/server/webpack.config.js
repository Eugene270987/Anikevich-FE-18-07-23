const path = require('path');

module.exports = {
    mode: 'development', // production or development - then no 'minify'
    entry: './src/app.js',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};