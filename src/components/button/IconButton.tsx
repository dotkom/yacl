import React, { FC } from "react";
import {
  IconButton as BaseIconButton,
  IconButtonProps as BaseIconButtonProps,
} from "@chakra-ui/react";

export { BaseIconButtonProps as IconButtonProps };

const IconButton: FC<BaseIconButtonProps> = ({ children, ...props }) => (
  <BaseIconButton {...props}>{children}</BaseIconButton>
);

export default IconButton;
