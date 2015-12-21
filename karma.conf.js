module.exports = function (config) {
  var _config = {

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/es6-shim/es6-shim.js',
      {pattern: 'spec.bundle.js', watched: false}
    ],
    exclude: [],
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: {
      resolve: {
        root: __dirname,
        extensions: ['', '.js', '.ts', '.json'],
        alias: {
          'app': 'src/app',
          'common': 'src/common'
        }
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.ts$/,
            loader: 'ts',
            query: {
              'ignoreDiagnostics': [
                2300, // 2300 -> Duplicate identifier
                2374,
                2375
              ]
            },
            exclude: [
              /\.min\.js$/,
              /node_modules/
            ]
          },
          {test: /reflect-metadata/, loader: "imports?require=>false"},
          {test: /\.json$/, loader: 'json'},
          {test: /\.html$/, loader: 'raw'},
          {test: /\.css$/, loader: 'raw'},
          {
            test: /\.scss$/,
            loaders: ["raw", "sass"]
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
        ]
      },
      stats: {colors: true, reasons: true},
      debug: true
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS2'],
    singleRun: true
  };

  config.set(_config);
};
