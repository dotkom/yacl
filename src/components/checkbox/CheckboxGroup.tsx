import React, { FC } from "react";
import {
  CheckboxGroup as BaseCheckboxGroup,
  CheckboxGroupProps as BaseCheckboxGroupProps,
} from "@chakra-ui/react";

export { BaseCheckboxGroupProps as CheckboxGroupProps };

const CheckboxGroup: FC<BaseCheckboxGroupProps> = ({ children, ...props }) => (
  <BaseCheckboxGroup {...props}>{children}</BaseCheckboxGroup>
);

export default CheckboxGroup;
