import React, { FC } from "react";
import {
  Checkbox as ChakCheckbox,
  UseCheckboxProps,
  useColorMode,
} from "@chakra-ui/react";
import { ColorScheme, getPaletteWeight } from "../../common/colorscheme";

interface CheckboxProps extends UseCheckboxProps {
  colorScheme?: ColorScheme;
}

const Checkbox: FC<CheckboxProps> = ({ colorScheme = "blue", ...props }) => {
  const { colorMode } = useColorMode();
  return (
    <ChakCheckbox
      colorScheme={colorScheme}
      _hover={{ borderColor: `${colorScheme}.${getPaletteWeight(colorMode)}` }}
      {...props}
    ></ChakCheckbox>
  );
};

export default Checkbox;
