export type ColorScheme = string | [string, string] | undefined;

export const getColorProps = (colors: ColorScheme = "blue") =>
  Array.isArray(colors)
    ? { bg: colors[0], color: colors[1] }
    : { colorScheme: colors };
