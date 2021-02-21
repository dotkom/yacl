import React, { FC } from "react";
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
  useColorMode,
} from "@chakra-ui/react";
import { getPaletteWeight } from "../../common/colorscheme";

export { BaseCheckboxProps as CheckboxProps };

const Checkbox: FC<BaseCheckboxProps> = ({
  colorScheme = "blue",
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <BaseCheckbox
      colorScheme={colorScheme}
      _hover={{ borderColor: `${colorScheme}.${getPaletteWeight(colorMode)}` }}
      {...props}
    >
      {children}
    </BaseCheckbox>
  );
};

export default Checkbox;
