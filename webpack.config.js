module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: ['babel-loader',"style-loader", "css-loader", "less-loader"],
                },
            },
        ],
    },
};