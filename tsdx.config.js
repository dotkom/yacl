const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.output.esModule = true;
    config.plugins.push(
      postcss({
        modules: true,
      })
    );
    return config;
  },
};
