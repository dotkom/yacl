import React from "react";
import {
  Radio as ChakRadio,
  useColorMode,
  UseRadioProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { ColorScheme, getPaletteWeight } from "../../common/colorscheme";

export interface RadioProps {
  colorScheme?: ColorScheme;
}

const Radio: FC<RadioProps & UseRadioProps> = ({
  colorScheme = "blue",
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <ChakRadio
        _hover={{
          borderColor: `${colorScheme}.${getPaletteWeight(colorMode)}`,
        }}
        {...props}
      >
        {children}
      </ChakRadio>
    </>
  );
};

export default Radio;
