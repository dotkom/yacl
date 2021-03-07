import React, { FC } from 'react';
import {
  ChakraProvider as BaseThemeProvider,
  ChakraProviderProps as BaseThemeProviderProps,
  GlobalStyle,
} from '@chakra-ui/react';
import theme from './theme';

export { BaseThemeProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<BaseThemeProviderProps> = ({ children, ...props }) => (
  <BaseThemeProvider theme={theme} {...props}>
    <GlobalStyle />
    {children}
  </BaseThemeProvider>
);
