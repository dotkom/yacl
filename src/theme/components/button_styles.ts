import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonStyle: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "4px",
    _hover: {
      transform: "translateY(-1px)",
    },
    _active: {
      transform: "translateY(2px)",
    },
  },
};

export default ButtonStyle;
