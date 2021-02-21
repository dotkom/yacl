import React, { FC } from "react";
import {
  RadioGroup as BaseRadioGroup,
  RadioGroupProps as BaseRadioGroupProps,
} from "@chakra-ui/react";

export { BaseRadioGroupProps as RadioGroupProps };

const RadioGroup: FC<BaseRadioGroupProps> = ({ children, ...props }) => (
  <BaseRadioGroup {...props}>{children}</BaseRadioGroup>
);
export default RadioGroup;
