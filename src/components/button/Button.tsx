import React, { FC } from "react";
import {
  Button as ChakButton,
  ButtonOptions,
  HTMLChakraProps,
} from "@chakra-ui/react";
import { ColorScheme, getColorProps } from "../../common/colorscheme";

export interface ButtonProps extends HTMLChakraProps<"button">, ButtonOptions {
  colorScheme?: ColorScheme;
  variant?: "solid" | "outline";
}

const Button: FC<ButtonProps> = ({
  children,
  colorScheme,
  ...props
}: ButtonProps) => (
  <ChakButton borderRadius="5px" {...getColorProps(colorScheme)} {...props}>
    {children}
  </ChakButton>
);

export default Button;
