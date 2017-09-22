const path = require('path');

module.exports = {
    entry: {
        home: './client/HomePage.js',
        team: './client/TeamRegistrationPage',
        thanks: './client/ThankYouPage'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'client', 'src', 'js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
