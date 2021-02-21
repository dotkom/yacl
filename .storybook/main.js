const { propNames } = require("@chakra-ui/styled-system");

const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const excludedPropNames = propNames.concat([
  "as",
  "apply",
  "sx",
  "__css",
  "isTruncated",
  "layerStyle",
  "noOfLines",
  "textStyle",
  "orientation",
  "styleConfig",
]);

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    "@storybook/addon-toolbars",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "storybook-addon-react-docgen",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop.name);
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules/@types/react") ?? false;
        return !(isStyledSystemProp || isHTMLElementProp);
      },
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = {
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };

    return config;
  },
};
