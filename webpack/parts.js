const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = createParts;

function createParts(rootDir, env) {

    const isDevServer = process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);

    return {
        isDevServer,
        forEnvironment,
        prodOptimize,
        sass,
        testCoverage,
        typescript
    };

    ////////

    function prodOptimize() {
        return {
            plugins: [
                // doesn't save anything in this small app. npm@3 mostly takes care of this
                new webpack.optimize.DedupePlugin(),
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false,
                    quiet: true,
                }),
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"production"',
                    },
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        screw_ie8: true, // eslint-disable-line
                        warnings: false,
                    },
                    comments: false,
                    sourceMap: true
                })
            ]
        };
    }

    function sass(excludeFiles) {
        excludeFiles = excludeFiles || [];
        // note: would like to use sourcemaps in a deployed website (ie outside of dev-server)
        // but these do not work with relative paths (see the configuration of ouput options 
        // in this file for more details)
        let loaders;
        if ((env.debug || env.prod) && isDevServer) {
            loaders = 'style!css?sourceMap!resolve-url!sass?sourceMap';
        } else {
            // note: the 
            loaders = 'style!css!resolve-url!sass?sourceMap';
        }
        return {
            module: {
                loaders: [
                    {
                        test: /\.scss$/,
                        loaders: loaders,
                        exclude: [/node_modules/, ...excludeFiles]
                    }
                ]
            }
        };
    }

    function forEnvironment() {
        if (env.prod) {
            return merge(
                {
                    devtool: 'source-map',
                    bail: true
                },
                prodOptimize()
            );
        } else if (env.debug) {
            return {
                output: {
                    pathinfo: true
                },
                // note: wanted to use eval-source-map to increase build times, but chrome would not stop on breakpoint
                // therefore instead using source-map
                devtool: 'source-map'
            };
        } else if (env.test) {
            return {
                devtool: 'inline-source-map'
            };
        } else {
            return {
                devtool: 'eval'
            };
        }
    }

    function testCoverage() {
        return {
            module: {
                postLoaders: [
                    {
                        test: /\.ts$/,
                        exclude: [
                            /\.spec\.ts$/,
                            /node_modules/
                        ],
                        loader: 'istanbul-instrumenter'
                    }
                ]
            }
        };
    }

    function typescript(tsconfig = 'tsconfig.json') {
        const tsconfigPath = path.resolve('..', rootDir, tsconfig)
        return {
            // Currently we need to add '.ts' to the resolve.extensions array.
            resolve: {
                extensions: ['', '.ts', '.tsx', '.js', '.jsx']
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        exclude: /node_modules/,
                        loader: `awesome-typescript?tsconfig=${tsconfigPath}`
                    }
                ]
            }
        };
    }
}