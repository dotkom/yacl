import React, { FC } from "react";
import {
  ButtonGroup as BaseButtonGroup,
  ButtonGroupProps as BaseButtonGroupProps,
} from "@chakra-ui/react";

export { BaseButtonGroupProps as ButtonGroupProps };

const ButtonGroup: FC<BaseButtonGroupProps> = ({ children, ...props }) => (
  <BaseButtonGroup {...props}>{children}</BaseButtonGroup>
);

export default ButtonGroup;
