import React, { FC } from 'react';
import { ChakraProvider as BaseThemeProvider, ChakraProviderProps as BaseThemeProviderProps } from '@chakra-ui/react';

export { BaseThemeProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<BaseThemeProviderProps> = ({ children, ...props }) => (
  <BaseThemeProvider {...props}>{children}</BaseThemeProvider>
);
