import React, { FC } from "react";
import {
  Button as ChakButton,
  ButtonOptions,
  HTMLChakraProps,
} from "@chakra-ui/react";

type Colors = {
  primary: string;
  secondary: string;
};
export interface ButtonProps extends HTMLChakraProps<"button">, ButtonOptions {
  colors?: Colors;
  colorScheme?: string;
  variant?: "solid" | "outline";
}

const Button: FC<ButtonProps> = ({
  children,
  colorScheme = "blue",
  colors,
  ...props
}: ButtonProps) => {
  const colorProps = colors
    ? { bg: colors.primary, color: colors.secondary }
    : null;
  return (
    <ChakButton
      borderRadius="5px"
      colorScheme={!colors ? colorScheme : undefined}
      {...colorProps}
      {...props}
    >
      {children}
    </ChakButton>
  );
};

export default Button;
