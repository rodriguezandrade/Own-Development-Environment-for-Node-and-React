module.exports = {
    module: {
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.css'] // Archivos que soportará webpack
        },
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader' // traspilador babel
            },
            {
                test: /\.json$/,
                use: 'json-loader' // para que soporte archivos json
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // para los estilos #css
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    }
                ]
            }
        ]
    },
};