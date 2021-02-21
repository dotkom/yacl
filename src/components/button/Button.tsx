import React, { forwardRef } from "react";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@chakra-ui/react";

export { BaseButtonProps as ButtonProps };

export const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ colorScheme = "blue", ...props }, ref) => (
    <BaseButton colorScheme={colorScheme} {...props} ref={ref}>
      {props.children}
    </BaseButton>
  )
);

export default Button;
