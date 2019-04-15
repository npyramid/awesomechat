const path = require('path');

module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  devServer: {
    proxy: 'http://localhost:8044',
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/styles/variables.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', path.join(__dirname, 'src'));
  },
};
