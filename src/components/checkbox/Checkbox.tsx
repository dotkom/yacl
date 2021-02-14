import React, { FC } from "react";
import { Checkbox as ChakCheckbox, UseCheckboxProps } from "@chakra-ui/react";

interface CheckboxProps extends UseCheckboxProps {
  colorScheme?: string;
}

const Checkbox: FC<CheckboxProps> = ({ ...props }) => (
  <ChakCheckbox {...props}></ChakCheckbox>
);

export default Checkbox;
