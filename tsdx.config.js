const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.input = './src/index.ts';
    config.plugins.push(
      postcss({
        modules: true,
      })
    );
    return config;
  },
};
