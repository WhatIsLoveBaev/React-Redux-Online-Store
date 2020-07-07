const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = (env = {}) => {

    const { mode = 'development' } = env

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
              
            new HtmlWebpackPlugin({
                buildTime: new Date().toString(),
                template: 'public/index.html'
            }),
            new ErrorOverlayPlugin()
        ]

        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
            
        }


        return plugins
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',

        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined,
            publicPath: '/'
        },

        module: {
            rules: [

                // JS файлы програть через babel
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Загрузка картинок
                {
                    test: /\.(jpg|png|gif|ico|jpeg)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                // Загрузка видео
                {
                    test: /\.mp4$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'videos',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                // Загрузка шрифтов
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        { 
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                // Загрузка css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                    
                },
                // Загрузска scss
                {
                    test: /\.(s[ca]ss)$/,
                    use: [ ...getStyleLoaders(), 'sass-loader' ]
                }
            ]
        },

        plugins: getPlugins(),
        devtool: 'cheap-module-source-map',

        devServer: {
            open: true,
            port: 3000,
            overlay: false,
            hot: true,
            historyApiFallback: true,
        }
    }
}