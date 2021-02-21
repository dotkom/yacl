import React, { FC } from "react";
import { Button as ChakButton, ButtonOptions } from "@chakra-ui/react";
import { ColorScheme } from "../../common/colorscheme";

export interface ButtonProps extends ButtonOptions {
  colorScheme?: ColorScheme;
  variant?: "solid" | "outline";
}

const Button: FC<ButtonProps> = ({
  children,
  colorScheme = "blue",
  ...props
}: ButtonProps) => (
  <ChakButton colorScheme={colorScheme} {...props}>
    {children}
  </ChakButton>
);

export default Button;
