const postcss = require("rollup-plugin-postcss");
const typescript = require("rollup-plugin-typescript2");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
      }),
      typescript({ useTsconfigDeclarationDir: true })
    );
    return config;
  },
};
