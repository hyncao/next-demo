/* eslint-disable */
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const myWebpack = {
  webpack: config => {
    config.output.publicPath = '.';
    return config;
  },
};

const cssWebpack = withCss({
  ...myWebpack,
  webpack: (config, { isServer }) => {
    console.log(config.output);
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
});

const sassWebpack = withSass({
  ...cssWebpack,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:8]',
  },
});

module.exports = sassWebpack;
