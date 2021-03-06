// module.exports = {
//     entry: './main.js',
//     output: {
//         path: './',
//         filename: 'index.js'
//     },
//     devServer: {
//         inLine: true,
//         port: 3333
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel',
//                 query: {
//                     presets: ['es2015', 'react']
//                 }
//             }
//         ]
//     }
// }


module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inLine: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}