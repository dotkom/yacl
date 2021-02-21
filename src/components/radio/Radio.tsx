import React from "react";
import {
  Radio as BaseRadio,
  RadioProps as BaseRadioProps,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { getPaletteWeight } from "../../common/colorscheme";

export { BaseRadioProps as RadioProps };

const Radio: FC<BaseRadioProps> = ({
  colorScheme = "blue",
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <BaseRadio
        _hover={{
          borderColor: `${colorScheme}.${getPaletteWeight(colorMode)}`,
        }}
        {...props}
      >
        {children}
      </BaseRadio>
    </>
  );
};

export default Radio;
