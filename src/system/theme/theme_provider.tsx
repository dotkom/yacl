import React, { FC } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { Fonts } from './fonts';
import { OnlineTheme } from './theme';

export { ChakraProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<ChakraProviderProps> = ({ children, ...props }) => (
  // If no theme is not specified, set it to OnlineTheme.
  <ChakraProvider theme={props.theme ?? OnlineTheme} {...props}>
    <Fonts />
    {children}
  </ChakraProvider>
);
