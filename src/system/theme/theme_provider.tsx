import React, { FC } from 'react';
import { ChakraProvider as BaseThemeProvider, ChakraProviderProps as BaseThemeProviderProps } from '@chakra-ui/react';
import { Fonts } from './fonts';
import { OnlineTheme } from './theme';

export { BaseThemeProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<BaseThemeProviderProps> = ({ children, ...props }) => (
  // If no theme is not specified, set it to OnlineTheme.
  <BaseThemeProvider theme={props.theme ?? OnlineTheme} {...props}>
    <Fonts />
    {children}
  </BaseThemeProvider>
);
