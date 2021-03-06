import { ChakraProvider, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { addParameters, StoryContext } from '@storybook/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { OnlineTheme } from '../src/system/theme';
import { Fonts } from '../src/system/theme/fonts';

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  return (
    <>
      <ChakraProvider theme={OnlineTheme}>
        <Fonts />
        <ColorModeToggleBar />
        <StoryFn />
      </ChakraProvider>
    </>
  );
};

export const decorators = [withChakra];

addParameters({
  viewMode: 'canvas',
});
