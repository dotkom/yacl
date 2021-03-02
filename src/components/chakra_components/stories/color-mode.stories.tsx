import * as React from "react";
import { useColorMode } from "@chakra-ui/react";

export default {
  title: "Chakra/Other/Color Mode",
};

export const BasicExample = () => {
  const { colorMode } = useColorMode();
  return <code>Color mode is: {colorMode}</code>;
};
