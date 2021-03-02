import * as React from 'react';
import { chakra } from '@chakra-ui/system';

export * from './hover.stories';
export * from './popover.stories';

export default {
  title: 'Chakra/Other/Popover',
  decorators: [
    (story: Function) => (
      <chakra.div mx="auto" maxW="400px" mt="200px">
        {story()}
      </chakra.div>
    ),
  ],
};
